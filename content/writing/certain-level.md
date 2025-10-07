+++
title = "A Certain Level of Arrogance" 
date = "2025-10-04" 
description = "Comments on a common trait I encounter." 
[taxonomies] 
"writing/tags" = ["blog"] 
+++

During my two years as an officer of [Data Science UCSB](https://www.datascienceucsb.org/), I frequently interacted with hundreds of club members, predominantly [Statistics & Data Science](https://catalog.ucsb.edu/programs/BSSTSDS) *(SDS)* and [Computer Science](https://www.cs.ucsb.edu/) *(CS)* majors. Most of them were awesome, either ambitious beginners wanting to learn more, or seasoned veterans tackling interesting projects. 

But every now and then, I encountered people who possessed a certain level of arrogance. Every major has their fair share of unpleasant people, but CS and SDS especially had an over-representation of them. While a vocal minority, I have experienced this trait so commonly first-hand. After having talked about it with so many people around me, I can't help but feel that there's an underlying reason behind it.

{% admonition(type='danger', title='Take What I Say Lightly') %}

I am not writing this blog with the intention of insulting anyone. Rather, I write this to illustrate an unproductive and downright unpleasant mindset I frequently encountered.

As much as I may seem to speak in absolutes, this is definitely not the case. It is not my intention to slander all of SDS and CS majors, nor to suggest that they are inferior. Many of my greatest friends come from both majors. What I am focusing on is a very vocal **minority** that unfortunately is over-represented in these fields.

{% end %}

# What is this "certain level of arrogance"?

To introduce what I mean, allow me to explain by way of example. But rather than focusing on a negative example illustrating arrogance, I'll focus on a positive example illustrating the exact opposite. In this way, I can hone in on elements neglected by this arrogance.

*Note: I obtained permission from the project members to write about their project. However, in the interest of privacy, I will not disclose anything more than the project itself.*

## DataDrip

DataDrip was a project in Data Science UCSB. It was one of the finalists for Project Showcase 2025, ultimately scoring 3rd place. The premise of this project is that you submit a picture of your face, and it returns a wardrobe of fashion items. In essence, the project is finding ["drip"](https://www.kontentino.com/social-media-urban-dictionary/drip/) that will complement you.

While at first glance this may seem questionable, the project was very well-thought-out. Color analysis motivates the entire approach, namely the [four seasons categorization](https://www.washingtonpost.com/lifestyle/style/color-analysis-what-looks-best-on-you/2021/08/16/16174e96-f92a-11eb-9c0e-97e29906a970_story.html). The idea here is that skin tone determines what "season" you are, which narrows down a list of suitable clothing items. My understanding of the project is it extracts facial features into embeddings via a pre-trained model, and from there uses heuristics to both classify a user's season and create a list of clothes.

Aside from being an impressive project, I have a few key praises
1. The members were pretty technical people, and for the most part, this was an entirely technical project.
    - That is, the members simply applied the analysis and methodology of experts, rather than trying to do everything themselves.
    - To be more specific, **the project members did not masquerade as experts in non-technical fields they have little exposure with.**
2. All ethical concerns, such as biases in training data and use of external tools/methods, were approached carefully. They were very keen on ensuring that this is not only a useful tool, **but an ethically sound one too**.
3. The team all chose to work in an area they had a deep interest in, rather than choosing something with several buzzwords just to put on a resume.

## A Precise Definition

The arrogance I describe is pretty much the exact opposite of every praise I outlined above. **It takes a certain level of arrogance to completely neglect non-technical skills and assume you can fulfill the same roles as an expert.** That is, to assume that because you can build a solution with technology, you can thus put an end to the problem at hand.

Somewhat related is the shallow pursuit of achievements. I've dealt with people who wanted to work on a project not because it interested them, but because they only wanted a project on their resume, and nothing more. In essence, **this certain level of arrogance encompasses the negligence of skill acquisition and methodology, and focuses only on results.** I must stress that I am not at all speaking to the intimidation or confusion many beginners feel, that is entirely separate.

{% admonition(type='note', title='An Important Clarification') %}

It's important to clarify that I'm not suggesting absolute care of every detail is necessary. I frequently use technologies like [pandas](https://pandas.pydata.org/), [PyTorch](https://pytorch.org/), [NumPy](https://numpy.org/), & [git](https://git-scm.com/) in my work. I cannot explain how they work beyond vague simplifications. And frankly, I'm not interested in improving this understanding.

However, I must acknowledge that in the realm of low-level design, I am not an expert. I am not qualified to take on a role requiring such skills. Perhaps those skills are easy for me to acquire, but that does not make me good at them.

{% end %}

# Where does it come from? Why is it over-represented in tech?

The over-representation of this mindset in SDS, CS, and even Math is something I've noticed throughout all of my undergrad. I don't claim to understand this entirely, but I have a couple ideas.

## Raising the Bar

As any undergrad can tell you, getting into Computer Science and Data Science programs is *really* competitive. You have to achieve nearly perfect marks in advanced high school courses, as well as stellar extracurriculars, to have a chance at moderately prestigious universities. As a result, anyone in such a program is going to be academically capable.

Combine this academic capability with the [overall trend of grade inflation](https://dailynexus.com/2024-09-06/ucsb-awards-majority-a-grades-for-fifth-consecutive-school-year/), and it suddenly makes maintaining these perfect marks within reach. Easy? Of course not. But for an academically gifted individual who already knows how to optimize grade performance, it suddenly becomes an accessible task to maintain a near-perfect record.

And well, this naturally develops such an arrogance. After all, if you're good at nearly every class you've taken, surely that must mean you're good at most things. Especially if you're studying a field that's used everywhere in life.

Yet there's a fundamental issue with this. Tech majors primarily receive non-technical exposure through high school coursework, general education courses, and other extracurriculars, which are usually **introductory**. For the most part, intro classes only offer a brief, simplified overview. 

Furthermore, while technology is universally applicable to virtually every field, that doesn't mean a tech degree teaches you these applications. Does being a math major make me good at all engineering and sciences? After all, math is even more ubiquitous than technology.

## Difficulty Imbalance

The aforementioned raised bar isn't a result of pure chance. After all, CS and SDS are known for being difficult majors, and their skills are nothing to scoff at.

In general (though not universal), it is true that, on average, the skills of a tech major are comparatively more difficult to learn than the skills of other non-technical majors. However, **that doesn't mean those other skills are trivial, or that they are easy to learn.** For example, something like policy analysis does not have a very high barrier to entry, but becoming a skilled analyst requires years of experience that's completely orthogonal to tech experiences.
    
And moreover, I partially dispute the premise of this observation. While I agree that tech degrees are generally more work on average than non-technical degrees, **they ultimately test completely different skills**. For instance, humanities skills are much different than technology skills. It's very much possible to be good in one and awful in the other. In fact, I would argue that a substantial amount of STEM people have awful humanities skills. 

Furthermore, the barrier of entry for using technology becomes lower every year. Tech skills are increasingly becoming more accessible to those in other degrees, and even those without degrees.

Granted, using technology is not at all what a tech degree prepares you for. Saying such a thing is no different from saying mathematics teaches you how to add numbers together. But this leads me directly into my broader criticism.

> This certain level of arrogance encompasses the negligence of skill acquisition and methodology, and focuses only on results.

Truth of the matter is that many of these people who neglect non-technical skills also have little regard for actually learning. Instead, the focus is to pick and choose the things that maximize results. While a tech degree teaches more than using technology, that's effectively what these people get out of it.

## Demands of Industry

In reality, the demands of industry are almost entirely applied skills. Abstract theoretical knowledge often has no value in the workforce, at least for jobs below the graduate level. Using, designing, and implementing technology is what defines a job in tech. I suspect that many people who fall into this "certain level of arrogance" simply optimize their experiences around getting a job. And well, I can't blame them. It's hard to not be frustrated when you are well-aware that what you study is not directly relevant to what you will work as.

However, the bar for a "coding studies" major, i.e. those whose only learning focus is to apply technology and nothing more, becomes lower each year. The barrier for implementing many technologies is not high, and with the onset of LLMs, it becomes easy to automate repetitive tasks at scale.

Yet that disruption only describes a very particular kind of job. In many applications I encounter, especially in data science, domain expertise is incredibly valuable. Such expertise is predominantly non-technical skills, such as scientific knowledge or humanities-adjacent skills. For more CS-oriented jobs, I've observed that the abstract knowledge is quite useful in design. Overall, they require skills that go much farther than "coding studies", i.e. just learning to code and not much more.

# What's the point of all this?

So why did I write this blog? Because I've had this exact conversation with so many people around me. It's gotten to a point where I feel like articulating the frustrations has some value.

Beyond school, I've seen this behavior in [many](https://en.wikipedia.org/wiki/Theranos) [different](https://www.404media.co/how-teas-founder-convinced-millions-of-women-to-spill-their-secrets-then-exposed-them-to-the-world/) places. Much of this discussion translates well into the "tech bro" phenomenon.

My hope is that someone will read this and receive clarity. Or better yet, realize the kind of path they were traveling on. After all, I was exactly like this as a freshman. But it wasn't until my introduction to math, something I truly enjoyed, that I realized chasing dollar signs maybe isn't a good idea.