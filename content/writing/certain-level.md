+++
title = "A Certain Level of Arrogance" 
date = "2025-10-04" 
description = "Comments on a common trait I encounter." 
[taxonomies] 
"writing/tags" = ["blog"] 
+++

{% admonition(type='warning', title="Author's Note (Nov. 2026)") %}

As it was originally written, this blog came off pretty heavy-handed and unfairly certain. I went ahead and modified language I deemed harsh. At any rate, I did my best to maintain the original spirit of the blog while removing forcefulness.

One exception is the now-removed section "Difficulty Imbalance". I strongly disagree with it, and felt that it was very hypocritical. If you are interested in a brief exposition with more details, [refer to a newer blog of mine](/writing/heavy-handedness). The newer section "Difficulty of Skills" took its place and makes a more concise argument.

{% end %}

During my two years as an officer of [Data Science UCSB](https://www.datascienceucsb.org/), I frequently interacted with hundreds of club members, predominantly [Statistics & Data Science](https://catalog.ucsb.edu/programs/BSSTSDS) *(SDS)* and [Computer Science](https://www.cs.ucsb.edu/) *(CS)* majors. Most of them were awesome, either ambitious beginners wanting to learn more, or seasoned veterans tackling interesting projects.

But in a few rare occasions, I encountered people who possessed a certain level of arrogance. After having talked about this trait with so many people around me, I can't help but feel that there's an underlying reason behind its overrepresented presence.

# What is this "certain level of arrogance"?

To introduce what I mean, allow me to explain by way of example. But rather than focusing on a negative example illustrating arrogance, I'll focus on a positive example illustrating the exact opposite. In this way, I can hone in on elements neglected by this arrogance.

*Note: I obtained permission from the project members to write about their project. However, in the interest of privacy, I will not disclose anything more than the project itself.*

## DataDrip

DataDrip was a project in Data Science UCSB. It was one of the finalists for Project Showcase 2025, ultimately winning a cash prize. The premise of this project is that you submit a picture of your face, and it returns a wardrobe of fashion items. In essence, the project is finding "drip" that will complement you.

While at first glance this may seem questionable, the project was very well-thought-out. Color analysis motivates the entire approach, namely the [four seasons categorization](https://www.washingtonpost.com/lifestyle/style/color-analysis-what-looks-best-on-you/2021/08/16/16174e96-f92a-11eb-9c0e-97e29906a970_story.html). The idea here is that skin tone determines what "season" you are, which narrows down a list of suitable clothing items. My understanding of the project is it extracts facial features into embeddings via a pre-trained model, and from there uses heuristics to both classify a user's season and create a list of clothes.

Aside from being an impressive project, I have a few key praises

1. The members were pretty technical people, and for the most part, this was an entirely technical project.
    - That is, the members simply applied the analysis and methodology of experts, rather than trying to do everything themselves.
    - To be more specific, **the project members did not masquerade as experts in non-technical fields they have little exposure with.**
2. All ethical concerns, such as biases in training data and use of external tools/methods, were approached carefully. They were very keen on ensuring that this is not only a useful tool, **but an ethically sound one too**.
3. The team all chose to work in an area they had a deep interest in, rather than choosing something with several buzzwords just to put on a resume.

## A Precise Definition

The arrogance I describe is pretty much the antithesis of every praise I outlined above. **It takes a certain level of arrogance to completely neglect non-technical skills and assume you can fulfill the same roles as an expert.** That is, to assume that because you *can* build a solution with technology, you can thus put an end to the problem at hand without much repercussion.

Somewhat related is the shallow pursuit of achievements. Namely, working on a project not because of interest or skill development, but because of resume embellishment, and nothing more. In essence, **this certain level of arrogance encompasses the negligence of skill acquisition and methodology, and focuses only on results.** I must stress that I am not at all speaking to the intimidation or confusion many beginners feel, that is entirely separate.

{% admonition(type='note', title='An Important Clarification') %}

It's important to clarify that I'm not suggesting absolute care of every detail is necessary. I frequently use technologies like [pandas](https://pandas.pydata.org/), [PyTorch](https://pytorch.org/), [NumPy](https://numpy.org/), & [git](https://git-scm.com/) in my work. I cannot explain how they work beyond vague simplifications. And frankly, I'm not interested in improving this understanding.

However, I must acknowledge that I am **only** qualified at applying these technologies for tasks at an abstracted level, and nothing more. In other words, I am not an expert in low-level design, nor am I capable of taking on a role requiring such skills.

{% end %}

# Where does it come from? Why is it over-represented in tech?

The over-representation of this mindset in SDS, CS, and even math is something I've noticed throughout all of my undergrad. I don't claim to understand this entirely, but I have a couple ideas.

## Raising the Bar

As any undergrad can tell you, getting into Computer Science and Data Science programs is *really* competitive. You have to achieve nearly perfect marks in advanced high school courses, as well as stellar extracurriculars, to have a chance at moderately prestigious universities. As a result, anyone in such a program is going to be academically capable.

Combine this academic capability with the [overall trend of grade inflation](https://dailynexus.com/2024-09-06/ucsb-awards-majority-a-grades-for-fifth-consecutive-school-year/), and it suddenly makes maintaining these perfect marks within reach. Easy? Of course not. But for an academically gifted individual who already knows how to optimize grade performance, it suddenly becomes an accessible task to maintain a near-perfect record.

Yet it's important to highlight where non-tech exposure comes from. Tech majors primarily study non-tech skills through high school, lower division, and general education coursework, which are **introductory** in nature. For the most part, intro classes only offer a brief, simplified overview.

Furthermore, while technology is applicable to virtually every field, that doesn't mean a tech degree teaches you these applications. A perfect comparison is mathematics. Does my mathematical training enable me to work as an automobile engineer? I certainly would feel bad for whoever drives my cars if so.

## Difficulty of Skills

{% admonition(type='warning', title="Author's Note (Nov. 2026)") %}

Note that this section is a rewrite of an older section entitled "Difficulty Imbalance". I essentially argued that while tech skills may be harder to learn than non-tech skills, that doesn't mean non-tech skills are easy to learn. I hope it's easy to see the hypocrisy of this argument. Obviously, I renounce those beliefs in their entirety.

Nevertheless, there was a pretty big nugget of truth in my original argument. My rewrite turns the nugget into the crux.

{% end %}

The aforementioned raised bar isn't a result of pure chance. After all, CS and SDS are known for being difficult majors, and their skills are nothing to scoff at.

However, it is wrong to conclude that majors with higher acceptances must contain skills which are easy to acquire. For one, there's major confounding. CS is generally one of the most applied to majors{{ footnote() }}. Moreover, at my undergrad, the CS department intentionally keeps the incoming freshman class small. Either way, the major will naturally be more selective than most.

Notwithstanding acceptance rates, let's consider this more practically. Take a job like a policy analyst. On paper, [the job has a relatively lower barrier to entry](https://www.indeed.com/career-advice/finding-a-job/how-to-become-policy-analyst), certainly one that's [lower than most tech jobs](https://www.indeed.com/career-advice/finding-a-job/job-in-computer-science). Nevertheless, becoming a skilled analyst requires years of experience that's completely orthogonal to tech experiences.

We should also consider that different majors test different sets of skills. For instance, humanities skills are disjoint from technology skills. Spending time developing one does not automatically translate into developing the other. Honing general intelligence may raise competency overall, though relying on general intelligence alone is silly.

Anecdotally, from both personal experience and those I've interacted with, the common thread I've noted is a priority for embellishment over the skills themselves. Returning to the definition I set out

> This certain level of arrogance encompasses the negligence of skill acquisition and methodology, and focuses only on results.

One who appreciates appearances over learning will naturally neglect knowledge that looks trivial for them. After all, a lot of skills outside tech are immaterial, and therefore, difficult to communicate. I can demonstrate knowledge of software with a deliverable, such as a product. Demonstrating something like critical thinking, however, is far less obvious.

{% footnote_body() %}

As of writing, of course, although it's beginning to decline.

{% end %}

## Demands of Industry

To say everything above as-is, without consideration of the demands from jobs, is a gross oversimplification, and quite frankly, ignorant. As with anything, there's another side to the story.

In reality, the demands of industry are almost entirely applied skills. Abstract knowledge, as well as non-tech domain knowledge, often have little value in the technology sector{{ footnote() }}. Using, designing, and implementing technology is what defines a job in tech. I suspect that many people who fall into this mindset simply optimize their experiences around getting a job. And well, I can't blame them. It's hard to not be frustrated when you are well-aware that what you study is not directly relevant to what you will work as.

However, the bar for "coding studies", i.e. only applying technology and nothing more, becomes lower each year. The barrier for implementing many technologies is not high, and is easy to independently learn online. Moreover, with the onset of LLMs, it's easy to automate these repetitive tasks at scale.

All this to say that jobs at the level of "coding studies" don't require a degree to begin with. A degree offers much more. Aside from breadth in the field, it hones ingenuity through carefully approached projects and abstract knowledge. The value of projects is straightforward, and not exclusive to degrees, but the abstract knowledge has a much deeper role. It begets a profound understanding of problem-solving, offering an intuition that's immensely valuable no matter the role. This intuition and ingenuity is incredibly difficult to replace, and is what makes many people valuable in the workforce.

Naturally, I must admit my biases as a mathematician. My undergraduate degree was almost entirely abstract knowledge, and the few applications I encountered in my courses were very adjacent to theory. It's very easy for me to overvalue abstract knowledge and undervalue everything else.

To some extent, I am judging from the sidelines as a mathematician. Yet my opinions are not isolated, for it was conversations with diverse backgrounds that led me to these conclusions. Moreover, the projects that stood out at DS UCSB events, such as DataDrip, were successful not because of their technical skills alone, but because they approached the problem with care, and respected the non-technical aspects of the problem.

Moreover, domain expertise is incredibly valuable, especially in data science. Such expertise is predominantly non-technical skills, such as scientific knowledge or humanities-adjacent skills. Overall, I believe those pursuing "coding studies" are completely missing the point of their degree.

{% footnote_body() %}

At least for jobs requiring only a bachelor's degree.

{% end %}

# Final Remarks

So why did I write this blog? Because I've had this exact conversation with so many people around me. It's gotten to a point where I feel like articulating the frustrations has some value.

To say this behavior is confined to tech majors in school is just wrong. Much of this discussion translates well into the "tech bro" phenomenon. [Here's an example from recent history](https://www.404media.co/how-teas-founder-convinced-millions-of-women-to-spill-their-secrets-then-exposed-them-to-the-world/). Furthermore, I get this impression from many STEM majors, such as math and physics, though to a lesser extent.

My hope is that someone will read this and receive clarity. Or better yet, realize the kind of path they were traveling on. After all, I was exactly like this as a freshman. But it wasn't until my introduction to math, something I truly enjoyed, that I realized chasing dollar signs maybe isn't a good idea.
