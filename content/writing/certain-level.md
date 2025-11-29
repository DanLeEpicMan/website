+++
title = "A Certain Level of Arrogance" 
date = "2025-10-04" 
description = "Comments on a common trait I encounter." 
[taxonomies] 
"writing/tags" = ["blog"] 
+++

During my two years as an officer of [Data Science UCSB](https://www.datascienceucsb.org/), I frequently interacted with hundreds of club members, predominantly [Statistics & Data Science](https://catalog.ucsb.edu/programs/BSSTSDS) *(SDS)* and [Computer Science](https://www.cs.ucsb.edu/) *(CS)* majors. Most of them were awesome, either ambitious beginners wanting to learn more, or seasoned veterans tackling interesting projects. 

But in a few rare occasions, I encountered people who possessed a certain level of arrogance. Every major has their fair share of unpleasant people, but CS and SDS especially had an over-representation of them. While a vocal minority, I have experienced this trait disproportionately first-hand. After having talked about it with so many people around me, I can't help but feel that there's an underlying reason behind it.

{% admonition(type='danger', title='Take What I Say Lightly') %}

I am not writing this blog with the intention of insulting anyone. Rather, I write this to illustrate an unproductive and downright unpleasant mindset I encountered more often than I can tolerate. My hope is to both bring this topic to light, and to steer people away from it.

As much as I may seem to speak in absolutes, this is definitely not the case. It is not my intention to slander anyone, nor to suggest that they are inferior. Many of my greatest friends come from CS and SDS backgrounds. What I am focusing on, however, is a very vocal **minority** that unfortunately is over-represented in these fields.

{% end %}

# What is this "certain level of arrogance"?

To introduce what I mean, allow me to explain by way of example. But rather than focusing on a negative example illustrating arrogance, I'll focus on a positive example illustrating the exact opposite. In this way, I can hone in on elements neglected by this arrogance.

*Note: I obtained permission from the project members to write about their project. However, in the interest of privacy, I will not disclose anything more than the project itself.*

## DataDrip

DataDrip was a project in Data Science UCSB. It was one of the finalists for Project Showcase 2025, ultimately winning a cash prize. The premise of this project is that you submit a picture of your face, and it returns a wardrobe of fashion items. In essence, the project is finding ["drip"](https://www.kontentino.com/social-media-urban-dictionary/drip/) that will complement you.

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

However, I must acknowledge that I am **only** qualified at applying these technologies for specific tasks at an abstracted level, and nothing more. That is, I am not an expert in low-level design. Perhaps those skills are easy for me to acquire, but that does not make me good at them, nor does it mean I am capable of taking on a role requiring such skills.

{% end %}

# Where does it come from? Why is it over-represented in tech?

The over-representation of this mindset in SDS, CS, and even math is something I've noticed throughout all of my undergrad. I don't claim to understand this entirely, but I have a couple ideas.

## Raising the Bar

As any undergrad can tell you, getting into Computer Science and Data Science programs is *really* competitive. You have to achieve nearly perfect marks in advanced high school courses, as well as stellar extracurriculars, to have a chance at moderately prestigious universities. As a result, anyone in such a program is going to be academically capable.

Combine this academic capability with the [overall trend of grade inflation](https://dailynexus.com/2024-09-06/ucsb-awards-majority-a-grades-for-fifth-consecutive-school-year/), and it suddenly makes maintaining these perfect marks within reach. Easy? Of course not. But for an academically gifted individual who already knows how to optimize grade performance, it suddenly becomes an accessible task to maintain a near-perfect record.

And well, this naturally develops such an arrogance. After all, if you're good at nearly every class you've taken, surely that must mean you're good at most things. Especially if you're studying a field that's used everywhere in life.

Yet there's a fundamental issue with this. Tech majors primarily study non-tech skills through high school, lower division, and general education coursework, which are **introductory** in nature. For the most part, intro classes only offer a brief, simplified overview. 

Furthermore, while technology is applicable to virtually every field, that doesn't mean a tech degree teaches you these applications. A perfect comparison is mathematics. Does being a math major make me good at all engineering and sciences? After all, math is even more ubiquitous than technology.

## Difficulty Imbalance

The aforementioned raised bar isn't a result of pure chance. After all, CS and SDS are known for being difficult majors, and their skills are nothing to scoff at.

In general, it is true, though not universally true, that the skills of a tech major are relatively more difficult to learn than the skills of other non-tech majors, particularly non-STEM fields. However, **that doesn't mean those other skills are trivial, or that they are easy to learn.** For example, something like policy analysis does not have a very high barrier to entry, but becoming a skilled analyst requires years of experience that's completely orthogonal to tech experiences.

And moreover, I partially dispute the premise of this observation. While I agree that tech degrees are generally more work than non-tech, mostly non-STEM, degrees, **they ultimately test completely different skills**. For instance, humanities skills are much different than technology skills. It's very much possible to be good in one and awful in the other. In fact, I would argue that a substantial amount of STEM people have awful humanities skills. 

Furthermore, the barrier of entry for using technology becomes lower every year. Tech skills are increasingly becoming more accessible to those in other degrees, and even those without degrees.

Granted, using technology is not at all what a tech degree prepares you for. Saying such a thing is no different from saying mathematics teaches you how to add numbers together, or that literature teaches you how to read. But this leads me directly into my broader criticism.

> This certain level of arrogance encompasses the negligence of skill acquisition and methodology, and focuses only on results.

Truth of the matter is that many of these people who neglect non-tech skills also have little regard for actually learning. Instead, the focus is to pick and choose the things that maximize results. While a tech degree teaches more than using technology, that's effectively what these people get out of it.

## Demands of Industry

To say everything above as-is, without consideration of the demands from jobs, is a gross oversimplification, and quite frankly, ignorant. As with anything, there's another side to the story.

In reality, the demands of industry are almost entirely applied skills. Abstract knowledge, as well as non-tech domain knowledge, often have little value in the workforce, at least for jobs below the graduate-degree level. Using, designing, and implementing technology is what defines a job in tech. I suspect that many people who fall into this arrogance simply optimize their experiences around getting a job. And well, I can't blame them. It's hard to not be frustrated when you are well-aware that what you study is not directly relevant to what you will work as.

However, the bar for a "coding studies" major, i.e. those whose only learning focus is to apply technology and nothing more, becomes lower each year. The barrier for implementing many technologies is not high, and is easy to independently learn online. Moreover, with the onset of LLMs, it's easy to automate these repetitive tasks at scale.

All this to say that jobs at the level of "coding studies" don't require a degree to begin with. A degree offers much more. Aside from breadth in the field, it hones ingenuity through abstract knowledge. Furthermore, that abstract knowledge begets a deeper understanding of problem-solving, offering an intuition that's immensely valuable no matter the role. This intuition and ingenuity is incredibly difficult to replace, and is what makes many people valuable in the workforce.

Naturally, I must admit my biases as a mathematician. My undergraduate degree was almost entirely abstract knowledge, and the few applications I encountered in my courses were very adjacent to theory. It's very easy for me to overvalue abstract knowledge and undervalue everything else. 

Notwithstanding, to say I'm judging from the sidelines is utterly wrong. It was precisely my experiences as a mentor of several applied projects that led me to these conclusions. The projects that stood out, such as DataDrip, were successful not because of their technical skills alone, but because they approached the problem with care, and respected the non-technical aspects of the problem.

Moreover, domain expertise is incredibly valuable, especially in data science. Such expertise is predominantly non-technical skills, such as scientific knowledge or humanities-adjacent skills. Overall, in my opinion, those in school studying "coding studies" are completely missing the point of their degree.

# Final Remarks

So why did I write this blog? Because I've had this exact conversation with so many people around me. It's gotten to a point where I feel like articulating the frustrations has some value.

To say this behavior is confined to tech majors in school is just wrong. Much of this discussion translates well into the "tech bro" phenomenon. [Here's an example from recent history](https://www.404media.co/how-teas-founder-convinced-millions-of-women-to-spill-their-secrets-then-exposed-them-to-the-world/). Furthermore, I get this impression from many STEM majors, such as math and physics, though to a lesser extent.

My hope is that someone will read this and receive clarity. Or better yet, realize the kind of path they were traveling on. After all, I was exactly like this as a freshman. But it wasn't until my introduction to math, something I truly enjoyed, that I realized chasing dollar signs maybe isn't a good idea.