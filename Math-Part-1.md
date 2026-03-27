# Math 1 — Part 1

## Module 1: Functions and Graphs

---

### 1. Supply, Demand and Equilibrium

#### i) Demand Relationship

- If $p$ is the price, what $q$ would be demanded? → $q$ as a function of $p$
- What $p$ would be s.t. a total quantity $q$ would be demanded? → $p$ as a function of $q$

#### ii) Supply Relationship

- If $p$ is the price, what $q$ would be the producer supply? → $q$ as a function of $p$
- What $p$ would be s.t. a total quantity $q$ would be produced? → $p$ as a function of $q$

#### iii) Supply and Demand Curve

$p$ is dependent on $q$ → dependent variable on vertical axis

**E.g. Demand equation:**

$$q + 2p = 19$$

- Point $(7, 6)$ satisfies: $7 + 6 \times 2 = 19$

#### iv) Example with Linear Supply and Demand

$$\text{(D):} \quad q + 2p = 20$$
$$\text{(S):} \quad 3q - 2p = -12$$

**Equilibrium point** $P = (p^*, q^*) = (9, 2)$

**Curve notes:**
- Supply $S$ is straight and slopes upwards
- Demand curve $D$ is straight and slopes downwards
- Supply quantity only non-negative when $p \geq 6$
- Demand quantity only non-negative when $0 \leq p \leq 10$

#### v) Equilibrium

- Point $P = (p^*, q^*)$ lies on both $(S)$ and $(D)$, so it's at their intersection
- When price is $p^*$, the market clears and we have equilibrium

#### vi) Example with Quadratic Supply and Demand

For $1 \leq p \leq 10$:

$$\text{(D):} \quad q = 250 - 4p - p^2$$
$$\text{(S):} \quad q = 2p^2 - 3p - 40$$

---

### 2. Sets

#### i) Notation

- $A = \{1, 2, 3\}$ → Set $A$ consists of $1, 2, 3$
- $x \in A$ → $x$ belongs to $A$

#### ii) Empty Set: $\emptyset$

#### iii) $S$ is a subset of set $T$: $S \subseteq T$

#### iv) Describing a Set

$A = \{1, 2, 3\}$ can be written as:

$$A = \{n \mid n \text{ is a whole number and } 1 \leq n \leq 3\}$$

#### v) Special Sets

| Symbol | Meaning |
|--------|---------|
| $\mathbb{R}$ | Real numbers (including decimals) |
| $\mathbb{R}^2$ | Set of points in $Oxy$ plane |
| $\mathbb{Z}$ | Integers |
| $\mathbb{N}$ | Natural numbers |

Nested relationship: $\mathbb{R} \supset \mathbb{Z} \supset \mathbb{N}$

#### vi) Unions and Intersections

- **Union:** $A \cup B = \{x \mid x \in A \text{ or } x \in B\}$
- **Intersection:** $A \cap B = \{x \mid x \in A \text{ and } x \in B\}$

#### vii) Exercise

**a)**
- $A = \{1, 2, 3, 5\}$, $B = \{2, 4, 5, 7, 8\}$, $C = \{3, 7, 8, 11\}$
- $A \cap B = \{2, 5\}$
- $(A \cap B) \cup C = \{2, 5, 3, 7, 8, 11\}$

**b)** Suppose $A = \{1, 5\}$ and $B = \{0, 1, 2, 4, 5, 9\}$:
- $A \cap B = \{1, 5\}$

---

### 3. Function

#### i) Definition

Given set $A$ and set $B$, a function from $A$ to $B$ is a rule which assigns to each member of $A$ precisely one member of $B$.

#### ii) Notation

$f: A \to B$ means that objects in $A$ are mapped to objects in $B$.

#### iii) Linear and Polynomial Functions

- **Linear function:** $f(x) = ax + b$
- **Polynomial function:** $f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$

If $a_n \neq 0$, then $n$ (the highest power of $x$) is the **degree** of the polynomial.

**Degrees:**
- $n = 1$: linear → $f(x) = ax + b$
- $n = 2$: quadratic → $f(x) = a_2 x^2 + a_1 x + a_0$
- $n = 3$: cubic → $f(x) = a_3 x^3 + a_2 x^2 + a_1 x + a_0$

#### iv) Exercise

Suppose $f: \mathbb{R} \to \mathbb{R}$ is given by $f(x) = x^2 + 1$.

- $f(1) = 1^2 + 1 = 2$
- $f(-1) = (-1)^2 + 1 = 2$
- Is there $a$ s.t. $f(a) = 0$?

$$f(a) = 0 \implies a^2 + 1 = 0 \implies a^2 = -1$$

→ No real solution exists.

---

### 4. Inverse Function

#### i) Definition

A function $f: A \to B$ takes an object $x$ as input and returns another object $f(x)$ as output. Suppose the output $f(x)$ was $y$ and we need to find what the input was.

#### ii) Example

If $f: \mathbb{R} \to \mathbb{R}$ is $f(x) = x^2$, take $y = 1$:
- Both $f(1) = 1$ and $f(-1) = 1$

#### iii) Solving for $x$

E.g. $f(x) = x + 2$ and the output $f(x)$ is $y$:

$$y = f(x) = x + 2 \implies x = y - 2$$

→ For each $y$, there is exactly one $x$ s.t. $f(x) = y$ → $f$ has an inverse function.

#### iv) Notation: Inverse Function $f^{-1}$

$$x = f^{-1}(y) \iff f(x) = y$$

When $f(x) = x + 2$:

$$f^{-1}(y) = y - 2 \quad \text{or equivalently} \quad f^{-1}(x) = x - 2$$

#### v) Dummy Variables

$f^{-1}(y) = y - 2$ or $f^{-1}(x) = x - 2$ or $f^{-1}(z) = z - 2$ — the variable name doesn't matter.

#### vi) Exercise

If $f(x) = 3x + 2$, find $f^{-1}(x)$.

Let $y = f(x) = 3x + 2$:

$$y = 3x + 2 \implies x = \frac{y - 2}{3}$$

$$\implies f^{-1}(x) = \frac{x - 2}{3}$$

---

### 5. Composition of Functions

#### i) Definition

$$h(x) = f(g(x))$$

Denoted: $h = f \circ g$

E.g. $f(x) = x^2$, $g(x) = x + 2$, then $h(x) = (x+2)^2$

#### ii) Determine the Output

Suppose $f(x) = x + 1$ and $g(x) = x^4$:

- $h = f \circ g$: $h(x) = f(g(x)) = f(x^4) = x^4 + 1$
- $h = g \circ g$: $h(x) = g(g(x)) = g(x+1) = (x+1)^4$

#### iii) Exercise

If $f(x) = \sqrt{x}$ and $g(x) = x^2 + 1$:

$$f(g(x)) = f(x^2 + 1) = \sqrt{x^2 + 1}$$

$$g(f(x)) = g(\sqrt{x}) = (\sqrt{x})^2 + 1 = x + 1$$

#### iv) Expressing a Function as a Composition

The function $h(x) = (3x^2 + 5)^{15}$ is the composition $f \circ g$ where $f(x) = x^{15}$ and $g(x) = 3x^2 + 5$.

#### v) Exercise

Express $h(x) = \dfrac{1}{1 + x^2}$ as a composition $h = f \circ g$.

**Ans:** $g(x) = 1 + x^2$, $f(x) = \dfrac{1}{x}$

$$h(x) = f(g(x)) = f(1 + x^2) = \frac{1}{1 + x^2}$$

---

### 6. The Graph of a Function

#### i) Definition

The graph of $f(x)$ is the set of all points of the form $(x, f(x))$ in the plane.

#### ii) Straight Line Graph (Linear Function)

- Form: $f(x) = mx + c$
  - Slope (gradient): $m$
  - $y$-intercept: $(0, c)$
- $m > 0$ → slopes upwards
- $m < 0$ → slopes downwards

#### iii) Exercise: Sketch $y = x + 3$ and $y = -3x - 2$

- $y = x + 3$: passes through $(0, 3)$ and $(1, 4)$
- $y = -3x - 2$: passes through $(0, -2)$ and $(1, -5)$

#### iv) Graphs of Quadratic Functions

Form: $y = ax^2 + bx + c$

- $a > 0$: opens upward (U-shape)
- $a < 0$: opens downward ($\cap$-shape)

For $ax^2 + bx + c = 0$:
- $b^2 - 4ac < 0$ → **no** real solution
- $b^2 - 4ac = 0$ → **one** solution: $x = \dfrac{-b}{2a}$
- $b^2 - 4ac > 0$ → **two solutions:**

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

#### v) Polynomial Zeros

- A polynomial of degree $n$ has at most $n$ zeros.
- No general formula for solutions of degree $> 2$.

#### vi) Sketch the curve $y = x^2 + 4x + 3$

$$y = (x+1)(x+3)$$

$$\implies x = -1 \text{ or } x = -3, \quad a > 0 \text{ (U-shape)}$$

---

### 7. Exponential Functions and Logarithms

#### i) Form: $f(x) = a^x$ (for $a > 0$)

$a^x$ is always positive for all $x$.

- If $a > 1$: $a^x \to +\infty$ as $x \to +\infty$; $a^x \to 0$ as $x \to -\infty$
- If $a < 1$: $a^x \to 0$ as $x \to +\infty$; $a^x \to +\infty$ as $x \to -\infty$

#### ii) The Natural Exponential Function

$$f(x) = e^x$$

Graph passes through $(0, 1)$.

#### iii) Power Laws

- $a^{r+s} = a^r \cdot a^s$
- $(a^r)^s = a^{rs}$
- $a^0 = 1$
- The graph of $a^x$ crosses the $y$-axis only at $(0, 1)$

#### iv) Natural Logarithm

$$\ln x = y \quad (x > 0) \iff e^y = x$$

The natural log is the inverse of $e^x$.

$$\ln 1 = 0 \quad \text{because } e^0 = 1$$

#### v) Notation

- $\ln x$: logarithm to the base $e$
- $\log_a x$: logarithm to the base $a$, where $\log_a x = y \iff a^y = x$

#### vi) Properties of Log

$$\ln(ab) = \ln a + \ln b$$

$$\ln\!\left(\frac{a}{b}\right) = \ln a - \ln b$$

$$\ln(a^b) = b \cdot \ln a$$

Also: $e^{\ln x} = x$

#### vii) Exercise: Simplify

- $e^{2\ln 3} = e^{\ln(3^2)} = e^{\ln 9} = 9$

- $\ln 15 - \ln 3 + \ln 2 = \ln\!\left(\dfrac{15}{3}\right) + \ln 2 = \ln 5 + \ln 2 = \ln 10$

---

### 8. Trigonometric Functions

#### i) Measure Angles in Radians

$$180° = \pi, \qquad 60° = \frac{\pi}{3}$$

#### ii) Sin, Cos, Tan Functions

**$\sin x$:** periodic, oscillates between $-1$ and $1$, period $2\pi$

**$\cos x$:** shift of $\sin x$ by $\dfrac{\pi}{2}$ to the left:

$$\cos x = \sin\!\left(x + \frac{\pi}{2}\right)$$

**$\tan x$:**

$$\tan x = \frac{\sin x}{\cos x}$$

#### iii) Special Values

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|---|---|---|---|
| $0$ | $0$ | $1$ | $0$ |
| $\pi/6$ $(30°)$ | $1/2$ | $\sqrt{3}/2$ | $1/\sqrt{3}$ |
| $\pi/4$ $(45°)$ | $1/\sqrt{2}$ | $1/\sqrt{2}$ | $1$ |
| $\pi/3$ $(60°)$ | $\sqrt{3}/2$ | $1/2$ | $\sqrt{3}$ |
| $\pi/2$ $(90°)$ | $1$ | $0$ | undefined |

#### iv) Fundamental Identity

$$\cos^2 x + \sin^2 x = 1$$

#### v) Double-Angle Formulas

$$\sin(2x) = 2\sin x \cos x$$

$$\cos(2x) = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x$$

#### vi) Addition Formulas

$$\sin(\theta + \phi) = \sin\theta\cos\phi + \sin\phi\cos\theta$$

$$\cos(\theta + \phi) = \cos\theta\cos\phi - \sin\theta\sin\phi$$

#### vii) Exercise

- $\sin\!\left(\dfrac{9\pi}{4}\right) = \sin\!\left(2\pi + \dfrac{\pi}{4}\right) = \sin\!\left(\dfrac{\pi}{4}\right) = \dfrac{1}{\sqrt{2}}$

- $\sin\!\left(\dfrac{\pi}{12}\right)$: use $\cos\!\left(\dfrac{\pi}{6}\right) = 1 - 2\sin^2\!\left(\dfrac{\pi}{12}\right)$:

$$\frac{\sqrt{3}}{2} = 1 - 2\sin^2\!\left(\frac{\pi}{12}\right) \implies \sin\!\left(\frac{\pi}{12}\right) = \frac{\sqrt{2 - \sqrt{3}}}{2}$$

---

### 9. Finding the Intersection of 2 Graphs

#### i) Intersection of Straight Lines

E.g. $y = 2x - 1$ and $y = x + 2$:

$$2x - 1 = x + 2 \implies x = 3, \quad y = 5 \implies C(3, 5)$$

#### ii) Exercise

Find the intersection of $y = 2x - 3$ and $y = 2 - \dfrac{x}{2}$:

$$2x - 3 = 2 - \frac{x}{2} \implies \frac{5x}{2} = 5 \implies x = 2, \quad y = 1$$

---

### 10. Application: Supply, Demand and Equilibrium

#### i) Supply and Demand Functions

- Demand function: $q^D(p)$; inverse: $p^D(q)$
- Supply function: $q^S(p)$; inverse: $p^S(q)$
- Assumption: **linear**

#### ii) Example with Linear Supply and Demand

$$\text{(D):} \quad q^D(p) = 20 - 2p$$
$$\text{(S):} \quad q^S(p) = \frac{2}{3}p - 4$$

Find $p^*$ and $q^*$ by setting $(D) = (S)$:

$$20 - 2p = \frac{2}{3}p - 4 \implies 24 = \frac{8}{3}p \implies p^* = 9$$

$$q^* = 20 - 2 \times 9 = 2$$

#### iii) Example with Quadratic Supply and Demand

$$\text{(D):} \quad q = 250 - 4p - p^2$$
$$\text{(S):} \quad q = 2p^2 - 3p - 40$$

Find $p^*$ and $q^*$. Set $(D) = (S)$:

$$250 - 4p - p^2 = 2p^2 - 3p - 40$$
$$\implies 3p^2 + p - 290 = 0$$

$$p = \frac{-1 \pm \sqrt{1 + 3480}}{6} = \frac{-1 \pm \sqrt{3481}}{6} = \frac{-1 \pm 59}{6}$$

Taking the positive root: $p^* = \dfrac{58}{6} = \dfrac{29}{3}$

$$q^* = \frac{1064}{9}$$

#### iv) Exercise

$$\text{(D):} \quad q(p+3) = 4 \implies p = \frac{4}{q} - 3$$
$$\text{(S):} \quad 2q - p + 4 = 0 \implies p = 2q + 4$$

Set $(D) = (S)$:

$$\frac{4}{q} - 3 = 2q + 4 \implies 4 - 2q^2 - 7q = 0 \implies 2q^2 + 7q - 4 = 0$$

$$q = \frac{-7 \pm 9}{4} \implies q^* = \frac{1}{2}, \quad p^* = 2 \times \frac{1}{2} + 4 = 5$$

---

## Module 2: The Derivative

### 1. The Derivative

#### i) Average Rate of Change

The average rate of change of $f$ from $x = a$ to $x = a + h$ is:

$$\frac{f(a+h) - f(a)}{h}$$

#### ii) Derivative as Instantaneous Rate of Change

The derivative of $f$ at $a$ is:

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

**Notation:** $f'(x)$ or $\dfrac{dy}{dx}$

#### iii) Finding Derivatives from First Principles

E.g. $f(x) = x^2$:

$$\frac{f(x+h) - f(x)}{h} = \frac{(x+h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h$$

$$\lim_{h \to 0}(2x + h) = 2x \implies f'(x) = 2x$$

#### iv) Exercise

$f(x) = 3x + 2$:

$$\frac{f(x+h) - f(x)}{h} = \frac{3h}{h} = 3 \implies f'(x) = 3$$

---

### 2. Calculating Derivatives

#### i) Standard Derivatives

| $f(x)$ | $f'(x)$ |
|---|---|
| $x^k$ | $k x^{k-1}$ |
| $a^x$ | $a^x \ln a$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $1/x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |

#### ii) The Sum, Product, and Quotient Rules

**Sum Rule:** $(f + g)' = f' + g'$

**Product Rule:** $(fg)' = f'g + fg'$

**Quotient Rule:**

$$\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$$

#### iii) Exercise

- $f(x) = x^2 \sin x \implies f'(x) = 2x \sin x + x^2 \cos x$

- $g(x) = (x^2 + 1)\ln x \implies g'(x) = 2x \ln x + \dfrac{x^2 + 1}{x}$

- $g(x) = \dfrac{\sin x}{x} \implies g'(x) = \dfrac{x\cos x - \sin x}{x^2}$

#### iv) The Chain Rule

If $f(x) = s(n(x))$, then:

$$\boxed{f'(x) = s'(n(x)) \cdot n'(x)}$$

**Special cases:**

- $f(x) = (ax + b)^n \implies f'(x) = an(ax+b)^{n-1}$

- $f(x) = \ln(g(x)) \implies f'(x) = \dfrac{g'(x)}{g(x)}$

#### v) Logarithmic Differentiation

E.g. $f(x) = x^x$:

Take $\ln$: $\ln f = x \ln x$

Differentiate: $\dfrac{f'}{f} = \ln x + 1$

$$\implies f'(x) = (1 + \ln x) \cdot x^x$$

#### vi) Exercise

- $f(x) = (3x + 17)^{15} \implies f'(x) = 45(3x+17)^{14}$

- $f(x) = \sqrt{x^2 + 1} \implies f'(x) = \dfrac{x}{\sqrt{x^2+1}}$

- $g(x) = \ln(x^2 + 2x + 5) \implies g'(x) = \dfrac{2x + 2}{x^2 + 2x + 5}$

---

## Module 3: Curve Sketching and Optimisation

### 1. Critical Points

#### i) Types of Critical (Stationary) Points

If $f'(c) = 0$, then $c$ is a **critical point** of $f$.

- **Local max:** $f(x) \leq f(c)$ for all $x$ near $c$
- **Local min:** $f(x) \geq f(c)$ for all $x$ near $c$
- **Inflexion point:** neither max nor min

#### ii) To Find Critical Points

Solve $f'(x) = 0$.

#### iii) Classify Critical Points — Sign Table

E.g. $f(x) = 2x^3 - 9x^2 + 1$:

$$f'(x) = 6x^2 - 18x = 6x(x-3) = 0 \implies x = 0 \text{ or } x = 3$$

| $x$ | $(-\infty, 0)$ | $0$ | $(0, 3)$ | $3$ | $(3, \infty)$ |
|---|---|---|---|---|---|
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f(x)$ | $\nearrow$ | local max | $\searrow$ | local min | $\nearrow$ |

#### iv) Second Derivative Test

- $f'(a) = 0$ and $f''(a) < 0$ → **local max**
- $f'(a) = 0$ and $f''(a) > 0$ → **local min**
- $f''(a) = 0$ → **inconclusive** (test with sign table)

#### v) Exercise

**1.** $f(x) = x^3 - 6x^2 + 11x - 6$

$$f'(x) = 3x^2 - 12x + 11 = 0 \implies x = \frac{12 \pm 2\sqrt{5}}{6}$$

$$f''(x) = 6x - 12$$

- $f''\!\left(\dfrac{12 + 2\sqrt{5}}{6}\right) = 2\sqrt{5} > 0 \implies$ **local min**

- $f''\!\left(\dfrac{12 - 2\sqrt{5}}{6}\right) = -2\sqrt{5} < 0 \implies$ **local max**

**2.** $f(x) = xe^{-x^2}$

$$f'(x) = e^{-x^2}(1 - 2x^2) = 0 \implies x = \pm \frac{1}{\sqrt{2}}$$

$$f''(x) = e^{-x^2}(4x^3 - 6x)$$

- $f''\!\left(\dfrac{1}{\sqrt{2}}\right) < 0 \implies x = \dfrac{1}{\sqrt{2}}$ is a **local max**

- $f''\!\left(-\dfrac{1}{\sqrt{2}}\right) > 0 \implies x = -\dfrac{1}{\sqrt{2}}$ is a **local min**

---

### 2. Curve Sketching and Optimisation

#### i) Basic Ingredients of Curve Sketching

To sketch $y = f(x)$:
1. $x$-intercepts: solve $f(x) = 0$
2. $y$-intercept: compute $f(0)$
3. Critical points: solve $f'(x) = 0$
4. Nature of critical points: use $f''(x)$ or sign table
5. Limit behaviour: $f(x)$ as $x \to \pm\infty$

**For polynomials:** the highest-degree term dominates as $x \to \pm\infty$.

- Even degree ($x^n$, $n$ even): $f(x) \to +\infty$ for both $x \to +\infty$ and $x \to -\infty$
- Odd degree ($x^n$, $n$ odd): $f(x) \to +\infty$ as $x \to +\infty$; $f(x) \to -\infty$ as $x \to -\infty$

**Note:** If a function has both exponential and polynomial terms, the exponential dominates. E.g., $x^2 e^{-x} \to 0$ as $x \to +\infty$.

#### ii) Optimising a Function on an Interval $[a, b]$

1. Find all critical points $c$ in $[a, b]$
2. Compare $f(c)$, $f(a)$, and $f(b)$

#### iii) Exercise: Sketch $f(x) = x^3 - 6x^2 + 11x - 6$

- $y$-intercept: $f(0) = -6$
- Critical points: $x = \dfrac{12 \pm 2\sqrt{5}}{6}$
- Factorisation (testing $x = 1$):

$$f(x) = (x-1)(x^2 - 5x + 6) = (x-1)(x-2)(x-3)$$

- $x$-intercepts: $x = 1, 2, 3$
- Limit: $x^3 \to +\infty$ as $x \to +\infty$; $x^3 \to -\infty$ as $x \to -\infty$

---

## Module 4: Functions of 2 Variables and Partial Derivatives

### 1. Modelling Consumer Preferences

#### i) Consumer Choice

- Bundle $(4, 3)$ vs. bundle $(3, 2)$: $(4, 3) \succ (3, 2)$
- If bundles are rated equally: **indifferent**

#### ii) Preference Rules

- If preferred to: choose accordingly
- If indifferent: either may be chosen

---

### 2. Utility

#### i) Notation: $u(x, y)$

Bundle $(x, y)$ is preferred to $(x', y')$ precisely when $u(x, y) > u(x', y')$.

**E.g.** $u(x, y) = x + y$:
- $u(3, 5) = 8 > u(4, 2) = 6$ → prefer $(3, 5)$

$u(x, y) = 3x + y$ (prefer $x$ more):
- $u(4, 2) = 14 = u(3, 5) = 14$ → **indifferent**

#### ii) Function of 2 Variables

$$z = f(x, y)$$

---

### 3. Function of 2 Variables

#### i) Key: 2 inputs, independent of each other

#### ii) Visual: 3-dimensional graph of all points $(x, y, f(x, y))$

#### iii) Functions of More Than 2 Variables

Input: $n$ independent numbers $(x_1, x_2, \ldots, x_n)$

**E.g.** $f(x, y, z) = x^2 + y^2 + z^2$

#### iv) Exercise

$z = \sqrt{x^2 + y^2} \implies z^2 = x^2 + y^2$ → equation of a circle → surface is a **cone**

---

### 4. The Production Function

#### i) Model of the Firm

- Depends on 2 factors: capital $k$ and labour $l$
- E.g. $q(k, l) = k + l$
- $q(k, l) = \min\{5k, 10l\}$

#### ii) Cobb-Douglas Production Function

$$\boxed{q(k, l) = A k^\alpha l^\beta}$$

where $A$, $\alpha$, $\beta$ are positive constants.

#### iii) Returns to Scale

- $\alpha + \beta > 1$ → Increasing returns to scale
- $\alpha + \beta = 1$ → Constant returns to scale
- $\alpha + \beta < 1$ → Decreasing returns to scale

#### iv) Marginal Product

Increase one factor while keeping the other constant.

---

### 5. Partial Derivatives

#### i) Definition

Fix one variable and differentiate with respect to the other.

**Notation:** $\dfrac{\partial f}{\partial x}$ or $f_x$ (partial derivative w.r.t. $x$)

**To calculate:** treat other variables as constants.

#### ii) Logarithmic Differentiation for Partial Derivatives

**E.g.** $f(x, y) = y^{x^2}$

Take log: $\ln f = x^2 \ln y$

$$\frac{\partial \ln f}{\partial x} = \frac{1}{f} \cdot \frac{\partial f}{\partial x} = 2x \ln y$$

$$\implies \frac{\partial f}{\partial x} = 2x \ln y \cdot f = 2x \ln y \cdot y^{x^2}$$

#### iii) The Chain Rule for Partial Differentiation

For $f(t) = g(x(t), y(t))$:

$$\boxed{\frac{df}{dt} = \frac{\partial g}{\partial x}\frac{dx}{dt} + \frac{\partial g}{\partial y}\frac{dy}{dt}}$$

**E.g.** $f(x, y) = 2xy$, $x(t) = 3 + 2t$, $y(t) = 10 - 0.2t$:

$$\frac{df}{dt} = 2y \cdot 2 + 2x \cdot (-0.2) = 4y - 0.4x$$

$$= 4(10 - 0.2t) - 0.4(3 + 2t) = 40 - 0.8t - 1.2 - 0.8t = 38.8 - 1.6t$$

#### iv) Implicit Differentiation

If $g(x, y) = c$ defines $y$ as a function of $x$:

$$\boxed{\frac{dy}{dx} = -\frac{\partial g/\partial x}{\partial g/\partial y}}$$

**E.g.** $g(x, y) = x^2 y^3 - 6x^2 y^2 + 2y = 1$

$$\frac{\partial g}{\partial x} = 2xy^3 - 12xy^2, \qquad \frac{\partial g}{\partial y} = 3x^2y^2 - 12x^2y + 2$$

$$\implies \frac{dy}{dx} = -\frac{2xy^3 - 12xy^2}{3x^2y^2 - 12x^2y + 2}$$

At $x = \dfrac{1}{2}$, solving gives $y = 2$, and substituting: $\dfrac{dy}{dx} = 6$

---

### 6. Exercise

**1.** $f(x, y) = x^3 y - \dfrac{x}{y}$

$$\frac{\partial f}{\partial x} = 3x^2 y - \frac{1}{y}$$

$$\frac{\partial f}{\partial y} = x^3 + \frac{x}{y^2}$$

**2.** $f(x, y) = x^{5/4} y^{1/4}$

$$\frac{\partial f}{\partial x} = \frac{5}{4} x^{1/4} y^{1/4}$$

$$\frac{\partial f}{\partial y} = \frac{1}{4} x^{5/4} y^{-3/4}$$

**3.** $f(x, y) = x^2 y$, $x(t) = 2 + 3t$, $y(t) = t^3 + 1$

$$\frac{df}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt} = 2xy \cdot 3 + x^2 \cdot 3t^2$$

$$= 6(2+3t)(t^3+1) + 3t^2(2+3t)^2$$

---

### 7. Application: Marginal Product

**Marginal product of capital:** $\dfrac{\partial q}{\partial k}$

**Marginal product of labour:** $\dfrac{\partial q}{\partial l}$

**For Cobb-Douglas** $q(k, l) = Ak^\alpha l^\beta$:

$$\frac{\partial q}{\partial k} = \alpha A k^{\alpha-1} l^\beta$$

$$\frac{\partial q}{\partial l} = \beta A k^\alpha l^{\beta-1}$$

**Diminishing marginal product:** second partial $< 0$

---

## Module 5: Critical Points of Two-Variable Functions

### 1. Critical Points

#### i) Definition

$(a, b)$ is a **critical (stationary) point** of $f(x, y)$ if:

$$\frac{\partial f}{\partial x} = 0 \quad \text{and} \quad \frac{\partial f}{\partial y} = 0$$

#### ii) Local Maxima and Minima

- $f(x, y) = 2x^2 + 2y^2$ → local minimum at $(0, 0)$
- $f(x, y) = e^{-(x^2 + y^2)}$ → local max at $(0, 0)$

#### iii) Saddle Points

A critical point that is neither a local max nor local min is a **saddle point**.

E.g. $f(x, y) = x^2 - y^2$ → saddle point at $(0, 0)$

#### iv) Exercise

$f(x, y) = 6 + 4x - 3x^2 + 4y + 2xy - 3y^2$

$$f_x = 4 - 6x + 2y = 0$$
$$f_y = 4 + 2x - 6y = 0$$

Solving: $y = 1$, $x = 1$ → critical point at $(1, 1)$

---

### 2. Determining the Nature of Critical Points

#### i) Second-Order Partial Derivatives

$$f_{xx} = \frac{\partial^2 f}{\partial x^2}, \qquad f_{yy} = \frac{\partial^2 f}{\partial y^2}, \qquad f_{xy} = f_{yx} = \frac{\partial^2 f}{\partial x \partial y}$$

#### ii) Hessian Test

At a critical point $(a, b)$, define:

$$H = f_{xx} \cdot f_{yy} - (f_{xy})^2$$

- $H > 0$ and $f_{xx} < 0$ → **local max**
- $H > 0$ and $f_{xx} > 0$ → **local min**
- $H < 0$ → **saddle point**
- $H = 0$ → **inconclusive**

#### iii) Exercise

**1.** $f(x, y) = x^2 - 2xy + 2y^2 - 2y + 2$

$$f_x = 2x - 2y = 0 \implies x = y$$
$$f_y = -2x + 4y - 2 = 0 \implies y = 1, \quad x = 1$$

$$f_{xx} = 2, \quad f_{xy} = -2, \quad f_{yy} = 4$$

$$H = 2 \cdot 4 - (-2)^2 = 8 - 4 = 4 > 0, \quad f_{xx} = 2 > 0 \implies \textbf{local min}$$

**2.** $f(x, y) = \dfrac{4}{x} - \dfrac{2x}{y} + y$ (re-reading from notes)

Setting partial derivatives to zero:

$$f_x = -\frac{4}{x^2} - \frac{2}{y} = 0 \implies y = -\frac{x^2}{2}$$

$$f_y = \frac{2x}{y^2} + 1 = 0$$

Solving: $y = -2$, $x = -2$ → critical point at $(-2, -2)$

$$H > 0 \text{ and } f_{xx} < 0 \implies \textbf{local max}$$
