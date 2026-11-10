// Credit: https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/

window.addEventListener('DOMContentLoaded', () => {

  const nav = document.querySelector('nav.section-nav');
  if (!nav) return;

  // All TOC links that reference in-page anchors
  const tocLinks = Array.from(nav.querySelectorAll('li a[href^="#"]'));

  // Heading elements that define logical sections
  const headings = Array.from(document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]'));
  if (!headings.length) return;

  // Build section ranges: each heading's section runs from its top to the next heading's top
  const sections = headings.map((h, i) => ({ id: h.id, el: h, index: i, level: parseInt(h.tagName.substring(1), 10) }));

  // Build parent map: for each heading, find the closest previous heading with a smaller level
  const parentMap = {};
  sections.forEach((s, i) => {
    parentMap[s.id] = null;
    for (let j = i - 1; j >= 0; j--) {
      if (sections[j].level < s.level) {
        parentMap[s.id] = sections[j].id;
        break;
      }
    }
  });

  function updatePositions() {
    sections.forEach((s, i) => {
      const rect = s.el.getBoundingClientRect();
      s.top = rect.top + window.scrollY;
      s.bottom = (i + 1 < sections.length) ? (sections[i + 1].el.getBoundingClientRect().top + window.scrollY) : (document.body.scrollHeight + 1);
    });
    // compute marker positions relative to nav/progress track
    const progressEl = nav.querySelector('.toc-progress');
    const markersEl = nav.querySelector('.toc-markers');
    if (!progressEl || !markersEl) return;
    const progressRect = progressEl.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const progressTopAbs = progressRect.top + scrollY;
    const progressHeight = Math.max(8, progressRect.height);

    const docRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    sections.forEach(s => {
      const ratio = Math.max(0, Math.min(1, s.top / docRange));
      const posAbs = progressTopAbs + ratio * progressHeight;
      const topInNav = posAbs - (navRect.top + scrollY);
      if (!s.marker) return;
      s.marker.style.top = `${topInNav}px`;
    });
  }

  // create markers container and markers for each section that has a TOC link
  const markersContainer = nav.querySelector('.toc-markers') || (() => { const d = document.createElement('div'); d.className='toc-markers'; nav.appendChild(d); return d; })();
  sections.forEach(s => {
    const link = nav.querySelector(`li a[href="#${s.id}"]`);
    if (!link) return;
    const m = document.createElement('div');
    m.className = 'toc-marker';
    m.dataset.id = s.id;
    markersContainer.appendChild(m);
    s.marker = m;
  });

  // Progress bar element (vertical bar alongside the TOC)
  const progressBar = document.querySelector('.toc-progress__bar');

  function updateProgress() {
    if (!progressBar) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) : 0;
    progressBar.style.height = `${Math.max(0, Math.min(1, pct)) * 100}%`;
  }

  // Determine which section contains the target position
  function getActiveSectionId() {
    const checkpoint = window.scrollY + window.innerHeight * 0.25; // 25% down from top
    for (let i = sections.length - 1; i >= 0; i--) {
      if (checkpoint >= sections[i].top && checkpoint < sections[i].bottom) return sections[i].id;
    }
    return null;
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
          const activeId = getActiveSectionId();
          nav.querySelectorAll('li.active').forEach(e => e.classList.remove('active'));
        nav.querySelectorAll('.toc-marker--current').forEach(m => m.classList.remove('toc-marker--current'));
        if (activeId) {
            // activate the matching link
            const link = nav.querySelector(`li a[href="#${activeId}"]`);
            if (link && link.parentElement) link.parentElement.classList.add('active');

            // also activate parent headings up the chain
            let p = parentMap[activeId];
            while (p) {
              const plink = nav.querySelector(`li a[href="#${p}"]`);
              if (plink && plink.parentElement) plink.parentElement.classList.add('active');
              p = parentMap[p];
            }
          // highlight corresponding marker
          const marker = nav.querySelector(`.toc-marker[data-id="${activeId}"]`);
          if (marker) marker.classList.add('toc-marker--current');
          }
        updateProgress();
          ticking = false;
        });
      ticking = true;
    }
  }

  updatePositions();
  onScroll();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { updatePositions(); onScroll(); });
  // If content/images load later and shift layout, recalc positions
  window.addEventListener('load', () => { updatePositions(); onScroll(); });

});

console.log('Script successfully loaded.');
