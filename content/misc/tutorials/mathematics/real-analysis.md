+++
title = "Real Analysis" 
description = "An introduction into real analysis." 
date = '2025-12-16'
+++

# Introduction 

Welcome to my guide on **real analysis**! This is largely based on my notes from courses I took while an undergraduate math major. My goal is to offer an introduction into the subject that is accessible to non-math majors, while still maintaining mathematical rigor. My plan is to cover some (but not all) of the fundamentals, up until differentation and integration theory.

Note that this blog is not meant to supplant an education in analysis. A proper introduction into real analysis will require a textbook. I personally recommend *Understanding Analysis* by Stephen Abbott, or *Principles of Mathematical Analysis* by Walter Rudin. The former is significantly more accessible, while the latter is a gold standard among undergraduate curriculums.

### Prerequisites

Due to the nature of the subject, an above average mathematical maturity is necessary. Familiarity with proofs, set theory, and functions is assumed. Discrete mathematics is typically sufficient for this level of familiarity. These are not details that can be abstracted away, as doing so is antithetical to the goals of real analysis.

# What is Real Analysis?

Analysis is tricky for me to define. From Wikipedia:

> Real analysis studies the behavior of real numbers, sequences and series of real numbers, and real functions.

Which is true, but not particularly illuminating. Another common definition of analysis is the rigorous undertones of calculus. Perhaps accurate, but still unsatisfying. 

**To me, real analysis is the study of approximation and limiting behavior.** While this is the least accurate definition, I find it the most intuitive. After all, real analysis is the foundation of much of applied mathematics, which itself is married to approximation.

# The Mathematics

We begin covering real analysis by first discussing different types of numbers.

## Number Systems

{% admonition(type='note', title='The Natural Numbers and Integers') %}

The **natural numbers**, denoted $\mathbb{N}$, are the set of whole numbers, starting from<a href='#footnote-a' style='text-decoration: none'><sup class='opacity-60'>a</sup></a> 1, i.e. 
$$
    \mathbb{N} = \\{1, 2, 3, \dots \\}
$$

The **integers**, denoted<a href='#footnote-b' style='text-decoration: none'><sup class='opacity-60'>b</sup></a> $\mathbb{Z}$, are the set of whole numbers including negative numbers and 0, i.e. 
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
Generally, we assume that $a, b$ have no common factors (other than 1), so that each rational number has a unique representation.

{% end %}

We call these "rational" numbers because they are a ratio of simpler building blocks, the integers. Indeed, the rational numbers encompass a vast majority of numbers we encounter in everyday life. 

Moreover, the rationals have a nice property called **density**. Between any two rational numbers, there exists another rational. Explicitly, if $r < s$ are both rational, then $r < \frac{r + s}{2} < s$ is also rational. In some sense, this means the rationals are "fine", unlike the integers, which are "coarse".

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

The "incompleteness" of $\mathbb{Q}$ motivates the definition of the real numbers.

{% admonition(type='note', title='The Real Numbers') %}

The **real numbers**, denoted $\mathbb{R}$, is the set of all numbers that can be represented with an infinite decimal expansion.

{% end %}

This definition is circular, since we have not discussed what an "infinite decimal expansion" is. A proper definition of $\mathbb{R}$ requires more advanced tools. However, for our purposes, this definition suffices. 

<p id='footnote-a' class='opacity-60'><small><b>a</b>: This definition of $\mathbb{N}$ excludes 0, which is a major source of debate among mathematicians. However, this definition of $\mathbb{N}$ is the most common, and natural (ba-dum-tss), in analysis. If needed, we will use $\mathbb{N}_0$ to denote the natural numbers <b>including</b> 0.</small></p>

<p id='footnote-b' class='opacity-60'><small><b>b</b>: We use $\mathbb{Z}$ for integers because of the German word "Zahlen", meaning "numbers".</small></p>

## The Infimum and Supremum

### Acknowledgments

The illustration of the supremum is provided by Wikimedia Commons user Stephan Kulla, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
