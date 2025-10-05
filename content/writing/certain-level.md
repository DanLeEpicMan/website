+++
title = "A Certain Level of Arrogance" 
date = "2025-10-04" 
description = "Comments on a common trait I encounter." 
[taxonomies] 
"writing/tags" = ["blog"] 
+++

During my two years as an officer of [Data Science UCSB](https://www.datascienceucsb.org/), I frequently interacted with hundreds of club members, predominantly [Statistics & Data Science](https://catalog.ucsb.edu/programs/BSSTSDS) *(SDS)* and [Computer Science](https://www.cs.ucsb.edu/) *(CS)* majors. Most of them were awesome, either ambitious beginners wanting to learn more, or seasoned veterans tackling interesting projects. 

But every now and then, I encountered people who possessed a certain level of arrogance. Every major has their fair share of unpleasant people, but CS and SDS especially had an over-representation of them. While a vocal minority, I have experienced this trait so commonly first-hand. After having talked about it with so many people around me, I can't help but feel that there's an underlying reason behind it.

# What is this "certain level of arrogance"?

To introduce what I mean by this, allow me to explain by way of example. There were many examples I wanted to write about that perfectly articulates my point, however in the interest of privacy, I will focus only on one.

## "How Sexy is Your Man?"

"How Sexy is Your Man?" was an ethically dubious project I encountered in Data Science UCSB. The premise of the project is that you submit a picture of a male face, and it returns a bunch of metrics quantifying how "sexy" it is.

As I hope is obvious, this project borders eugenics and supremacism. Any bias in the training data will yield awful results. For example, training a model on predominantly white faces will cause the model to favor "white features" over others, treading deeply into racist territory. The counterargument to this is to simply include a representative sample, however that is a challenge that goes well beyond the scope of the project. No matter how you want to slice it, data under-represents marginalized communities, especially those outside the United States. [And enhancing data collection for those communities raises its own share of ethical concerns.](https://epic.org/issues/democracy-free-speech/privacy-and-racial-justice/)

But on a much more fundamental level, the premise of the project is absolutely ridiculous.
1. The data of the project were human faces. Are these faces real? 
    - If yes, was the consent of each and every person obtained, either directly or implicitly through licensing agreements? 
    - If no, is it fine to compare human beauty to artificial beauty?
2. Beauty standards vary tremendously across cultures. Having a single metric that quantifies "sexiness" is just dumb.

Even if the project realigned itself to measure how well a person "fits" a very particular beauty standard (e.g. Asian Baby Boy), I still object to this deeply. Developing metrics to quantify such things is a non-technical skill, and everyone in the project comes from technical backgrounds. The fact of the matter is that in such a case, without consultation of non-technical people, there is a huge component that this project simply lacks.

Perhaps this project was intended as a (very awful) joke and wasn't meant to be taken seriously, but nevertheless it illustrates my point.

## A Precise Definition

The latter half of the above commentary completely articulates my point. **It takes a certain level of arrogance to completely neglect non-technical skills and assume you can fulfill the same roles as an expert.** That is, to assume that because you can build a solution with technology, you can thus put an end to the problem at hand.

Somewhat related, though not at all articulated above, is the shallow pursuit of achievements. I've dealt with people who wanted to work on a project not because it interested them, but because they only wanted a project on their resume, and nothing more. In essence, **this certain level of arrogance encompasses the negligence of skill acquisition and methodology, and focuses only on results.** Note that I am not at all describing the intimidation many beginners feel when attempting a project, that is separate entirely.

{% admonition(type='note', title='An Important Clarification') %}

It's important to clarify that I'm not suggesting absolute care of every detail is necessary. I frequently use technologies like [pandas](https://pandas.pydata.org/), [PyTorch](https://pytorch.org/), [NumPy](https://numpy.org/), & [git](https://git-scm.com/) in my work. I cannot explain how they work beyond vague simplifications. Frankly, such details are not important to me whatsoever. 

However, I must acknowledge that in the realm of low-level design, I am not an expert. I am not qualified to take on a role requiring such skills. Perhaps those skills are easy for me to acquire, but that does not make me good at them.

{% end %}

# Where does it come from? Why is it overrepresented in tech?

The over-representation of this mindset in SDS, CS, and even Math is something I've noticed throughout all of my undergrad. I don't claim to understand this entirely, but I have a couple ideas.

## Raising the Bar

As any undergrad can tell you, getting into Computer Science and Data Science programs is *really* competitive. You have to achieve nearly perfect marks in advanced high school courses, as well as stellar extracurriculars, to have a chance at moderately prestigious universities. As a result, anyone in such a program is going to be academically capable.

Compound this with the [overall trend of grade inflation](https://dailynexus.com/2024-09-06/ucsb-awards-majority-a-grades-for-fifth-consecutive-school-year/), and it suddenly makes maintaining these perfect marks not that difficult. Optimizing for straight As is not a hard task, especially for someone inclined to such a behavior from high school.

And well, this naturally develops such an arrogance. After all, if you're good at nearly every class you've taken, surely that must mean you're good at most things. Especially if you're studying a field that's used everywhere in life.

Yet there's a fundamental issue with this. Tech majors primarily receive non-technical exposure through high school coursework, general education courses, and other extracurriculars, which are usually **introductory**. Intro classes are, for the most part, much easier than their major counterparts, and only offer a brief, simplified overview. 

Furthermore, while technology is universally applicable to virtually every field, that doesn't mean a tech degree teaches you these applications. Does me being a math major make me good at all engineering and sciences? After all, math is even more ubiquitous than technology.

## Difficulty Imbalance

The aforementioned raised bar isn't a result of pure chance. After all, CS and SDS are known for being difficult majors. The skills of tech majors are nothing to scoff at.

While it is true that the skills of a tech major are comparatively more difficult to learn than the skills of other majors, **that doesn't mean those other skills are trivial, or that they are easy to learn.** For example, something like policy analysis does not have a very high barrier to entry, but becoming a skilled analyst requires years of experience.
    
However, I partially dispute the premise of this observation. For instance, humanities skills are much different than technology skills, and I would argue that a nontrivial amount STEM people have awful humanities skills. Furthermore, the barrier of entry for using technology becomes lower every year. 

Granted, using technology is not at all what a tech degree prepares you for. Saying such a thing is no different than saying mathematics teaches you how to add numbers together. But this leads me directly into the my broader criticism.

> This certain level of arrogance encompasses the negligence of skill acquisition and methodology, and focuses only on results.

Truth of the matter is that many of these people whom neglect non-technical skills also have little regard for actually learning. Instead, the focus is to pick and choose the things that maximize results. While a tech degree teaches more than using technology, that's effectively what these people get out of it.

## Demands of Industry

In reality, the demands of industry are almost entirely applied skills. Abstract theoretical knowledge often has no value in the workforce, at least for jobs below the graduate level. Using, designing, and implementing technology is what defines a job in tech. I suspect that many people who fall into this "certain level of arrogance" simply optimize their experiences around getting a job. And well, I can't blame them. It's hard to not be frustrated when you are well-aware that what you study is not directly relevant to what you will work as.

However, the bar for a generalist worker becomes lower each year. The barrier for implementing many technologies is not high, and with the onset of LLMs, it becomes easy to automate repetitive tasks at scale.

Yet that disruption only describes a very particular kind of job. In many applications I encounter, especially in data science, domain expertise is incredibly valuable. Such expertise is predominantly non-technical skills, such as scientific knowledge or humanities-adjacent skills. Overall, they require skills that go much farther than "coding studies", i.e. just learning to code and not much more.

# What's the point of all this?

So why did I write this blog anyways? Because I've had this exact conversation with so many people around me. It's gotten to a point where I feel like articulating the frustrations has some value.

Beyond school, I've seen this behavior in [many](https://en.wikipedia.org/wiki/Theranos) [different](https://www.404media.co/how-teas-founder-convinced-millions-of-women-to-spill-their-secrets-then-exposed-them-to-the-world/) places. Much of this discussion translates well into the "tech bro" phenomenon.

My hope is that someone will read this and receive clarity. Or better yet, realize the kind of path they were traveling on. After all, I was exactly like this as a freshman. But it wasn't until my introduction to math, something I truly enjoyed, that I realized chasing dollar signs maybe isn't a good idea.