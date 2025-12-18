+++
title = "Real Analysis" 
description = "An introduction into real analysis." 
date = '2025-12-16'
+++

# Introduction 

Welcome to my guide on **real analysis**! This is largely based on my notes from courses I took while an undergraduate math major. My goal is to offer an introduction into the subject that is accessible to non-math majors, while still maintaining mathematical rigor. My plan is to cover some (but not all) of the fundamentals, up until differentation and integration theory.

Note that this blog is not meant to supplant a course in analysis. A proper introduction into real analysis will require a textbook. I personally recommend *Understanding Analysis* by Stephen Abbott, or *Principles of Mathematical Analysis* by Walter Rudin. The former is significantly more accessible, while the latter is a gold standard among undergraduate curriculums.

### Prerequisites

Due to the nature of the subject, an above average mathematical maturity is necessary. Familiarity with proofs, set theory, and functions is assumed. Discrete mathematics is typically sufficient for this level of familiarity. These are not details that can be abstracted away, as doing so is antithetical to the goals of real analysis.

# What is Real Analysis?

Analysis is tricky for me to define. From Wikipedia:

> Real analysis studies the behavior of real numbers, sequences and series of real numbers, and real functions.

Which is true, but not particularly illuminating. Another common definition of analysis is the rigorous undertones of calculus. Perhaps accurate, but still unsatisfying. 

**To me, real analysis is the study of approximation and limiting behavior.** While this is the most simplistic definition, I find it the most intuitive. After all, real analysis is the foundation of much of applied mathematics, which itself is married to approximation.

# The Basics

We begin covering real analysis by first discussing different types of numbers.

## Basic Number Systems

{% admonition(type='note', title='The Natural Numbers and Integers') %}

The **natural numbers**, denoted $\mathbb{N}$, are the set of whole numbers, starting from<a href='#footnote-a' style='text-decoration: none'><sup class='opacity-60'>a</sup></a> 1. I.e. 
$$
    \mathbb{N} = \\{1, 2, 3, \dots \\}
$$

The **integers**, denoted<a href='#footnote-b' style='text-decoration: none'><sup class='opacity-60'>b</sup></a> $\mathbb{Z}$, are the set of whole numbers, negative numbers, and 0. I.e. 
$$
    \mathbb{Z} = \\{ \dots, -3, -2, -1, 0, 1, 2, 3, \dots \\}
$$

{% end %}

Both the natural numbers and integers form the most basic type of number system. In some sense, we can think of them as a starting point.

{% admonition(type='note', title='The Rational Numbers') %}

The **rational numbers**, denoted $\mathbb{Q}$, are the set of ratios of integers, i.e. 
$$
    \mathbb{Q} = \left\\{ \frac{a}{b} : a, b \in \mathbb{Z}, b \neq 0 \right\\}
$$
Generally, we assume that $a, b$ have no common factors (other than 1), so that each non-zero rational number has a unique representation.

{% end %}

We call these "rational" numbers because they are a ratio of simpler building blocks, the integers. Indeed, the rational numbers encompass a vast majority of numbers we encounter in everyday life. 

Moreover, the rationals have a nice property called **density**. Between any two rational numbers, there exists another rational. Explicitly, if $r < s$ are both rational, then their average $\frac{r + s}{2}$ is also rational, and $r < \frac{r + s}{2} < s$. In some sense, this means the rationals are "fine", unlike the integers, which are "coarse".

However, despite their ubiquity and density, the rationals do not encompass all numbers.

{% admonition(type='tip', title='Irrationality of $\sqrt{2}$') %}

The number $\sqrt{2}$, defined as the positive number such that $\left(\sqrt{2}\right)^2 = 2$, is not rational.

{% end %}

<details>
    <summary>Proof</summary>
    Assume the contrary, i.e. that $\sqrt{2}$ is rational. Then by definition,
    $$
        \sqrt{2} = \frac{a}{b} \quad \textrm{for } a, b \in \mathbb{Z}, b \neq 0
    $$
    Without loss of generality, we may assume that $a, b$ share no common factors. Rearranging the equation, we have that
    $$
        2b^2 = a^2
    $$
    This implies that $a^2$ is even, therefore $a$ is even (if $a$ weren't even, then $a^2$ can't be even). Thus, $a = 2k$ for some $k \in \mathbb{Z}$. As a result, we must have that
    $$
        2b^2 = (2k)^2 = 4k^2 \implies b^2 = 2k^2
    $$
    So $b^2$ is even, therefore $b$ is even. This means that $a, b$ share a common factor of 2, contradicting our assumption. Thus, $\sqrt{2}$ is irrational. 
    <p>∎</p>
</details>

This "incompleteness" of $\mathbb{Q}$ motivates the definition of the real numbers.

<p id='footnote-a' class='opacity-60'><small><b>a</b>: This definition of $\mathbb{N}$ excludes 0, which is a major source of debate among mathematicians. However, this definition of $\mathbb{N}$ is the most common, and natural (ba-dum-tss), in analysis. If needed, we will use $\mathbb{N}_0$ to denote the natural numbers <b>including</b> 0.</small></p>

<p id='footnote-b' class='opacity-60'><small><b>b</b>: We use $\mathbb{Z}$ for integers because of the German word "Zahlen", meaning "numbers".</small></p>

## The Real Numbers

A proper definition of the real numbers is incredibly technical, and for this article, quite pedantic. We may instead rely on the following intuitive definition.

{% admonition(type='note', title='The Real Numbers') %}

The **real numbers**, denoted $\mathbb{R}$, is the set of all numbers that can be represented with an infinite decimal expansion. E.g. $\sqrt{2} = 1.41421\dots$

{% end %}

It's easy to see that $\mathbb{Q} \subset \mathbb{R}$. Moreover, just like the rationals, the reals have **density**. If $x < y$ are both real numbers, then their average $\frac{x + y}{2}$ is also real, and $x < \frac{x + y}{2} < y$. 

But more importantly, there is a profound relationship between the rationals and the reals.

{% admonition(type='tip', title='Density of the Rationals in the Reals') %}

Between any two real numbers, there exists a rational number. 

Explicitly, if $x < y$ are both real, then there exists $r \in \mathbb{Q}$ such that $x < r < y$.

{% end %}

Unfortunately, we have to be a bit more clever than taking the average, since the average of two reals may not be rational.

<details>
    <summary>Proof</summary>
    Let $x < y$ be real numbers. Then $y - x > 0$. Since $\mathbb{N}$ is unbounded<a href='#footnote-c' style='text-decoration: none'><sup class='opacity-60'>c</sup></a> from above, we can find $n \in \mathbb{N}$ such that
    $$
    \begin{aligned}
        &n > \frac{1}{y - x} \\\\
        \implies &\frac{1}{n} < y - x
    \end{aligned}
    $$
    Note that we used the fact that $a > b > 0 \implies \frac{1}{a} < \frac{1}{b}$. Let $m \in \mathbb{Z}$ be the largest integer such that $m \leq nx$. Note that $m$ may be negative, and that $\mathbb{Z}$ has no lower bound, so such an $m$ exists. Then we have that
    $$
    \begin{aligned}
        &m \leq nx < m + 1 \\\\
        \implies &\frac{m}{n} \leq x < \frac{m + 1}{n}
    \end{aligned}
    $$
    Putting this together, we have that
    $$
    \begin{aligned}
        x &< \frac{m + 1}{n} \\\\
        &= \frac{m}{n} + \frac{1}{n} \\\\
        &\leq x + \frac{1}{n} \\\\
        &< x + (y - x) \\\\
        &= y
    \end{aligned}
    $$
    Which says precisely that $x < \frac{m + 1}{n} < y$. Thus, $r = \frac{m + 1}{n} \in \mathbb{Q}$ is the desired rational number.
    <p>∎</p>
</details>

An immediate consequence of this is that **every real number can be approximated by a rational number** to arbitrary precision. For example, $\sqrt{2}$ can be approximated by the rational number $1.41$ to two decimal places, $1.41421$ to five decimal places, and even $1.41421356237309504880$ to twenty decimal places. For any given error threshold and real number $x$, we can always find a rational number $r$ such that the distance between $x$ and $r$ is less than the error threshold.

At this point, we may begin to ask what the point of the reals are. After all, every real number can be approximated by a rational number. To further motivate this idea of "completeness", we must segue into the concepts of bounds, supremum, and infimum.

<p id='footnote-c' class='opacity-60'><small><b>c</b>: I technically haven't defined what it means to be "unbounded", though this will be explained in the next section.</small></p>

## The Infimum and Supremum

A major concept in real analysis is the idea of bounds.

{% admonition(type='note', title='Upper and Lower Bounds') %}

Let $M$ be a subset of $\mathbb{R}$. We say that $a$ is an **upper bound** of $M$ if
$$
    \textrm{For every } x \in M, \quad x \leq a
$$

Similarly, we say that $b$ is a **lower bound** of $M$ if
$$
    \textrm{For every } x \in M, \quad x \geq b
$$

{% end %}

For instance, let $M = [0, 1)$. Then 2 is an upper bound of $M$, and -1 is a lower bound of $M$.

<figure>
    <img src="/images/tutorials/real-analysis/upper_lower_bounds.png" alt="An illustration of the bounds of a set." />
    <figcaption>Lower bound in blue, $M$ in green, and upper bound in red. Made with Desmos.</figcaption>
</figure>

However, it's not hard to see that we can do better. 1.5 and -0.5 are also upper and lower bounds, respectively. In fact, there are infinitely many upper and lower bounds for $M$. 

This motivates the definitions of the **supremum** and **infimum**, which are Latin for "above" and "below", respectively.

{% admonition(type='note', title='Supremum and Infimum') %}

Let $M$ be a subset of $\mathbb{R}$. The **supremum** of $M$, denoted $\sup M$, is the least upper bound of $M$. More rigorously, $\sup M$ satisfies

$$
    \begin{aligned}
        &\textrm{(1) For every } x \in M, &&x \leq \sup M \\\\
        &\textrm{(2) For every } \varepsilon > 0, &&\sup M - \varepsilon \textrm{ is not an upper bound of } M
    \end{aligned}
$$

Similarly, the **infimum** of $M$, denoted $\inf M$, is the greatest lower bound of $M$. More rigorously, $\inf M$ satisfies

$$
    \begin{aligned}
        &\textrm{(I) For every } x \in M, &&x \geq \inf M \\\\
        &\textrm{(II) For every } \varepsilon > 0, &&\inf M + \varepsilon \textrm{ is not a lower bound of } M
    \end{aligned}
$$

{% end %}

While $\varepsilon$ (epsilon) may be any positive real number, we typically think of it as an astronomically tiny number.

Property (1) ensures that the supremum is an upper bound, while property (2) ensures that it is the smallest such upper bound. Intuitively, property (2) says that if we nudge the supremum down by any amount, it will no longer be an upper bound. The same logic applies to the infimum.

<figure>
    <img src="/images/tutorials/real-analysis/illustration_of_supremum.png" alt="An illustration of the bounds of a set." style="height: 150%"/>
    <figcaption>A visual illustration of the supremum. If we nudge $\sup M$ to the left by any amount, we can find a blue point greater than it. Hence, it ceases to be an upper bound. Credit to Wikimedia Commons.</figcaption>
</figure>

In our previous example of $M = [0, 1)$, we have that $\sup M = 1$ and $\inf M = 0$, since for any $\varepsilon > 0$, we can always find numbers in $M$ that are greater than $1-\varepsilon$ and less than $0+\varepsilon$.

Why do we care about the supremum and infimum? Because this is precisely what separates the real numbers from the rational numbers.

{% admonition(type='tip', title='Completeness of the Reals') %}

If $M$ is a non-empty subset of $\mathbb{R}$ that is bounded above, then $\sup M$ exists and is a unique, real number. We call this the **completeness property**<a href='#footnote-d' style='text-decoration: none'><sup class='opacity-60'>d</sup></a> of the real numbers.

{% end %}

While completeness is stated only in terms of the supremum, it's true for the infimum as well. We can simply consider the set $-M = \\{ -x : x \in M \\}$, and note that $\inf M = -\sup(-M)$.

As we've been alluding to, $\mathbb{Q}$ is not complete. For example, let 
$$
    A = \\{ x \in \mathbb{Q} : x^2 < 2 \\}
$$

Then $A$ is bounded above by 2, a rational number. In fact, there are infinitely many rational upper bounds. However, since $\sup A = \sqrt{2} \notin \mathbb{Q}$, there is no **smallest** rational upper bound of $A$, as we can always find one that's smaller by the density of rationals in reals.

<p id='footnote-d' class='opacity-60'><small><b>d</b>: No proof is given since this is more of a definition than a proof. In the same way that we built $\mathbb{Q}$ from $\mathbb{Z}$ with division, we can build $\mathbb{R}$ from $\mathbb{Q}$ with supremums (see Dedekind cuts). While it is possible to prove completeness directly, it is well-beyond the scope of this article.</small></p>

# Point-Set Topology

While this section is a bit of a diversion from the prior, point-set topology is fundamental to real analysis. Viewing things under a topological lens often greatly simplifies ideas and builds good intuition.

## Open Sets

Before we can define an open set, we must first define a neighborhood.

{% admonition(type='note', title='Neighborhood') %}

Let $x \in \mathbb{R}$ and $\varepsilon > 0$. The **neighborhood** of $x$ with radius $\varepsilon$, denoted $N_\varepsilon (x)$, is defined as 
$$
    N_\varepsilon (x) = \\{ y \in \mathbb{R} : |y - x| < \varepsilon \\}
$$

Note that this is simply the open interval $(x - \varepsilon, x + \varepsilon)$.

{% end %}

Sometimes neighborhoods are called **open balls**, as $N_\varepsilon (x)$ is quite literally an open 1-dimensional ball of radius $\varepsilon$ centered at $x$.

{% admonition(type='note', title='Open Sets') %}

Let $U$ be a subset of $\mathbb{R}$. We say that $U$ is **open** if for every $x \in U$, there exists $\varepsilon > 0$ such that $N_\varepsilon (x) \subseteq U$.

In other words, for every $x \in U$, we can find a neighborhood around $x$ that is entirely contained within $U$.

{% end %}

<figure>
    <img src="/images/tutorials/real-analysis/open_set.png" alt="An illustration of an open set."/>
    <figcaption>A visual illustration of open sets. If $x \in U$, then we can find a neighborhood around $x$ contained entirely in $U$. Note that this illustration is in 2-dimensions, while all our discussion has been 1-dimensional. Credit to Wikimedia Commons.</figcaption>
</figure>

Intuitively, a set is open if every point has "breathing room" in every direction. Points on the boundary do not have this "breathing room", since any neighborhood around them must include points outside the set.

## Closed Sets

To introduce closed sets, we must first define limit points.

{% admonition(type='note', title='Limit Points') %}

Let $M$ be a subset of $\mathbb{R}$. A point $x \in \mathbb{R}$ is a **limit point** of $M$ if for every $\varepsilon > 0$, the neighborhood $N_\varepsilon (x)$ contains at least one point of $M$, excluding $x$ itself. More formally,

$$
    \textrm{For every } \varepsilon > 0, \quad (N_\varepsilon (x) \setminus \\{ x \\} ) \cap M \neq \varnothing
$$

{% end %}

This definition may seem tricky, but the idea is rather simple. Consider the set
$$
    A = \\left\\{ \frac{1}{n} : n \in \mathbb{N} \\right\\}
$$
Then 0 is a limit point of $A$, since for any $\varepsilon > 0$, we can find $k \in \mathbb{N}$ such that $\frac{1}{k} < \varepsilon$. Thus, $\frac{1}{k} \in N_\varepsilon (0)$. 

<figure>
    <img src="/images/tutorials/real-analysis/limit_point.png" alt="An illustration of limit points."/>
    <figcaption>No matter how small a neighborhood around 0 (green), there will always be some elements of $A$ (red) inside it. Made with Desmos.</figcaption>
</figure>

{% admonition(type='note', title='Closed Sets') %}

Let $C$ be a subset of $\mathbb{R}$. We say that $C$ is **closed** if it contains all of its limit points. More formally, if $x$ is a limit point of $C$, then $x \in C$.

{% end %}

Closed sets are commonly thought of as sets that contain their boundaries. While not fully accurate, it's helpful intuition, since boundary points are precisely the limit points that are not within the "interior" of the set.

Using the previous example, the set

$$
    \\left\\{ \frac{1}{n} : n \in \mathbb{N} \\right\\} \cup \\{ 0 \\}
$$

is closed, since it contains its only limit point, 0. Moreover, the interval $[0, 1]$ is closed, since it contains all its limits points (which, coincidentally, is the entire set).

## Open and Closed Sets

An important relationship between open and closed sets is that they are complements of each other.

{% admonition(type='tip', title='Complementarity of Open and Closed Sets') %}

    Let $U$ be a subset of $\mathbb{R}$. Then $U$ is open if and only if $U^c$ is closed.

{% end %}

<details>
    <summary>Proof</summary>
    <p>
    Assume $U$ is open. Let $x$ be a limit point of $U^c$. Then for every $\varepsilon > 0$, the neighborhood $N_\varepsilon (x)$ contains at least one point of $U^c$, excluding $x$ itself. Thus, $N_\varepsilon (x) \nsubseteq U$. since $U$ is open, this implies that $x \notin U$. Therefore, $x \in U^c$, so $U^c$ contains all its limit points, and is therefore closed.
    </p>
    <p>
    Now assume $U^c$ is closed. Let $x \in U$. Since $U^c$ is closed, $x$ is not a limit point of $U^c$. This must mean that we can find some $\varepsilon > 0$ such that $N_\varepsilon (x)$ contains no points of $U^c$. Thus, $N_\varepsilon (x) \subseteq U$, so $U$ is open.
    </p>
    <p>∎</p>
</details>

### Acknowledgments

1. All Desmos graphs were created by me.
2. [The illustration of the supremum](https://commons.wikimedia.org/wiki/File:Illustration_of_supremum.svg) is provided by Wikimedia Commons user Stephan Kulla, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
3. [The illustration of open sets](https://commons.wikimedia.org/wiki/Category:Open_sets) was modified by me, originally provided by Wikimedia Commons.