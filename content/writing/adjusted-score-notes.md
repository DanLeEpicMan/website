+++
title = "Adjusted Judge Score Notes" 
date = "2025-09-15" 
description = "Notes and details on my project 'Adjusted Judge Score'" 
[taxonomies] 
"writing/tags" = ["project", "personal"] 
+++

# Introduction of the Problem

During 2023–2025, I was a board member for [Data Science UCSB](https://www.datascienceucsb.org/). A major event we host is our annual [Project Showcase](https://www.datascienceucsb.org/projects), where club members present their projects in front of judges, comprised of industry experts, professors, PhD students, etc. Judges are asked to score each project, and we combine their scores via a simple sum to determine a final ranking, using this to distribute cash prizes.

However, when we computed the final ranking for Project Showcase 2024, we were incredibly disappointed. Not because we believed the winners didn't deserve to win, but because the scores seemed completely arbitrary. The top 5 projects were all within 1-2 points from each other, out of about 60 points total. 

Upon closer inspection, we realized what the problem was. Many judges gave essentially the same score to all projects, particularly higher scores. In other words, many judges exhibited a ***positivity bias***. Since all judges are weighted equally, this causes the value of an individual point to rise dramatically.

One could argue that this is not inherently problematic. After all, the projects we select as finalists are going to be the better projects in our (very large) club, so it's natural to expect that they are all well-received by judges. Hence, the positivity bias is simply reflecting a ***survivorship bias*** that we the officers create. 

While this is a plausible explanation, we felt that the issue runs deeper. Out of 60 points, a point gap of about 5-10 among the top performers is to be expected. However, when 1st and 2nd place are only 1 point off from each other, when 2nd and 3rd place are 1-2 points off from each other, and so forth, it's difficult to conclude anything other than statistical noise. 

Anecdotally, I have heard this exact same problem articulated in many other clubs and judging panels. Thus, I feel justified in saying that there is a problem to be solved that isn't a result of the innate survivorship bias with our structure. The point of this blog is to detail, and justify, the solutions I arrived at.

# Preliminary Definitions

Before I can begin articulating my solutions, I must lay out definitions. 

## Toy Data

For illustrating examples, we will use the anonymized raw scores for **Project Showcase 2025**. Judges were asked to score projects in 5 separate categories on a range from 1–9. Hence, the range of a judge's raw score is 5–45.

<div id="CSVTable" style="overflow-x: auto;"></div>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>  
<script src="https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/jquerycsvtotable/jquery.csvToTable.js"></script>

<script>
$(function() {
  $('#CSVTable').CSVToTable('/misc/adjusted-score/toy_judge_data.csv');
});
</script>

As can be immediately seen, **Judge Delta**'s scores range from 40–45. In other words, they gave every project near-perfect scores. Similar behavior exists across other judges, albeit with notable outliers.

## Mathematical Definitions

We use the index $i$ to refer to projects, and the index $j$ to refer to judges. First, we define the terms
- $M$: Number of projects
- $N$: Number of judges
- $p_{ij}$: The raw score of project $i$ from judge $j$. 
  - In my original notes, the $p$ stood for "points", and I may use "points" to describe "scores".
  - All the raw score data can be thought of as the matrix $P = (p_{ij})$

To introduce more formal terminology

{% admonition(type='abstract', title='Definition: Scoring Method') %}
A **scoring method** is a function $\rho: \mathbb{R}^{M \times N} \to \mathbb{R}^{M}$. The component $\rho_i$ is called the **final score** of project $i$.
{% end %}

Essentially, a scoring method takes raw scores as input, such as the toy data above, and outputs a final score to each project. The standard we used, the **Raw Sum**, was simply
$$
\begin{equation}
    \rho_i = \sum_{j=1}^{N} p_{ij}
\end{equation}
$$
While two methods may not always produce the same scores, they may be equal in one crucial way

{% admonition(type='abstract', title='Definition: Equivalent in Ranking') %}
Define $(k)\_{ \vec{v} }$ as the index of the $k$th largest component of the vector $\vec{v}$, i.e. the index of the $k$th [order statistic](https://en.wikipedia.org/wiki/Order_statistic), in descending order. 

We say two scoring methods, $\rho$ and $\varrho$, are **equivalent in ranking** if, for every input $P$, $(k)\_{\rho(P)} = (k)\_{\varrho(P)}$ for every $1 \leq k \leq M$.
{% end %}

This is a complicated way of saying that both methods always produce the same ranking, even if they don't produce the same final scores. For example, (1) is equivalent in ranking to the average judge score, i.e.

$$
    \varrho_i = \frac{1}{N} \sum_{j=1}^{N} p_{ij}
$$
For our purposes, we consider two scoring methods as essentially the same if they are equivalent in ranking. 

{% admonition(type='tip', title='More on Equivalent in Ranking') %}
There's two details worth mentioning
1. The precise definition of $(k)\_{ \vec{v} }$ is intentionally avoided. Without proper care, it may not even be well-defined! What happens in the event of a tie?
   - In practice, a tiebreaker is defined. We do not concern ourselves with such details, and simply assume it is a part of the definition of $(k)\_{ \vec{v} }$
2. Interestingly, equivalent in ranking forms an [equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation).
{% end %}

# Scoring Methods

Here we outline the methods I've thought about and proposed. Note that each has its own assumptions, with its own benefits and tradeoffs. 

As a baseline, here are the final scores using (1) as the scoring method

*Table 1: Raw Sum Final Scores*
| Finalists | Raw Sum        |
| --------- | -------------- |
| Project 1 |   406          |
| Project 4 |   379          |
| Project 2 |   377          |
| Project 6 |   374          |
| Project 8 |   354          |
| Project 3 |   352          |
| Project 7 |   328          |
| Project 5 |   320          |

These scores have a range of 50–450. As we can see, the data identifies Project 1 as a very clear winner, far surpassing all those below it. Between Projects 2, 4, and 6 though, the effect of the statistical noise becomes much more clear. 

{% admonition(type='note', title='The Importance of the Raw Data Generating Process') %}
This article talks exclusively about turning raw scores into adjusted scores. However, in no way do I endorse any of these ideas as a panacea.

**Creating a reasonable system that evaluates projects and translates judge's opinions into numbers** is just as, if not more, important than a system that adjusts those numbers into final scores. As they say in machine learning, "garbage in, garbage out". 
{% end %}

For many of these methods, we will require the following two definitions from statistics
- $\mu_j$: Judge $j$'s raw score [average](https://en.wikipedia.org/wiki/Arithmetic_mean).
- $\sigma_j$: Judge $j$'s raw score [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation).
  - Unless otherwise stated, we treat the data as a **sample** instead of a **population**. In those cases, we include *[Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction)*.

## $z$-score Sum

A rather simple method that makes one fairly mild assumption. 

{% admonition(type='question', title='Assumption: Data as Population') %}
The score data for each judge represents a complete population, not a sample.
{% end %}
This is analogous to the methodology of standardized testing. It's customary to treat standardized test scores as a population, not a sample. We need this assumption for the [$z$-score](https://en.wikipedia.org/wiki/Standard_score) to be well-defined, otherwise we are in truth defining a [$t$-statistic](https://en.wikipedia.org/wiki/T-statistic).

The $z$-score of $p_{ij}$ is defined as

$$
z_{ij} = \frac{p_{ij} - \mu_j}{\sigma_j}
$$

Essentially, we treat each raw score as a part of a population of judge $j$'s scores, and transform them into $z$-scores. We therefore define the adjusted score as

$$
\begin{equation}
    \rho_{i}^{z\textrm{-score}} = \sum_{j=1}^{N} z_{ij}
\end{equation}
$$

Applying this transformation to our toy data, we get the ranking

*Table 2: $z$-score Sum Final Scores*
| Finalist  | $z$-score Sum |
| --------- | ------------- |
| Project 1 | 11.702        |
| Project 4 | 5.429         |
| Project 2 | 4.329         |
| Project 6 | 4.328         |
| Project 3 | -2.235        |
| Project 8 | -2.419        |
| Project 7 | -9.711        |
| Project 5 | -11.422       |

At first glance, this gives us what we want wanted. An umambiguous first place and a fairly clear second place. Third and fourth place are incredibly close though, and suffers the same problem I outlined in the intro (winning due to statistical noise). However, there's more than meets the eye
1. By definition, $z$-scores are [dimensionless](https://en.wikipedia.org/wiki/Dimensionless_quantity), therefore the final score is dimensionless. There's two conflicting interpretations of this:
   - On one hand, the final score being dimensionless makes it an objective quantity.
   - On the other hand, we are effectively interpreting it as a score, which is contentious as it does not have the same units.
2. Interestingly, this is almost identical to the ranking of scoring method (1). However, note that Project 3 and Project 8 switched places.
3. Unlike Raw Sum score, this has a (theoretically) infinite range. Without prior knowledge of $\\{\mu_j\\}\_{j=1}^{N}, \\{\sigma_j\\} \_{j=1}^{N}$, pinning down the range is incredibly difficult.
4. Since we are **DIVIDING** by standard deviation, we are actually *uplifting* the positivity bias. Judge Delta's points are now the most valuable points since they contain the least variability. 

The last point is what caused us to reject using this method in Data Science UCSB events. After all, one of our goals was to *eliminate* positivity bias, not enhance it.

## Proportional Variance

Partially inspired by the [explained variance](https://www.statology.org/explained-variance/) metric, the Proportional Variance score seeks to weigh scores based on how much variability each judge introduces.

For our metric to be well-defined, we need the following assumptions
{% admonition(type='question', title='Assumption: Judge Variability') %}
The judges whose individual points are most informative, hence possesses the least statistical noise, use a wider spectrum of the scores.
{% end %}
This implies that [variance](https://en.wikipedia.org/wiki/Variance) is a quantifier for how "informative" a judge's score is.

{% admonition(type='question', title='Assumption: Judge Independence') %}
All judges choose their scores independently.
{% end %}
By independent, we mean the random variables representing each judge's scores are all [mutually independent](https://en.wikipedia.org/wiki/Independence_(probability_theory)#More_than_two_random_variables). We can interpret each random variable, $S_j$, as "Judge $j$'s outcomes for Project Showcase 2025". There's certainly more nuance than this, however to avoid being pedantic, we'll sweep those details under the rug.

We want independence to ensure that there is no "overlapping signal" across judges. That is, each judge represents their own opinions and nothing more. Thus, $\frac{\mathrm{Var}(S_j)}{\sum_{k=1}^{N} \mathrm{Var}(S_k)}$ quantifies how much variability judge $j$ introduces in relation to all other judges.

Therefore, define $\omega_j = \frac{\sigma_{j}^2}{\sum_{k=1}^{N} \sigma_{k}^2}$. Because of the prior analysis, there is validity behind interpreting $\omega_j$ as judge $j$'s introduced variability.

We define the **Proportional Variance** score as
$$
\begin{equation}
    \rho_{i}^{\mathrm{PV}} = \sum_{j=1}^{N} \omega_j p_{ij}
\end{equation}
$$
It's important to note that the similarities to explained variance are nominal. While the formula is similar, it is much different fundamentally.

Applying this method to our scores, we get the following ranking

*Table 3: Proportional Variance Final Scores*
| Finalist  | Prop. Variance |
| --------- | -------------  |
| Project 1 | 40.683         |
| Project 2 | 37.518         |
| Project 4 | 36.785         |
| Project 6 | 36.523         |
| Project 8 | 35.113         |
| Project 3 | 33.726         |
| Project 7 | 32.102         |
| Project 5 | 30.559         |

The benefit of this scoring method is it preserves the range, as well as the units, of the raw data. In this example, the range is 5–45, and the units are points. 

Moreover, it reduces the tightness of the scores. If we multiply everything by 10 to bring the range to 50–450, we see that second and third place are off by about 8 points, whereas with the Raw Sum method, they're off by 2 points (see *Table 1*).

As before though, there's more that meets the eye
1. Saying that independence justifies the interpretation of $\omega_j$ *is* a bit fallacious. Rather, it's more appropriate to say independence *inspires* this interpretation.
    - You can also argue that, being an estimator, this approximates the truth pretty well. After all, it's common practice in statistics to replace quantities with estimators. However, this is merely acknowledging an abuse and not justifying it.
2. The assumption of independence is contentious. In this example, we have that $\sum_{k=1}^{N} \mathrm{Var}(S_k) \approx 163.571$, yet $\mathrm{Var}(\sum_{k=1}^{N} S_k) \approx 810.5$
    - One can argue that, if we drop the denominator in $\omega_j$, we obtain a new score method that's equivalent in ranking to Proportional Variance. Thus, we can drop the assumption of independence while keeping an essentially identical system.
      - However, this messes up both the range and the units. Is it okay to judge a project with units of $\mathrm{points}^3$?
      - Also, see $\kappa$-adjusted score for a similar approach
    - **In fact, independence is unnecessarily strong** for the interpretation of $\frac{\mathrm{Var}(S_j)}{\sum_{k=1}^{N} \mathrm{Var}(S_k)}$ as introduced variability. **Uncorrelated is sufficient**, as this ensures $\mathrm{Var}(\sum_{k=1}^{N} S_k) = \sum_{k=1}^{N} \mathrm{Var}(S_k)$, hence $\frac{\mathrm{Var}(S_j)}{\mathrm{Var}(\sum_{k=1}^{N} S_k)} = \frac{\mathrm{Var}(S_j)}{\sum_{k=1}^{N} \mathrm{Var}(S_k)}$
      - At the cost of a modification, we can drop the assumption altogether. Using [Principal Component Analysis](https://en.wikipedia.org/wiki/Principal_component_analysis), we can linearly transform the random vector $(S_1, \dots, S_N)$ into $(\hat{S}_1, \dots, \hat{S}_N)$ such that $\hat{S}_i, \hat{S}_j$ are uncorrelated for every $i \neq j$. To obtain a ranking, we apply Proportional Variance on the new dataset induced by $(\hat{S}_1, \dots, \hat{S}_N)$.
        - We are essentially transforming the judges into a new, idealized set of judges with uncorrelated opinions. *Is this an ethical thing to do?*
        - Implementing this in code is incredibly simple. Note that all of this is equivalent to performing a change of basis on $P$ before computing its final scores. This is equivalent to finding $\rho^{\mathrm{PV}} (PC)$ where $C$ is the matrix of $P$'s principal components.
3. This method is pretty susceptible to outliers. One deviating score can drastically inflate the variance of a judge. 
      - We see this behavior with **Judge Foxtrot**. All scores are within 5 points of 35, except one 44 entry. 

As promising and reasonable Proportional Variance seems, it nonetheless has its problems. 
{% admonition(type='warning', title='Caution: Ramifications of New Approach') %}
In point 2 above, I outline a process that drops the assumption of independence altogether by weakening it to zero correlation, then showing that all score data can be manipulated to achieve zero correlation.

**Be very careful with this approach**. Aside from the ethical concerns of replacing the judges with idealized versions of themselves, this is ultimately manipulating the data to fit a very specific metric (i.e. uncorrelated). Is this level of preprocessing necessary? If yes, why is the solution to change the raw data and not its generating process? 

These criticisms may apply to all the other methods (e.g. "How is adjusting scores not fitting a specific goal?"). The point of this blog is to address them as best I can. I do not renounce this approach as fundamentally wrong, but **I implore anyone attempting it to offer more justification than I have.**
{% end %}

## $\kappa$-adjusted Score

This is ultimately the scoring method we settled on for use in Data Science UCSB's events. The development of this came from modifying the $z$-score Sum method to simultaneously down-weigh positivity bias while also maintaining units of points.

Before we proceed, we must make two crucial assumptions
{% admonition(type='question', title='Assumption: Purely Average Score') %}
All judges have a score which they would consistently give to any idealized average project. This "purely average score" is unique to each judge.
{% end %}
The existence of an "idealized average project" is dubious, but we set those details aside. The reason for this assumption is so we can explain why judges use different parts of the score spectrum. Suddenly, we can now say that one person's 7/10 may be someone else's 5/10. 

We will use $\mu_j$ as a stand-in for this "purely average score". This is objectionable for our toy dataset, since the judges were evaluating finalists, not all projects in the club, thus $\mu_j$ is a biased estimate (recall: survivorship bias). 

I acknowledge this concern, and an easy fix is to slightly modify the assumption to "Purely Average Score among Top Performers", or "Purely Decent Score". Note that this implicitly assumes some finalists are below this threshold. In our opinion, we felt that this assumption was equally reasonable for our events.

{% admonition(type='question', title='Assumption: Judge Variability') %}
The judges whose individual points are most informative, hence possesses the least statistical noise, use a wider spectrum of the scores.
{% end %}

Like Proportional Variance, we will use standard deviation to weigh points. Unlike Proportional Variance, we include a hyperparameter to tune the strength of this weighting.

Let $\kappa > -1$. The $\kappa$-adjusted score is defined as
<div style="overflow-x: auto;">
$$
\rho_{i}^{\kappa\textrm{-adj}} = \sum_{j=1}^{N} \mathrm{sign}(p_{ij} - \mu_j) \left (\sigma_j^\kappa \left| p_{ij} - \mu_j \right| \right)^{\frac{1}{1 + \kappa}}
$$
</div>

While this definition is complicated, it's straightforward to unpack. Treating $\mu_j$ as the "purely average score", $|p_{ij} - \mu_j|$ captures how many points away a project is from "purely average". We then weigh this by $\sigma_{j}^{\kappa}$ in order to uplift judges with more variability. Finally, we root by $1 + \kappa$ to ensure the final units are the same as the raw data's. The purpose of the $\mathrm{sign}$ is to simply avoid issues where we may root a negative number.

However, there's more to the role of $\kappa$ than meets the eye. By design, it's intended to quantify how much weight $\sigma_j$ has. Higher $\kappa$ means the weights are larger. However, note that we effectively weigh the score by $\sigma_{j}^{\frac{\kappa}{1 + \kappa}}$, which means that the exponent is always less than 1. Perhaps not the precise desired behavior, but the desired behavior nonetheless.

More interestingly, this method makes point gains non-linear.
- When $\kappa \in (0, \infty)$, we see that $\left| p_{ij} - \mu_j \right|^\frac{1}{1 + \kappa}$ behaves like a root function, meaning increasing $p_{ij}$ from $\mu_j$ -> $\mu_j + 1$ has more of an increase than $\mu_j + 5$ -> $\mu_j + 6$.
- When $\kappa = 0$, this is linear, and in fact equivalent in ranking to (1).
- When $\kappa \in (-1, 0)$, we see that $\left| p_{ij} - \mu_j \right|^\frac{1}{1 + \kappa}$ behaves like a polynomial, meaning increasing $p_{ij}$ from $\mu_j + 5$ -> $\mu_j + 6$ has more of an increase than $\mu_j$ -> $\mu_j + 1$.
- Lastly, while $\kappa < -1$ is *technically* defined, it is not interpretable. We would run into a situation where scores close to $\mu_j$ are more valuable than scores far greater than $\mu_j$.

Note that $\mu_j, \sigma_j$ changes if $p_{ij}$ changes. This analysis, while accurate for the most part, is oversimplified. Only small increments to points should be considered.

Applying this method to our toy data yields

*Table 4: $\kappa$-adjusted Final Scores*
| Finalist  | $1$-adjusted   | $2$-adjusted   |
| --------- | -------------  | -------------- |
| Project 1 | 40.356         | 39.501         |
| Project 4 | 20.136         | 21.055         |
| Project 6 | 13.343         | 13.339         |
| Project 2 | 11.053         | 9.679          |
| Project 3 | -5.657         | -4.281         |
| Project 8 | -8.674         | -8.785         |
| Project 7 | -31.173        | -30.281        |
| Project 5 | -37.502        | -36.647        |

As with everything else, there's deeper criticisms
1. Like the $z$-score Sum, it's difficult to figure out the range without knowing $\kappa, \\{\mu_j\\}\_{j=1}^{N}, \\{\sigma_j\\} \_{j=1}^{N}$. 
2. It's difficult to choose a good value of $\kappa$. For Data Science UCSB events, we stuck with $\kappa = 1$ and increased if we felt the resulting final scores were too large. This approach suffers the same criticisms as [emperical Bayes methods](https://en.wikipedia.org/wiki/Empirical_Bayes_method).
    - The premise of this criticism is rather presumptuous, as choosing $\kappa$ is effectively choosing the scoring method. What defines a "good" scoring method?
    - Still, is there any nuance or cleverness here, or is the choice arbitrary?
3. Out of all methods, this one is the most numerically unstable
    - Especially for raw scores with large ranges.
    - Though not as susceptible to outliers as Proportional Variance since $\sigma_j$ is rooted.

{% admonition(type='tip', title='An Interesting Modification') %}
Since we effectively weigh by $\sigma\_{j}^{\frac{\kappa}{1 + \kappa}}$, the weights are going to be smaller than $\sigma_j$. It's quite strange that $\kappa$ has this effect.

Motivated from the definition of the $L^p$ norms, let's instead define
<div style="overflow-x: auto;">
$$
\varrho_{i}^{\kappa\textrm{-adj}} = \left| \sum_{j=1}^{N} \sigma_{j}^\kappa \left(p_{ij} - \mu_j \right) \right|^{\frac{1}{1 + \kappa}} \mathrm{sign}\left( \sum_{j=1}^{N} \sigma_j^\kappa \left( p_{ij} - \mu_j \right) \right)
$$
</div>

Not only does $\varrho^{\kappa\textrm{-adj}}$ share the same units as the raw data, the effects of $\kappa$ are much more straightforward.

However, this loses the effect of non-linear point gains, and moreover $\mu_j$ can be dropped without affecting the ranking. Be aware of these changes if you decide to go with this modification.
{% end %}

Still, in spite of these criticisms, we were the most satisfied with this scoring method. We felt that it not only down-weighted the positivity bias present in many judges, but also filtered out noise very well. We also saw the non-linear point gains as a benefit.

# Conclusion

While evaluating these scoring methods is rather tricky, and may even lead to a situation akin to [$p$-hacking](https://en.wikipedia.org/wiki/Data_dredging), it's nonetheless useful to have a number of tools at your disposal. The heuristics we mainly used in Data Science UCSB was
1. Do we feel like the new gaps between scores changed in a positive and significant manner?
2. Will the judges, participants, and audience accept the new ranking?
3. Do we have a legitimate reason for adjusting the judge's assessments?
4. Do we plan on releasing the scores, and if not, do we need to worry about participants that are well-below the winners?

Obviously, many of these criteria are vague and imprecise. We only ended up using this system twice. Still, we felt like it gives us more peace-of-mind knowing that the winners were chosen more "fairly" and less "arbitrarily". Whatever that means.

# Code

All code for all the discussed methods can be found on GitHub at [DanLeEpicMan/score-adjuster](https://github.com/DanLeEpicMan/score-adjuster).

The code is released under the [MIT License](https://github.com/DanLeEpicMan/score-adjuster/blob/main/LICENSE), and as long as you abide by it, you are welcome to use my code however you please. I also encourage expanding upon any ideas I've written here in this blog.