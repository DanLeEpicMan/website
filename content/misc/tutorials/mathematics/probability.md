+++
title = "Probability Theory" 
description = "The fundamentals of probability" 
date = '2026-08-15'
weight = 2
+++

# Introduction 

Welcome to my introduction on **probability theory**! Much of this tutorial will tread the line between statistics and mathematics. Indeed, probability theory is the machinery empowering statistics. 

**However, I must stress the importance of viewing probability separately from specific applications**. Probability lacks a universal interpretation. Its meaning changes with who you ask. 

So rather than assign a meaning, my goal is to present a general theory encompassing all these interpretations. In other words, describe the similarities of these interpretations with precise mathematical language.

To this end, I believe it is best to withhold prior conceptions of probability, and simply understand the theory as-is, devoid of intrinsic meaning. Understand that all analogies are not to be taken as a definition, but as a concrete example of an abstract concept.

**I intend to approach probability theory from a measure-theoretic framework**. In my opinion, this is the most natural definition of probability. That said, I recognize such a treatment is difficult for the typical reader, especially those without a background in mathematics, let alone measure theory. As such, I will do my best to reduce difficult details. 

### Prerequisites

Familiarity with set theory is necessary. Familiarity with analysis is strongly recommended. My previous guide in [real analysis](/misc/tutorials/mathematics/real-analysis) will be beneficial, particularly the sections on convergence, limits, and point-set topology. As a litmus test of your readiness, you should be able to say a sentence about the phrase "open set" and the notation $x_n \to x$.

# What Is Probability?

As I hoped to communicate in the introduction, probability has no universally agreed meaning. To see why, let's walk through a simple example.

Suppose I'm tossing a coin, as depicted below.

<figure>
    <img src="/images/tutorials/probability-theory/penny.webp" alt="An illustration of the bounds of a set." />
    <figcaption>The American penny. The left-side is "heads", while the right side is "tails". (Credit: US Mint)</figcaption>
</figure>

When tossing the coin, there are one of two possibilities{{ footnote() }}. Either it lands with the heads side facing up, or the tails side facing up. Without precise knowledge of physical details, such as the strength and direction of my toss, it is impossible to *a priori* deduce the result of a toss with absolute certainty.

Nevertheless, it's wrong to say we are ignorant. We know the result will be one of heads or tails. How do we describe such uncertainty without admitting total ignorance?

In essence, the job of probability is to quantify such uncertainty. Yet the means of doing so brings nuance. Allow me to outline a few interpretations. Keep in mind that the following interpretations are not to be taken as wholly accurate representatives of their school of thought.

1. A [frequentist](https://en.wikipedia.org/wiki/Frequentist_probability) will argue that we should describe uncertainty with long-term frequency. In this case, the probability of heads represents the proportion of tosses resulting in heads as we perform more and more outcomes. Ultimately, this comes out to 50%.
2. A [Bayesian](https://en.wikipedia.org/wiki/Bayesian_probability) will argue that we should describe uncertainty with subjective belief. In this case, the probability of heads represents my reasonable expectation that heads will appear. Most people agree this should be 50%.
3. A [propensitist](https://en.wikipedia.org/wiki/Propensity_probability) will argue that we should describe uncertainty with physical tendencies. In this case, the probability of heads represents the natural tendency of a coin to land on heads. By symmetry of a coin, this is half, i.e. 50%.
4. An [information theorist](https://en.wikipedia.org/wiki/Information_theory) will argue that we should describe uncertainty with informativeness. If an event carries a lot of information, it must be rare and thus have low probability. In this case, the probability of heads represents how informative{{ footnote() }} it is to see heads, which is 50% due to having equal information with tails.

As I hope these examples illustrate, asking what probability means opens much room for debate. While there's overlap among these interpretations, they are ultimately distinct schools of thought with room for disagreement. 

Yet in spite of these differences, there is one agreement among all four of them. The probability of heads is 50%. Mathematically, $\mathbb{P}(\textrm{Heads}) = 0.5$. The goal of this blog is to outline this unifying mathematical theory.

{% footnote_body() %}
The coin can technically land on its side, leaving a third possibility. For simplicity's sake, let's just assume this isn't possible.
{% end %}

{% footnote_body() %}
I haven't explained why. Doing so requires me to define "information". That's for a different blog.
{% end %}

# The Fundamentals

## Outcomes and Events

Before we introduce probability, we must first define{{ footnote() }} the things probability measures.

{% admonition(type='note', title='Outcomes and Events') %}

An **outcome**, denoted $\omega$, is the result of a random trial. The set of all possible outcomes, called the **sample space**, is denoted as $\Omega$.

An **event**\* is a collection of outcomes. In other words, if $E$ is an event, then $E \subseteq \Omega$.

\* - *This definition is intentionally incomplete. We will amend it when enough theory is discussed :)*

{% end %}

As with everything, the notation is daunting, but rather simple once an example comes into play.

Suppose I am rolling a six sided die. 

<figure>
    <img src="/images/tutorials/probability-theory/die.webp" alt="An illustration of the bounds of a set." />
    <figcaption>Just three of the six possible outcomes.</figcaption>
</figure>

The possible outcomes are 1–6, therefore $\Omega = \\{ 1, 2, \dots, 6 \\}$ is the sample space. A possible event is rolling an even number, which corresponds to $E = \\{ 2, 4, 6 \\}$. Another event is nothing, i.e. $E = \varnothing$, and its contrary is something, i.e. $E = \Omega$.

Rolling a six is also an event, $E = \\{ 6 \\}$. This should not be confused with the *outcome* of $\omega = 6$. The difference is subtle, yet simple. $E \subseteq \Omega$ while $\omega \in \Omega$.

With outcomes and events mostly defined, we can now start asking ourselves about *collections* of events.

{% footnote_body() %}
There is one major subtlety in this definition. "Random" is left unaddressed. Indeed, we only assume it exists in some capacity. The precise meaning is left to the aforementioned schools of thought to figure out, and is otherwise unimportant to us.
{% end %}

## $\sigma$-algebra

The name{{ footnote() }} of this section is a huge departure. Why are we introducing Greek into otherwise simple ideas? Are things going to get complicated? As horrifying as the notation may seem, I promise that it follows naturally from the previous section.

{% admonition(type='note', title='Sigma Algebra') %}

A $\sigma$-algebra, denoted $\Sigma$, is a *collection* of events satisfying the following properties.

1. $\varnothing \in \Sigma$
2. If $E \in \Sigma$, then $E^c \in \Sigma$
3. If $ \\{ E\_i \\}\_{i=1}^{\infty} \subseteq \Sigma $, then 
   
$$
\bigcup\_{i=1}^{\infty} E\_i \in \Sigma
$$

4. If $ \\{ E\_i \\}\_{i=1}^{\infty} \subseteq \Sigma $, then 
   
$$
\bigcap\_{i=1}^{\infty} E\_i \in \Sigma
$$

*Note: (2), (3), and de Morgan's laws imply (4), making it unnecessary to state. I include it for illustrative purposes.*
{% end %}

This definition is *very* scary at first glance. Why are there infinities? What do these complex properties mean? I promise that everything is written there for a precise reason, and is rather simple with enough unpacking.

$\sigma$-algebras are essentially a mathematical formalization of deductive reasoning. Intuitively, a $\sigma$-algebra encodes all the possible events one can deduce as true or false with a certain amount of knowledge. To translate each property into plain English

1. By definition of a random trial, it must always have an outcome. Therefore, we know $\varnothing$ cannot happen. Hence, we can always deduce it.
2. If we know whether $E$ happened, we can say whether its contrary $E^c$ happened. They're mutually exclusive :)
   - A consequence of this and (1) is that $\varnothing^c = \Omega \in \Sigma$. Which logically makes sense. We always know *something* happened.
3. If we have a *countable* collection of events $E_1, E_2, \dots$, knowing whether each $E_i$ happened, then we can say whether its union $\cup_{i=1}^{\infty} E_i$ happened. This is obviously true, since unions are essentially OR statements (i.e. $A \cup B$ is the same as $A \textrm{ or } B$).
   - We allow the possibility of infinity for the most flexibility. Besides, having infinitely many outcomes isn't that shocking. Suppose my random trial is the number of attempts needed to throw a basketball into the hoop from across the court. Let $E_1 = \\{ 1 \\}, E_2 = \\{ 2 \\}, \dots, E_i = \\{ i \\}, \dots$
   - However, we must emphasize *countable*. "Unions are essentially OR statements" relies on this. In uncountable settings, logic quickly becomes counterintuitive.
4. In a similar vein as (3), intersections are essentially AND statements (i.e. $A \cap B$ is the same as $A \textrm{ and } B$)

It will be easier to see the usefulness of these properties with an example.

### Example: Knowledge of One Event

Suppose a friend rolls our six sided die. We are only told that the outcome is even, and nothing more. In other words, all we know is that the event $E = \\{ 2, 4, 6 \\}$ happened. We want to figure out every possible event we can deduce with absolute certainty.

Obviously, we can deduce $E$ happened. We also know that rolling an odd number, $E^c = \\{ 1, 3, 5 \\}$, didn't happen. Similarly, we know *something* happened, $\Omega$, and that *nothing* didn't happen. Beyond this, we cannot infer anything more with absolute certainty.

Therefore, the collection of sets $\Sigma = \\{ \varnothing, E, E^c, \Omega \\}$ forms a $\sigma$-algebra. It represents all possible events we can deduce with our friend's information.

### Example: Knowledge of Two Events

After all this work, suppose our friend also tells us that the outcome is less than 5. In other words, we are told $F = \\{1, 2, 3, 4 \\}$ happened. 

From this we can figure that $F^c = \\{ 5, 6 \\}$ didn't happen. We can also figure out that $E \cap F = \\{ 2, 4 \\}$ happened, as well as any combination thereof. In the end, our $\sigma$-algebra turns into $\Sigma = \\{ \varnothing, E, F, E^c, F^c, E \cap F, E^c \cap F, \dots, \Omega \\}$ (14 events total)

### Example: Knowledge of All Events

Finally, suppose our friend tells us the outcome was 2. In essence, he's simultaneously telling us $E_1 = \\{ 1 \\}, \dots, E_6 = \\{ 6 \\}$ and their truth values. From here, we may take arbitrary unions, so it follows that the associated $\sigma$-algebra is the powerset $2^\Omega$.

{% footnote_body() %}
For those curious, the $\sigma$ in $\sigma$-algebra means "countable". $\sigma$ comes from the German word "summe", sum, referring to the fact that $\sigma$-algebras are closed under countable unions, essentially sums of sets. 
{% end %}