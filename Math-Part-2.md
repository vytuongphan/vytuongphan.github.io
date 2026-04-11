# Math 1 — Part 2

## Module 1: Profit Maximization

---

### 1. Profit Maximization

**What level of production will maximize the profit?**

#### i) Total Cost

- Denote $TC(q)$ → depends on $q$
- E.g. $TC(q) = \underbrace{1000}_{\text{fixed cost}} + \underbrace{5q}_{\text{each unit of good costs \$5 to produce}}$

$$TC(q) = 1000 + 2q + 0.06q^2$$

→ Reflects marginal cost: the cost of producing an additional unit of good increases with production.

$$TC(q) = 500 + q + e^q$$

- **Marginal Cost:** $MC = TC'(q)$

#### ii) Fixed and Variable Costs

$$\boxed{TC(q) = FC + VC(q)}$$

- **Fixed cost** ($FC$) is the cost of producing nothing: $FC = TC(0)$ → $FC$ is not a function of $q$
- **Variable cost** $VC(q)$:

$$VC(q) = TC(q) - FC$$

- **Average cost** ($AC$): $\displaystyle AC = \frac{TC}{q}$
- **Average variable cost** ($AVC$): $\displaystyle AVC = \frac{VC}{q}$

#### iii) Examples

**E.g. 1:** $TC(q) = 1000 + 5q$

$$FC = TC(0) = 1000 + 5 \cdot 0 = 1000$$
$$VC(q) = TC - FC = 1000 + 5q - 1000 = 5q$$

**E.g. 2:** $TC(q) = 1000 + 2q + 0.06q^2$

$$FC = TC(0) = 1000$$
$$VC = TC - FC = 1000 + 2q + 0.06q^2 - 1000 = 2q + 0.06q^2$$

**E.g. 3:** $TC(q) = 500 + q + e^q$

$$FC = TC(0) = 500 + 0 + e^0 = 500 + 1 = 501$$
$$VC = TC - FC = 500 + q + e^q - 501 = q + e^q - 1$$

#### iv) Firm's Profit

$$\text{Profit} = \text{Total Revenue} - \text{Total Cost}$$

$$\boxed{\Pi = TR - TC}$$

$$TR = \text{selling price} \times \text{quantity sold} = pq$$
$$MR = TR'(q)$$

#### v) Monopoly

- A monopoly is a firm that is the only producer of the good it sells.
- The $q$ in the demand equation is the total quantity of the good, which means this firm's production level.
- E.g. Suppose a firm is the only producer of its good and the demand equation is $q = 500 - 10p$. The selling price is $p = 50 - 0.1q$. So the total revenue of the firm is:

$$TR = pq = (50 - 0.1q)q = 50q - 0.1q^2$$

#### vi) Example of Profit Function

- Firm is monopoly
- $(D)$: $q = 500 - 10p$
- $TC(q) = 1000 + 2q + 0.06q^2$
- Price: $p = 50 - 0.1q$, so $TR(q) = pq = 50q - 0.1q^2$

$$\Pi(q) = TR(q) - TC(q)$$
$$= 50q - 0.1q^2 - 1000 - 2q - 0.06q^2$$
$$= 48q - 0.16q^2 - 1000$$

**Graph of** $\Pi(q) = 48q - 0.16q^2 - 1000$:

> ⚠️ **Note:**
> - Profit is negative to start with (nothing produced → $q = 0 \Rightarrow \Pi = -1000$)
> - As production increases, profit starts to rise and becomes positive
> - At the point where $\Pi = 0$ is called the **break-even point**
> - Profit continues to rise to a max value then decreases

---

### 2. How to Maximize Profit of a Firm

$$\Pi(q) = TR(q) - TC(q)$$

To maximize: $\Pi'(q) = 0$

$$\Pi'(q) = TR'(q) - TC'(q) = 0$$
$$\Rightarrow TR'(q) = TC'(q)$$
$$\Rightarrow MR(q) = MC(q)$$

#### i) Exercise: Maximize a Firm

**1.** A firm has fixed cost $= 10$ and its VC function:

$$VC = \frac{1}{3}q^3 - 2q^2 + 3q$$

It's the only producer of its good, for which the inverse demand function is $p(q) = 11 - q$. Find firm's profit and determine the value of $q$ which maximizes its profit.

**Ans:**

$$TC(q) = FC + VC(q) = 10 + \frac{1}{3}q^3 - 2q^2 + 3q$$

Since the firm is monopoly:

$$TR(q) = pq = (11 - q)q = 11q - q^2$$

Firm's profit:

$$\Pi(q) = TR(q) - TC(q)$$
$$= 11q - q^2 - 10 - \frac{1}{3}q^3 + 2q^2 - 3q$$
$$= 8q + q^2 - \frac{1}{3}q^3 - 10$$

Maximize firm's profit: $\Pi'(q) = 0$

$$\Rightarrow 9 + 2q - q^2 = 0$$
$$\Rightarrow q^2 - 2q - 8 = 0$$
$$\Rightarrow q = \frac{2 \pm \sqrt{4 - 4(-8)}}{2} = \frac{2 \pm 6}{2} \Rightarrow \begin{cases} q = 4 \\ q = -2 \text{ (invalid)} \end{cases}$$

$$\Rightarrow q = 4$$

Check if $\Pi(q)$ maximizes at $q = 4$:

$$\Pi''(q) = 2 - 2q \Rightarrow \Pi''(4) = -6 < 0$$

$\Rightarrow q = 4$ maximizes profit.

**2.** A monopoly firm with cost function $TC(q) = q + 0.02q^2$, $(D)$: $q + 20p = 300$. Find: inverse demand function, profit function, optimal value $q_m$ and the max profit, corresponding price.

**Ans:**

Inverse demand function: $p^{(D)} = \dfrac{300 - q}{20} = 15 - \dfrac{q}{20}$

Total revenue (firm is a monopoly):

$$TR(q) = pq = q\!\left(15 - \frac{q}{20}\right) = 15q - \frac{q^2}{20}$$

Profit function:

$$\Pi(q) = TR(q) - TC(q) = 15q - \frac{q^2}{20} - q - 0.02q^2 = 14q - 0.07q^2$$

Profit maximization: $\Pi'(q) = 0$

$$14 - 0.14q = 0 \Rightarrow q = 100$$

Check: $\Pi''(q) = -0.14 < 0 \Rightarrow q = 100$ maximizes profit.

$$p = 15 - \frac{100}{20} = 15 - 5 = 10\ (\$)$$

$$\Pi(100) = 14 \cdot 100 - 0.07 \cdot 100^2 = 700\ (\$)$$

---

### 3. Profit Maximization with 2 Goods

#### i) Setup

Suppose a firm makes 2 products, $X$ and $Y$, and that $p_x$ and $p_y$ are the selling prices of one unit of $X$ and $Y$. Total revenue is:

$$TR(X, Y) = x p_x + y p_y$$

The profit function is:

$$\Pi(x, y) = TR(X, Y) - TC(X, Y) = x p_x + y p_y - TC(x, y)$$

#### ii) Example

A monopoly manufactures 2 goods, $X$ and $Y$, with demand functions:

$$x = 12 - p_x \quad;\quad y = 18 - p_y$$

The firm's total cost function is $TC(x, y) = x^2 + y^2 + 2xy$. We have:

As firm is monopoly: $p_x = 12 - x$ and $p_y = 18 - y$

$$\Pi(x, y) = x p_x + y p_y - TC(x, y)$$
$$= x(12 - x) + y(18 - y) - x^2 - y^2 - 2xy$$
$$= 12x - x^2 + 18y - y^2 - x^2 - y^2 - 2xy$$
$$= 12x + 18y - 2x^2 - 2y^2 - 2xy$$

Profit maximization:

$$\begin{cases} \Pi'_x = 0 \\ \Pi'_y = 0 \end{cases} \Rightarrow \begin{cases} 12 - 4x - 2y = 0 \\ 18 - 4y - 2x = 0 \end{cases}$$

$$\Rightarrow \begin{cases} 6 = 2x + y \\ 9 = 2y + x \end{cases} \Rightarrow \begin{cases} x = 1 \\ y = 4 \end{cases}$$

Check:

$$\Pi''_{xx} = -4 \quad;\quad \Pi''_{xy} = -2 \quad;\quad \Pi''_{yy} = -4$$

$$H(x,y) = \Pi''_{xx} \cdot \Pi''_{yy} - (\Pi''_{xy})^2 = (-4)(-4) - (-2)^2 = 16 - 4 = 12 > 0$$

Thus $H(x, y) > 0$ and $\Pi''_{xx} < 0$ $\Rightarrow (1, 4)$ is a **maximum**.

$$\Pi_{\max} = \Pi(1, 4) = 42$$

#### iii) Exercise

A firm is the only producer of 2 goods, $X$ and $Y$. If the firm produces quantities $x$ and $y$ of $X$ and $Y$ respectively, then the corresponding prices $p_x$ and $p_y$ are related by the equations:

$$p_y - p_x + 13 - 6x = 0 \quad (1)$$
$$p_x - 4p_y + 26 - 6y = 0 \quad (2)$$

$TC(x, y) = 2x + y$. Find an expression in terms of $x$ and $y$ for the firm's profit function. Determine the quantities $x$ and $y$ that maximise the firm's profit.

**Ans:** Taking $(1) + (2)$:

$$p_y - p_x + 13 - 6x + p_x - 4p_y + 26 - 6y = 0$$
$$\Rightarrow -3p_y + 39 - 6x - 6y = 0$$
$$\Rightarrow -p_y + 13 - 2x - 2y = 0$$
$$\Rightarrow p_y = 13 - 2x - 2y$$

Plug in $(1)$:

$$13 - 2x - 2y - p_x + 13 - 6x = 0$$
$$\Rightarrow p_x = 26 - 8x - 2y$$

Firm's profit function:

$$\Pi(x, y) = x p_x + y p_y - TC(x, y)$$
$$= x(26 - 8x - 2y) + y(13 - 2x - 2y) - 2x - y$$
$$= 26x - 8x^2 - 2xy + 13y - 2xy - 2y^2 - 2x - y$$
$$= 24x + 12y - 8x^2 - 2y^2 - 4xy$$

$$\begin{cases} \Pi'_x = 0 \\ \Pi'_y = 0 \end{cases} \Rightarrow \begin{cases} 24 - 16x - 4y = 0 \\ 12 - 4y - 4x = 0 \end{cases} \Rightarrow \begin{cases} x = 1 \\ y = 2 \end{cases}$$

We have: $\Pi''_{xx} = -16$, $\Pi''_{xy} = -4$, $\Pi''_{yy} = -4$

$$\Rightarrow H(x, y) > 0 \text{ and } \Pi''_{xx} < 0 \Rightarrow (1, 2) \text{ is a maximum}$$

---

## Module 2: Integration

---

### 1. Finding Total Cost from Marginal and Fixed Costs

Since $MC$ is $TC'(q)$, can we find $TC$ given $MC$?

Suppose that $MC = q$, thus:

$$TC'(q) = MC = q$$

Standard form: $\dfrac{d\, x^n}{dx} = n\, x^{n-1}$

So if we take $n = 2$: $\dfrac{d\, x^2}{dx} = 2x$, and hence:

$$\frac{d}{dx}\!\left(\frac{1}{2}x^2\right) = x$$

So a possible answer is $TC(q) = \dfrac{1}{2}q^2$. But $TC(q) = \dfrac{1}{2}q^2 + 1$ could also be an answer.

Or in general: $TC(q) = \dfrac{1}{2}q^2 + c$ for fixed constant $c$.

Any of these could give $TC'(q) = q = MC$.

Suppose in addition to $MC$, we also know $FC = 10$. Since $FC = TC(0)$, as $TC(q) = \dfrac{1}{2}q^2 + c$:

$$FC = TC(0) = c = 10 \Rightarrow TC(q) = \frac{1}{2}q^2 + 10$$

**E.g.:** $MC = 1 + 2q + e^q$ and $FC = 5$

$$\Rightarrow TC(q) = q + q^2 + e^q + C$$
$$FC = TC(0): 1 + C = 5 \Rightarrow C = 4$$
$$\Rightarrow TC(q) = q + q^2 + e^q + 4$$

---

### 2. Introduction to Integration

#### i) The Idea of Integration

- Integration is, in essence, the reverse process to differentiation and has a number of applications in economics and related subjects.
- Suppose the function $f$ is given, and the function $F$ is such that $F'(x) = f(x)$. Then we say that $F$ is an **anti-derivative** of $f$.
- E.g. $\dfrac{x^4}{4}$ is an anti-derivative of $x^3$. Also $\dfrac{x^4}{4} + 5$ is an anti-derivative of $x^3$.
- Any 2 anti-derivatives of a given function $f$ differ only by a constant. If $G$ and $F$ are 2 anti-derivatives of the same function $f$, then there is some constant such that:

$$\forall\, x,\quad G(x) = F(x) + c$$

- The general form is called the **(indefinite) integral** of $f(x)$, denoted by $\displaystyle\int f(x)\, dx$.

E.g.:

$$\int x^3\, dx = \frac{x^4}{4} + C$$

The process of finding the indefinite integral of $f$ is usually known as **integrating** $f$, and $f$ is known as the **integrand**.

#### ii) Standard Integrals

| $f(x)$ | $\displaystyle\int f(x)\, dx$ |
|---|---|
| $x^n \quad (n \neq -1)$ | $\dfrac{x^{n+1}}{n+1} + C$ |
| $\dfrac{1}{x}$ | $\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |

**Rules:**

$$\int (f(x) + g(x))\, dx = \int f(x)\, dx + \int g(x)\, dx$$

$$\int k\, f(x)\, dx = k \int f(x)\, dx \quad \text{for constant } k$$

#### iii) Definite Integrals

Let $f$ be a function with an anti-derivative $F$. The **definite integral** of the function $f$ over the interval $[a, b]$ is defined to be:

$$\boxed{\int_a^b f(x)\, dx = F(b) - F(a)}$$

Any anti-derivative $G(x)$ of $f$ is of the form $G(x) = F(x) + c$ for some constant $c$:

$$G(b) - G(a) = (F(b) + c) - (F(a) + c) = F(b) - F(a)$$

E.g. The definite integral of $x^4$ over $[0, 1]$ is:

$$\int_0^1 x^4\, dx = \left[\frac{x^5}{5}\right]_0^1 = \frac{1}{5}$$

#### iv) Exercise

- Integrate the function $x^5$:

$$\int x^5\, dx = \frac{x^6}{6} + C$$

- If $f'(x) = x^2 + 2\sin x$ and $f(0) = 1$, what is the function?

$$f(x) = \int f'(x)\, dx = \int (x^2 + 2\sin x)\, dx = \int x^2\, dx + 2\int \sin x\, dx = \frac{x^3}{3} - 2\cos x + C$$

$$f(0) = 1 \Rightarrow 0 - 2 + C = 1 \Rightarrow C = 3$$

$$\Rightarrow f(x) = \frac{x^3}{3} - 2\cos x + 3$$

- Calculate $\displaystyle\int_0^2 x^2\, dx$:

$$\int_0^2 x^2\, dx = \left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3}$$

- Determine $\displaystyle\int_{-1}^{1} e^t\, dt$:

$$\int_{-1}^{1} e^t\, dt = \left[e^t\right]_{-1}^{1} = e - e^{-1} = e - \frac{1}{e} = \frac{e^2 - 1}{e}$$

---

### 3. Application: Finding Total Cost from Marginal and Fixed Costs

**Example:** $MC = 1 + 2q + e^q$ and $FC = 5$. Find $TC$.

$$TC = \int MC\, dq = \int (1 + 2q + e^q)\, dq = q + q^2 + e^q + C$$

$$FC = TC(0) = e^0 + C = 1 + C = 5 \Rightarrow C = 4$$

$$\Rightarrow TC(q) = q + q^2 + e^q + 4$$

#### i) Finding Profit from MC, FC and MR

- The total revenue is the integral of the marginal revenue:

$$TR(q) = \int MR(q)\, dq \quad \text{and} \quad TR(0) = 0$$

#### ii) Example

$FC = 10$, $MC = 5q^4 - 2q - 15q^2$, $MR = 20 - 2q$. Find the firm's profit function and determine $q^*$ that maximizes profit.

**Ans:**

$$TC(q) = \int MC\, dq = \int (5q^4 - 2q - 15q^2)\, dq = q^5 - q^2 - 5q^3 + C$$

Since $FC = 10 \Rightarrow TC(0) = 10 \Rightarrow C = 10$

$$\Rightarrow TC(q) = q^5 - q^2 - 5q^3 + 10$$

$$TR(q) = \int MR\, dq = \int (20 - 2q)\, dq = 20q - q^2 + C$$

$$TR(0) = 0 \Rightarrow c = 0 \Rightarrow TR(q) = 20q - q^2$$

Profit function:

$$\Pi = TR - TC = 20q - q^2 - q^5 + q^2 + 5q^3 - 10 = -q^5 + 5q^3 + 20q - 10$$

To maximize profit: $\Pi'_q = 0$

$$-5q^4 + 15q^2 + 20 = 0 \Rightarrow q^4 - 3q^2 - 4 = 0$$

Set $q^2 = x$:

$$-5x^2 + 15x + 20 = 0 \Rightarrow (-5x + 20)(x + 1) = 0 \Rightarrow -5(x - 4)(x + 1) = 0$$

$$\Rightarrow x = 4 \text{ or } q^2 = 4 \Rightarrow q = 2 \quad (q > 0)$$

#### iii) Exercise

$MC = 20 + 4q$, $FC = 20$, $(D)$: $p + 4q = 40$. Find $TR(q)$, $\Pi(q)$, $q^*$.

$$TR(q) = pq = (40 - 4q)q = 40q - 4q^2$$

$$TC(q) = \int MC\, dq = \int (20 + 4q)\, dq = 20q + 2q^2 + C$$

$$FC = TC(0) \Rightarrow C = 20 \Rightarrow TC(q) = 20q + 2q^2 + 20$$

$$\Pi(q) = TR(q) - TC(q) = 40q - 4q^2 - 20q - 2q^2 - 20 = -6q^2 + 20q - 20$$

To maximize profit: $\Pi'(q) = 0$

$$-12q + 20 = 0 \Rightarrow q = \frac{-20}{-12} = \frac{5}{3}$$

---

### 4. Integration by Substitution

We have standard integrals, but not enough.

**E.g. 1:** Determine $\displaystyle\int x\, e^{x^2}\, dx$

Let $u = x^2 \Rightarrow \dfrac{du}{dx} = 2x \Rightarrow du = 2x\, dx$

$$\text{So } I = \int x\, e^u\, dx = \frac{1}{2}\int e^u\, du = \frac{1}{2}e^u + C$$

Revert to $x$: $I = \dfrac{1}{2}e^{x^2} + C$

**E.g. 2:** $I = \displaystyle\int (3x + 15)^{12}\, dx$

Let $3x + 15 = u \Rightarrow \dfrac{du}{dx} = 3 \Rightarrow du = 3\, dx$

$$\Rightarrow I = \frac{1}{3}\int u^{12}\, du = \frac{1}{3} \cdot \frac{u^{13}}{13} + C = \frac{u^{13}}{39} + C = \frac{(3x+15)^{13}}{39} + C$$

**E.g. 3:** $I = \displaystyle\int x(3x+5)^7\, dx$

Let $u = 3x + 5 \Rightarrow \dfrac{du}{dx} = 3 \Rightarrow du = 3\, dx$, and $x = \dfrac{u - 5}{3}$

$$\Rightarrow I = \frac{1}{3}\int \frac{u-5}{3}\, u^7\, du = \frac{1}{9}\int (u^8 - 5u^7)\, du$$

$$= \frac{1}{9}\left(\frac{u^9}{9} - \frac{5u^8}{8}\right) + C = \frac{u^9}{81} - \frac{5u^8}{72} + C$$

**Substitution for definite integrals:**

$$\int_{x=a}^{x=b} f(x)\, dx = \int_{u=\alpha}^{u=\beta} f(x(u))\, x'(u)\, du$$

where $x(\alpha) = a$ and $x(\beta) = b$.

**Exercise:**

**(a)** Determine $\displaystyle\int x(2x^2 + 2)^{1/2}\, dx$

Let $u = 2x^2 + 2 \Rightarrow \dfrac{du}{dx} = 4x \Rightarrow du = 4x\, dx$

$$\Rightarrow I = \frac{1}{4}\int u^{1/2}\, du = \frac{1}{4} \cdot \frac{u^{3/2}}{3/2} + C = \frac{1}{6}u^{3/2} + C = \frac{1}{6}(2x^2+2)^{3/2} + C$$

**(b)** Determine $H = \displaystyle\int x\sqrt{x-1}\, dx$

Let $u = \sqrt{x-1} \Rightarrow \dfrac{du}{dx} = \dfrac{1}{2\sqrt{x-1}} = \dfrac{1}{2u} \Rightarrow du = \dfrac{dx}{2u} \Rightarrow dx = 2u\, du$

$$u^2 = x - 1 \Rightarrow x = u^2 + 1$$

$$H = \int (u^2 + 1)\cdot u \cdot 2u\, du = \int (2u^4 + 2u^2)\, du = 2\left(\frac{u^5}{5} + \frac{u^3}{3}\right) + C$$

$$= \frac{2}{5}u^5 + \frac{2}{3}u^3 + C = \frac{2}{5}(x-1)^{5/2} + \frac{2}{3}(x-1)^{3/2} + C$$

**(c)** Determine $G = \displaystyle\int_0^1 \frac{x+2}{x^2+4x+5}\, dx$

Let $u = x^2 + 4x + 5 \Rightarrow \dfrac{du}{dx} = 2x + 4 = 2(x + 2)$

$$\Rightarrow G = \frac{1}{2}\int_5^{10} \frac{du}{u} = \frac{1}{2}\Big[\ln u\Big]_5^{10} = \frac{1}{2}(\ln 10 - \ln 5) = \frac{1}{2}\ln 2$$

---

### 5. Integration by Parts

We have:

$$\int u'(x)\, v(x)\, dx + \int u(x)\, v'(x)\, dx = u(x)\, v(x)$$

$\Rightarrow$ Rule for integration by parts:

$$\int u'(x)\, v(x)\, dx = u(x)\, v(x) - \int u(x)\, v'(x)\, dx$$

Or in shorthand form:

$$\boxed{\int f\, dg = fg - \int g\, df}$$

**E.g.:** Consider the integral $\displaystyle\int x \ln x\, dx$

Taking $u'(x) = x$ and $v(x) = \ln x$ in the integration by parts rule:

$$\int x \ln x\, dx = \frac{x^2}{2}\ln x - \int \frac{x^2}{2} \cdot \frac{1}{x}\, dx = \frac{x^2}{2}\ln x - \frac{1}{2}\int x\, dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$$

**Exercise:** Find $\displaystyle\int x\, e^x\, dx$

Take $u'(x) = e^x$ and $v(x) = x$:

$$\int e^x \cdot x\, dx = e^x \cdot x - \int e^x\, dx = xe^x - e^x + C = e^x\!\left(\frac{x^2}{2} - 1\right) + C$$

Wait — using the correct assignment: $u'(x) = e^x$, $v(x) = x$:

$$\int x\, e^x\, dx = xe^x - \int e^x\, dx = xe^x - e^x + C$$

---

### 6. The Partial Fractions Method

#### i) Partial Fractions

Consider $\displaystyle\int \frac{x}{x^2 - x - 2}\, dx$

As $(x^2 - x - 2)$ can be written as $(x+1)(x-2)$:

$$\int \frac{x}{(x+1)(x-2)}\, dx$$

**Approach 1:** We have $\dfrac{x}{(x+1)(x-2)} = \dfrac{A_1}{x+1} + \dfrac{A_2}{x-2}$

Multiply through by $(x+1)(x-2)$:

$$A_1(x-2) + A_2(x+1) = x$$

Taking $x = -1$: $-3A_1 = -1 \Rightarrow A_1 = \dfrac{1}{3}$

Taking $x = 2$: $3A_2 = 2 \Rightarrow A_2 = \dfrac{2}{3}$

**Approach 2 (Cover-up rule):** Put $x = -1$ in the original expression, omitting the $(x+1)$ factor:

$$A_1 = \frac{-1}{-1 - 2} = \frac{-1}{-3} = \frac{1}{3}$$

Similarly $A_2 = \dfrac{2}{2+1} = \dfrac{2}{3}$

The identity is:

$$\frac{x}{x^2 - x - 2} = \frac{1/3}{x+1} + \frac{2/3}{x-2}$$

This is called an expansion in **partial fractions**.

#### ii) Integration by Partial Fractions

$$\int \frac{x}{x^2-x-2}\, dx = \int \frac{x}{(x+1)(x-2)}\, dx = \frac{1}{3}\int\!\left(\frac{1}{x+1} + \frac{2}{x-2}\right)dx$$

$$= \frac{1}{3}\ln|x+1| + \frac{2}{3}\ln|x-2| + C$$

**Generally:**

$$\frac{p(x)}{q(x)} = \frac{p(x)}{(x-a_1)(x-a_2)} = \frac{A_1}{x-a_1} + \frac{A_2}{x-a_2}$$

$$\int \frac{p(x)}{q(x)}\, dx = \int\!\left(\frac{A_1}{x-a_1} + \frac{A_2}{x-a_2}\right)dx = A_1\ln|x-a_1| + A_2\ln|x-a_2| + C$$

#### iii) Exercise

$$\int \frac{dx}{x^2 + 4x + 3} = \int \frac{1}{(x+1)(x+3)}\, dx = \int\!\left(\frac{1/2}{x+1} + \frac{-1/2}{x+3}\right)dx$$

$$= \frac{1}{2}\ln|x+1| - \frac{1}{2}\ln|x+3| + C$$

---

### 7. Combined Methods

#### i) Combining Substitution and Parts

Often we need a combined approach to integrals, where perhaps a substitution leads to a simpler integral that can be attacked by using parts or partial fractions.

**Example:** $I = \displaystyle\int e^{\sqrt{x}}\, dx$

Substitute $u = \sqrt{x} \Rightarrow \dfrac{du}{dx} = \dfrac{1}{2\sqrt{x}} = \dfrac{1}{2u} \Rightarrow dx = 2u\, du$

$$I = \int e^u \cdot 2u\, du = \int 2u\, e^u\, du$$

Now use parts: $u' = e^u$, $v = 2u$:

$$\int 2u\, e^u\, du = 2u\, e^u - \int 2e^u\, du = 2u\, e^u - 2e^u + C = 2\sqrt{x}\, e^{\sqrt{x}} - 2e^{\sqrt{x}} + C$$

#### ii) Combining Substitution and Partial Fractions

Consider $I = \displaystyle\int \frac{1}{1 + e^{2x}}\, dx$

Substitute $u = 1 + e^{2x} \Rightarrow \dfrac{du}{dx} = 2e^{2x} = 2(u-1)$, so $dx = \dfrac{du}{2(u-1)}$

$$I = \int \frac{1}{u} \cdot \frac{du}{2(u-1)} = \frac{1}{2}\int \frac{du}{u(u-1)}$$

Partial fractions: $\dfrac{1}{u(u-1)} = \dfrac{A_1}{u} + \dfrac{A_2}{u-1}$, giving $A_1 = -1$, $A_2 = 1$

$$\Rightarrow I = \frac{1}{2}\int\!\left(\frac{-1}{u} + \frac{1}{u-1}\right)du = -\frac{1}{2}\ln|u| + \frac{1}{2}\ln|u-1| + C$$

$$= \frac{1}{2}\ln(e^{2x}) - \frac{1}{2}\ln(1 + e^{2x}) + C$$

#### iii) Exercise

$I = \displaystyle\int \frac{e^x}{e^{2x} - 1}\, dx$

Take $u = e^x \Rightarrow du = e^x\, dx$, $u^2 = e^{2x}$

$$I = \int \frac{du}{u^2 - 1} = \int \frac{du}{(u-1)(u+1)}$$

$A_1 = \dfrac{1}{2}$, $A_2 = -\dfrac{1}{2}$

$$\Rightarrow I = \int\!\left(\frac{1/2}{u-1} + \frac{-1/2}{u+1}\right)du = \frac{1}{2}\ln|u-1| - \frac{1}{2}\ln|u+1| + C$$

$$= \frac{1}{2}\ln|e^x - 1| - \frac{1}{2}\ln(e^x + 1) + C$$

---

## Module 3: Constrained Optimisation

---

### 1. Constrained Optimization Problems in Economics

#### i) Optimal Consumer Choice

Find the best (highest utility-giving) bundle that he/she can afford.

- Suppose they have a budget $M$ for $X$ and $Y$ and that the prices of $X$ and $Y$ are $p_x$ and $p_y$. Then the consumer can only afford bundles $(x, y)$ satisfying:

$$\boxed{x\, p_x + y\, p_y \leq M}$$

$\Rightarrow$ consumer wants to maximize $u(x, y)$ subject to the budget constraint $x\, p_x + y\, p_y = M$ (a constrained optimization problem).

#### ii) Example

Suppose the 2 goods have prices $p_x = 16$ and $p_y = 1$, the budget is $M = 1280$, and the utility function is:

$$u(x, y) = x^{1/4}\, y^{3/4}$$

The budget constraint is: $16x + y = 1280$

$\Rightarrow$ Maximize $x^{1/4}\, y^{3/4}$ subject to $16x + y = 1280$

#### iii) Firm

Suppose the firm has a production function $q(k, l) = \sqrt{k}\,\sqrt{l}$ and that each unit of capital costs $\$100$ and each unit of labour costs $\$50$.

- Suppose the firm has a total budget of $\$1{,}000{,}000$ for capital and labour. How much should it spend on each to maximize its output?
- Suppose the firm needs to produce $20{,}000$ units of good. How much should it spend on each of $k$ and $l$ to minimize its production cost?

$\Rightarrow$ Qs 1: Maximize $\sqrt{k}\,\sqrt{l}$ subject to $100k + 50l = 1{,}000{,}000$

$\Rightarrow$ Qs 2: Minimize $100k + 50l$ subject to $\sqrt{k}\,\sqrt{l} = 20{,}000$

#### iv) Generally

Maximize/minimize $f(x, y)$ subject to the constraint $g(x, y) = 0$

---

### 2. Constrained Optimization — The Lagrange Multiplier Method

#### i) The Lagrange Multiplier Method

To find the optimal (max or min) points of $f(x, y)$ subject to $g(x, y) = 0$, we find the critical points of the 3-variable function:

$$\mathcal{L}(x, y, \lambda) = f(x, y) - \lambda\, g(x, y)$$

- The function $\mathcal{L}$ is known as the **Lagrangian**
- $\lambda$: **Lagrange multiplier**

**First-order conditions (FOC):**

$$\frac{\partial \mathcal{L}}{\partial x} = 0, \quad \frac{\partial \mathcal{L}}{\partial y} = 0, \quad \frac{\partial \mathcal{L}}{\partial \lambda} = 0$$

Since $\dfrac{\partial \mathcal{L}}{\partial \lambda} = -g(x, y)$, the equation $\dfrac{\partial \mathcal{L}}{\partial \lambda} = 0$ is equivalent to $g = 0$.

Re-write the FOC as:

$$\frac{\partial \mathcal{L}}{\partial x} = 0, \quad \frac{\partial \mathcal{L}}{\partial y} = 0 \quad \text{and} \quad g = 0$$

#### ii) Example 1

Consider the function $f(x, y) = 160x - 3x^2 - 2xy - 2y^2 + 120y - 18$. Find the max value of $f$ subject to the constraint $x + y = 34$.

Re-write the constraint: $g(x, y) = x + y - 34 = 0$

The Lagrangian:

$$\mathcal{L}(x, y, \lambda) = 160x - 3x^2 - 2xy - 2y^2 + 120y - 18 - \lambda(x + y - 34)$$

FOC:

$$\begin{cases} \dfrac{\partial \mathcal{L}}{\partial x} = 160 - 6x - 2y - \lambda = 0 \\[6pt] \dfrac{\partial \mathcal{L}}{\partial y} = -2x - 4y + 120 - \lambda = 0 \\[6pt] \dfrac{\partial \mathcal{L}}{\partial \lambda} = -(x + y - 34) = 0 \end{cases}$$

$$\Rightarrow \begin{cases} 160 - 6x - 2y = \lambda \\ -2x - 4y + 120 = \lambda \\ x + y - 34 = 0 \Rightarrow y = 34 - x \quad (*) \end{cases}$$

$$\Rightarrow 160 - 6x - 2y = -2x - 4y + 120$$
$$\Rightarrow 80 - 3x - y = -x - 2y + 60$$
$$\Rightarrow -2x + y + 20 = 0 \quad \text{(plug in (*)}$$
$$\Rightarrow -2x + 34 - x + 20 = 0$$
$$\Rightarrow -3x = -54 \Rightarrow \begin{cases} x = 18 \\ y = 16 \\ \lambda = 20 \end{cases}$$

**Maximum value at** $f(18, 16) = 2722$

#### iii) Example 2

$f(x, y) = x^2\sqrt{y}$, $g(x, y) = x + y - 100$

$$\mathcal{L} = x^2\sqrt{y} - \lambda(x + y - 100)$$

$$\frac{\partial \mathcal{L}}{\partial x} = 2x\sqrt{y} - \lambda = 0$$

$$\frac{\partial \mathcal{L}}{\partial y} = \frac{x^2}{2\sqrt{y}} - \lambda = 0$$

$$\frac{\partial \mathcal{L}}{\partial \lambda} = -(x + y - 100) = 0$$

$$\Rightarrow \begin{cases} 2x\sqrt{y} = \dfrac{x^2}{2\sqrt{y}} \Rightarrow 4xy = x^2 \Rightarrow 4y = x \\ x + y = 100 \end{cases}$$

$$\Rightarrow 5y = 100 \Rightarrow \begin{cases} y = 20 \\ x = 80 \end{cases}$$

#### iv) Exercise

**1.** Use the Lagrangian multiplier method to find the value $x, y$ which minimize $x^2 + y^2$ subject to the constraint $x + y = 1$.

$$f(x,y) = x^2 + y^2, \quad g(x,y) = x + y - 1$$

$$\mathcal{L} = x^2 + y^2 - \lambda(x+y-1)$$

$$\begin{cases} \dfrac{\partial \mathcal{L}}{\partial x} = 0 \\ \dfrac{\partial \mathcal{L}}{\partial y} = 0 \\ \dfrac{\partial \mathcal{L}}{\partial \lambda} = 0 \end{cases} \Rightarrow \begin{cases} 2x - \lambda = 0 \\ 2y - \lambda = 0 \\ x + y = 1 \end{cases} \Rightarrow \begin{cases} x = y \\ 2x = 1 \end{cases} \Rightarrow \begin{cases} x = \dfrac{1}{2} \\ y = \dfrac{1}{2} \end{cases}$$

**2.** Use the Lagrange multipliers to find the positive values of $x$ and $y$ which maximize $\dfrac{2y}{y+2} + \dfrac{x}{x+1}$ subject to the constraint $x + y = 120$.

**Ans:** (not Lagrange — substitution)

Constraint: $x = 120 - y$

$$f(y) = \frac{2y}{y+2} + \frac{120-y}{121-y}$$

$$f'(y) = 0 \Rightarrow \frac{2(y+2) - 2y}{(y+2)^2} + \frac{-(121-y) + (120-y)}{(121-y)^2} = 0$$

$$\Rightarrow \frac{4}{(y+2)^2} = \frac{1}{(121-y)^2} \Rightarrow 4(121-y)^2 = (y+2)^2$$

$$\Rightarrow 2(121-y) = y + 2 \Rightarrow 242 - 2y = y + 2 \Rightarrow y = 80, \quad x = 40$$

---

### 3. The Lagrange Multiplier

#### i) The Meaning of the Lagrange Multiplier

Suppose the constrained optimization problem is to max or min a function $f(x, y)$ subject to a constraint of the form $h(x, y) = a$ where $a$ is a constant. Set $g(x,y) = h(x,y) - a = 0$.

Provided $f$ and $h$ are well-behaved, the value of $\lambda$ is the **rate of change of the optimal value of $f$ with respect to $a$**.

If $x^*(a)$ and $y^*(a)$ are the optimal values of $f$ when the constraint is $h(x, y) = a$, then the optimal value of $f$ is $f^*(a) = f(x^*(a), y^*(a))$ and $\lambda^*$ satisfies:

$$\boxed{\lambda^*(a) = \frac{\partial f^*}{\partial a}}$$

#### ii) Marginal Utility of Income

A person wants to maximize a utility function $u(x_1, x_2)$ subject to a budget constraint $p_1 x_1 + p_2 x_2 = M$. The utility of the optimum bundle $X^* = (x_1^*, x_2^*)$ is $u(x_1^*, x_2^*)$. Since each $x_i^*$ is a function of the prices $p_1, p_2$ and the income $M$, using the notation $x_i^* = q_i(p_1, p_2, M)$, we have:

$$\boxed{u(X^*) = u(q_1(p_1,p_2,M),\, q_2(p_1,p_2,M)) = V(p_1, p_2, M)}$$

$\Rightarrow$ The function $V$ is called the **indirect utility function**. It specifies the individual consumer's optimal utility when the prices are $p_1, p_2$ and the income is $M$.

$\Rightarrow$ Partial derivative $\dfrac{\partial V}{\partial M}$ is the **marginal utility of income**.

$\Rightarrow$ The Lagrange multiplier is this marginal utility:

$$\lambda^* = \frac{\partial V}{\partial M}$$

#### iii) Example of Marginal Utility of Income

Utility function: $u(x_1, x_2) = x_1^{2/3}\, x_2^{1/2}$, Budget constraint: $p_1 x_1 + p_2 x_2 = M$

The Lagrangian:

$$\mathcal{L}(x_1, x_2, \lambda) = x_1^{2/3}\, x_2^{1/2} - \lambda(p_1 x_1 + p_2 x_2 - M)$$

FOC:

$$\frac{\partial \mathcal{L}}{\partial x_1} = \frac{1}{3}x_1^{-2/3} x_2^{1/2} - \lambda p_1 = 0 \Rightarrow \frac{x_2^{1/2}}{3x_1^{2/3} p_1} = \lambda \quad (1)$$

$$\frac{\partial \mathcal{L}}{\partial x_2} = \frac{1}{2}x_1^{2/3} x_2^{-1/2} - \lambda p_2 = 0 \Rightarrow \frac{x_1^{2/3}}{2 p_2 x_2^{1/2}} = \lambda \quad (2)$$

$$\frac{\partial \mathcal{L}}{\partial \lambda} = -(p_1 x_1 + p_2 x_2 - M) = 0 \Rightarrow p_1 x_1 + p_2 x_2 = M \quad (3)$$

From (1) and (2): $2p_2 x_2 = 3p_1 x_1 \Rightarrow x_2 = \dfrac{3p_1 x_1}{2p_2}$

Plug into (3): $p_1 x_1 + p_2 \cdot \dfrac{3p_1 x_1}{2p_2} = M \Rightarrow \dfrac{5}{2}p_1 x_1 = M$

$$\Rightarrow x_1^* = q_1(p_1, p_2, M) = \frac{2M}{5p_1}$$

$$x_2^* = q_2(p_1, p_2, M) = \frac{3M}{5p_2}$$

The indirect utility function:

$$V(p_1, p_2, M) = (x_1^*)^{2/3}(x_2^*)^{1/2} = \left(\frac{2M}{5p_1}\right)^{2/3}\!\left(\frac{3M}{5p_2}\right)^{1/2} = \frac{2^{2/3} \cdot 3^{1/2} \cdot M^{5/6}}{5^{5/6}\, p_1^{2/3}\, p_2^{1/2}}$$

$$\Rightarrow \frac{\partial V}{\partial M} = \frac{5}{6} \cdot \frac{2^{2/3} \cdot 3^{1/2}}{5^{5/6}} \cdot \frac{M^{-1/6}}{p_1^{2/3}\, p_2^{1/2}} = \frac{5^{1/6} \cdot M^{-1/6}}{2^{1/3} \cdot 3^{1/2} \cdot p_1^{2/3}\, p_2^{1/2}} = \lambda^*$$

#### iv) Exercise

Utility function: $u(x_1, x_2) = x_1^{1/2}\, x_2^{1/2}$, BC: $p_1 x_1 + p_2 x_2 = M$.

Find the optimal values $x_1^*$, $x_2^*$ and $\lambda^*$. Find $V(p_1, p_2, M)$ and verify that $\lambda^* = \dfrac{\partial V}{\partial M}$.

Prove that $\forall\, \Delta M$: $\Delta V = V(p_1, p_2, M + \Delta M) - V(p_1, p_2, M) = \lambda^* \cdot \Delta M$

**Ans:** The Lagrangian:

$$\mathcal{L}(x_1, x_2, \lambda) = x_1^{1/2}\, x_2^{1/2} - \lambda(p_1 x_1 + p_2 x_2 - M)$$

$$\begin{cases} \dfrac{\partial \mathcal{L}}{\partial x_1} = \dfrac{x_2^{1/2}}{2x_1^{1/2}} - \lambda p_1 = 0 \Rightarrow \dfrac{x_2^{1/2}}{2p_1 x_1^{1/2}} = \lambda \quad (1) \\[8pt] \dfrac{\partial \mathcal{L}}{\partial x_2} = \dfrac{x_1^{1/2}}{2x_2^{1/2}} - \lambda p_2 = 0 \Rightarrow \dfrac{x_1^{1/2}}{2p_2 x_2^{1/2}} = \lambda \quad (2) \\[8pt] p_1 x_1 + p_2 x_2 = M \quad (3) \end{cases}$$

From (1) and (2): $2p_2 x_2 = 2p_1 x_1 \Rightarrow x_2 = \dfrac{p_1 x_1}{p_2}$

Plug in (3): $2p_1 x_1 = M \Rightarrow x_1^* = \dfrac{M}{2p_1}$, $\quad x_2^* = \dfrac{M}{2p_2}$

The Lagrange multiplier:

$$\lambda^* = \frac{1}{2p_2}(x_1^*)^{1/2}(x_2^*)^{-1/2} = \frac{1}{2}\, p_1^{-1/2}\, p_2^{-1/2}$$

The indirect utility function:

$$V(p_1, p_2, M) = (x_1^*)^{1/2}(x_2^*)^{1/2} = \left(\frac{M}{2p_1}\right)^{1/2}\!\left(\frac{M}{2p_2}\right)^{1/2} = \frac{M}{2\sqrt{p_1 p_2}}$$

$$\Rightarrow \frac{\partial V}{\partial M} = \frac{1}{2}\, p_1^{-1/2}\, p_2^{-1/2} = \lambda^* \checkmark$$

#### v) Application of This Theory

$$\lambda^* = \frac{\partial V}{\partial M} \Rightarrow \Delta V \approx \lambda^* \cdot \Delta M$$

$\Rightarrow$ Helps us to calculate the change (new) maximum utility without having to solve the Lagrangian again.

For any $\Delta M$ in income, with constant prices:

$$V(p_1, p_2, M + \Delta M) = \frac{M + \Delta M}{2\sqrt{p_1 p_2}} = \frac{M}{2\sqrt{p_1 p_2}} + \frac{\Delta M}{2\sqrt{p_1 p_2}} = V(p_1, p_2, M) + \lambda^* \cdot \Delta M$$

---

### 4. Application: Constrained Optimization Problems in Economics

A firm has a weekly production function given by $q(k, l) = k^{1/4}\, l^{1/4}$, where $k$ and $l$ denote the capital and labour employed. Each unit of capital costs $\$1$ a week and each unit of labour costs $\$16$ a week. Suppose the firm minimizes its total expenditure on capital and labour.

**1.** Show that when the weekly production level is $q$, this minimum total expenditure on capital and labour $C(q)$ is $8q^2$ per week.

**2.** Determine the value of Lagrange multiplier $\lambda^*$. Verify that $\lambda^* = C'(q)$.

**3.** Suppose that the firm pays $\$1$ dollar in all other variable costs for each unit produced and that the selling price of the good is fixed at $\$33$ per unit. Find the weekly level of production $q$ that maximizes the firm's profit.

**Ans:**

**1.** Production function: $q(k,l) = k^{1/4}\, l^{1/4} = q$, Cost: $C(q) = k + 16l$

$\Rightarrow$ Minimize $k + 16l$ subject to $k^{1/4}\, l^{1/4} = q$

The Lagrangian: $\mathcal{L}(k,l,\lambda) = k + 16l - \lambda(k^{1/4}\, l^{1/4} - q)$

$$\begin{cases} \dfrac{\partial \mathcal{L}}{\partial k} = 1 - \dfrac{1}{4}\lambda k^{-3/4} l^{1/4} = 0 \Rightarrow \lambda = \dfrac{4k^{3/4}}{l^{1/4}} \quad (1) \\[8pt] \dfrac{\partial \mathcal{L}}{\partial l} = 16 - \dfrac{1}{4}\lambda l^{-3/4} k^{1/4} = 0 \Rightarrow \lambda = \dfrac{64\, l^{3/4}}{k^{1/4}} \quad (2) \\[8pt] k^{1/4}\, l^{1/4} = q \quad (3) \end{cases}$$

From (1) and (2): $4k = 64l \Rightarrow k = 16l$

Plug in (3): $(16l)^{1/4}\, l^{1/4} = q \Rightarrow 2l^{1/2} = q \Rightarrow l^* = \dfrac{q^2}{4}$, $k^* = 4q^2$

$$C(q) = k^* + 16l^* = 4q^2 + 16 \cdot \frac{q^2}{4} = 8q^2 \checkmark$$

**2.** $\lambda^* = \dfrac{4(4q^2)^{3/4}}{(q^2/4)^{1/4}} = 4 \cdot \dfrac{4^{3/4}\, q^{3/2}}{q^{1/2}/4^{1/4}} = 4 \cdot 4 \cdot q = 16q$

$C'(q) = 8 \cdot 2q = 16q = \lambda^* \checkmark$

**3.** $TC(q) = C(q) + q\cdot 1 = 8q^2 + q + FC$, $TR(q) = pq = 33q$

$$\Pi(q) = 33q - 8q^2 - q - FC = 32q - 8q^2 - FC$$

$$\Pi'(q) = 0 \Rightarrow 33 - 16q - 1 = 0 \Rightarrow q^* = \frac{32}{16} = 2$$

---

## Module 4: Matrices, Vectors and Linear Equations

---

### 1. Fitting Parameters

Suppose a supply function form: $q^S(p) = ap^2 + bp + c$ with constants $a, b, c$.

Find the best-fit supply function of this form. Suppose we have observed the following: when $p = 1$, $q = 5$; $p = 2$, $q = 12$; $p = 3$, $q = 23$.

We would have:

$$\begin{cases} a + b + c = 5 \\ 4a + 2b + c = 12 \\ 9a + 3b + c = 23 \end{cases} \Rightarrow \begin{cases} a = 2 \\ b = 1 \\ c = 2 \end{cases}$$

A system of linear equations, or a **linear system**.

---

### 2. Vectors

#### i) Vectors

An $n$-vector $v$ is a list of $n$ numbers, written either as a **row-vector** $(v_1, v_2, \ldots, v_n)$ or a **column-vector**:

$$\begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}$$

- The numbers $v_1, v_2, \ldots$ are known as the **components**, **entries** or **coordinates** of $v$.
- The **zero vector** is the vector with all of its entries equal to $0$.

#### ii) Arithmetic of Vectors

- Addition of two $n$-vectors:

$$(w_1, w_2, \ldots, w_n) + (v_1, v_2, \ldots, v_n) = (w_1 + v_1,\, w_2 + v_2,\, \ldots,\, w_n + v_n)$$

(same for column vectors)

- Multiply a vector by any single number $\alpha$ (scalar):

$$\alpha(v_1, v_2, \ldots, v_n) = (\alpha v_1, \alpha v_2, \ldots, \alpha v_n)$$

- Operations of addition and multiplication by a scalar may be combined. E.g.:

$$3(2,1,3) + 2(1,1,1) = (6,3,7) + (2,2,2) = (8,5,11)$$

- The **dot product** of two $n$-vectors $x = (x_1, x_2, \ldots, x_n)$ and $y = (y_1, y_2, \ldots, y_n)$ is denoted $x \cdot y$ and is calculated:

$$x \cdot y = x_1 y_1 + x_2 y_2 + \cdots + x_n y_n$$

#### iii) Vectors in Economics

- **Vector of products** $x = (x_1, x_2, \ldots, x_n)$; **price** $p = (p_1, p_2, \ldots, p_n)$

$\Rightarrow$ The budget constraint: $p \cdot x \leq M$

#### iv) Exercise

$x = (1,2,3)$, $y = (3,2,1)$:

$$x + y = (4,4,4) \quad;\quad x \cdot y = 3 + 4 + 3 = 10$$

---

### 3. Matrices

#### i) Matrices

A matrix is an **array of numbers**:

$$A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}$$

- Denote this array by the single letter $A$, or by $(a_{ij})$
- $A$ has $m$ rows and $n$ columns, or it's an $m \times n$ matrix
- If $m = n$, the matrix is said to be **square**
- The number $a_{ij}$ is known as the $(i,j)$th entry of $A$
- The **row vector** $(a_{i1}, a_{i2}, \ldots, a_{in})$ is row $i$ of $A$
- The **column vector** $\begin{pmatrix} a_{1j} \\ a_{2j} \\ \vdots \\ a_{mj} \end{pmatrix}$ is column $j$ of $A$

#### ii) Matrix Addition and Scalar Multiplication

- If $A$ and $B$ are 2 matrices of the same size, the $(i,j)$th entry of the matrix $A + B$ is:

$$a_{ij} + b_{ij}$$

- If $c$ is a number, $cA$ has $(i,j)$th entry $c\, a_{ij}$
- E.g.:

$$\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} + \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 4 & 6 \\ 3 & 3 \end{pmatrix}$$

$$3\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 3 & 6 \\ 6 & 3 \end{pmatrix}$$

#### iii) Matrix Multiplication

For an $m \times n$ matrix $A$ and an $n \times p$ matrix $B$, the product $AB$ is an $m \times p$ matrix. Each entry $c_{ij}$ is the dot product of **row $i$ of $A$** with **column $j$ of $B$**.

**E.g.:**

$$\underbrace{\begin{pmatrix} \color{red}{a_{11}} & \color{red}{a_{12}} \\ a_{21} & a_{22} \end{pmatrix}}_A \times \begin{pmatrix} \color{red}{b_{11}} \\ \color{red}{b_{21}} \end{pmatrix}\!\Big|\!\begin{pmatrix} b_{12} \\ b_{22} \end{pmatrix}\!\Big|\!\begin{pmatrix}\color{green}{b_{13}} \\ \color{green}{b_{23}} \end{pmatrix}$$

$$= \begin{pmatrix} \color{red}{c_{11}} & c_{12} & \color{green}{c_{13}} \\ \cdots & \cdots & \cdots \end{pmatrix}$$

The first row of $A$ (highlighted in <span style="color:red">red</span>) dotted with each column of $B$ gives the first row of $C$.

**Numerical example:**

$$\begin{pmatrix} 1 & 3 \\ 2 & 1 \end{pmatrix} \times \begin{pmatrix} \color{red}{1} \\ \color{red}{2} \end{pmatrix}\!\Big|\!\begin{pmatrix} 2 \\ 3 \end{pmatrix}\!\Big|\!\begin{pmatrix} \color{green}{1} \\ \color{green}{5} \end{pmatrix} = \begin{pmatrix} \color{red}{7} & 11 & \color{green}{16} \\ \color{red}{4} & 7 & \color{green}{7} \end{pmatrix}$$

**Algebraic rules:**

$$A(BC) = (AB)C \quad \text{and} \quad A(B+C) = AB + AC$$

> ⚠️ $AB \neq BA$ in general!

#### iv) The Identity Matrix

$$I = \begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}$$

- An identity matrix has 1 in each of the positions on the "main diagonal" and 0 elsewhere.
- $I$ is a square matrix.
- **Property:** If $A$ is an $n \times n$ matrix, we have $IA = AI = A$

#### v) Exercise

$$A = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 2 & 5 \end{pmatrix} \quad \text{and} \quad B = \begin{pmatrix} 2 & 1 \\ 0 & -1 \\ 1 & 2 \end{pmatrix}$$

$$\Rightarrow AB = \begin{pmatrix} 5 & 5 \\ 11 & 11 \end{pmatrix}$$

---

### 4. Linear Equations

#### i) Systems of Linear Equations

A system of $m$ linear equations in $n$ unknowns $x_1, x_2, \ldots, x_n$ is a set of $m$ equations of the form:

$$a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1$$
$$a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2$$
$$\vdots$$
$$a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m$$

- The numbers $a_{ij}$ are usually known as the **coefficients** of the system.
- We say that $(x_1^*, x_2^*, \ldots, x_n^*)$ is a **solution** of the system if all $m$ equations hold true when $x_1 = x_1^*$, $x_2 = x_2^*$, and so on.

#### ii) Linear Equations and Matrices

We can write a linear equation in **matrix form** $Ax = b$:

$$\begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n \end{pmatrix}$$

#### iii) Solving Small Systems by Variable Elimination (Gaussian Elimination)

Solving:

$$3x + 2y = 2 \quad (1) \qquad 5x + y = 2 \quad (2)$$

Take $(2) \times 2$: $10x + 2y = 4 \quad (3)$. Take $(3) - (1)$:

$$(10x + 2y) - (3x + 2y) = 4 - 2 \Rightarrow 7x = 2 \Rightarrow x = \frac{2}{7}$$

Plug in (1) or (2): $y = \dfrac{4}{7}$

This technique is called **Gaussian Elimination**.

#### iv) Solving Linear Systems with Row Operations

The set of solutions is unaltered by the following operations:
1. Multiply both sides of an equation by a constant $(\neq 0)$
2. Add a multiple of one equation to another
3. Interchange 2 equations

To solve a linear system $Ax = b$, we first form the **augmented matrix** $(A|b)$, which is $A$ with column $b$ tagged on.

E.g.:

$$\begin{pmatrix} 1 & 2 & 1 \\ 2 & 2 & 0 \\ 3 & 5 & 4 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix} \quad \Rightarrow \quad (A|b) = \begin{pmatrix} 1 & 2 & 1 & 1 \\ 2 & 2 & 0 & 2 \\ 3 & 5 & 4 & 1 \end{pmatrix}$$

Aim: turn this into a matrix of the form (row echelon form):

$$(C|d) = \begin{pmatrix} 1 & * & * & * \\ 0 & 1 & * & * \\ 0 & 0 & 1 & * \end{pmatrix}$$

Start with the 1st column: turn 2 and 3 to zeros using $R_2 - 2R_1$ and $R_3 - 3R_1$:

$$\begin{pmatrix} 1 & 2 & 1 & 1 \\ 0 & -2 & -2 & 0 \\ 0 & -1 & 1 & -2 \end{pmatrix}$$

Divide row 2 by $-2$:

$$\begin{pmatrix} 1 & 2 & 1 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & -1 & 1 & -2 \end{pmatrix}$$

Add $R_2$ to $R_3$:

$$\begin{pmatrix} 1 & 2 & 1 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 2 & -2 \end{pmatrix}$$

Divide row 3 by 2:

$$\begin{pmatrix} 1 & 2 & 1 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & -1 \end{pmatrix}$$

The system equation is:

$$x_1 + 2x_2 + x_3 = 1 \qquad x_2 + x_3 = 0 \qquad x_3 = -1$$

$$\Rightarrow \begin{cases} x_1 = 0 \\ x_2 = 1 \\ x_3 = -1 \end{cases}$$

#### v) Example: Solve the System

$$3x_1 - 3x_2 + 5x_3 = 6 \quad;\quad x_1 + 7x_2 + 5x_3 = 4 \quad;\quad 5x_1 + 10x_2 + 15x_3 = 9$$

Augmented matrix and row reductions lead to:

$$\begin{pmatrix} 1 & 7 & 5 & 4 \\ 0 & 1 & \frac{5}{12} & \frac{1}{4} \\ 0 & 0 & 1 & -\frac{57}{5} \end{pmatrix} \Rightarrow \begin{cases} x_1 = 26 \\ x_2 = 5 \\ x_3 = -\dfrac{57}{5} \end{cases}$$

#### vi) Exercise

Use the method of elementary row operations to solve:

$$x_1 + x_2 + x_3 = 6 \quad;\quad 2x_1 + 4x_2 + x_3 = 5 \quad;\quad 2x_1 + 3x_2 + x_3 = 6$$

Augmented matrix:

$$\begin{pmatrix} 1 & 1 & 1 & 6 \\ 2 & 4 & 1 & 5 \\ 2 & 3 & 1 & 6 \end{pmatrix} \rightarrow \begin{pmatrix} 1 & 1 & 1 & 6 \\ 0 & 2 & -1 & -7 \\ 0 & 1 & -1 & -6 \end{pmatrix} \rightarrow \begin{pmatrix} 1 & 1 & 1 & 6 \\ 0 & 1 & -\frac{1}{2} & -\frac{7}{2} \\ 0 & 0 & -\frac{1}{2} & -\frac{5}{2} \end{pmatrix} \rightarrow \begin{pmatrix} 1 & 1 & 1 & 6 \\ 0 & 1 & -\frac{1}{2} & -\frac{7}{2} \\ 0 & 0 & 1 & 5 \end{pmatrix}$$

$$\Rightarrow \begin{cases} x_1 = 2 \\ x_2 = -1 \\ x_3 = 5 \end{cases}$$

---

### 5. Application: Fitting Parameters

For some numbers $a, b,$ and $c$, let $f$ be the function of one variable given by:

$$f(x) = ax^2 + \frac{b}{x} + c(1 + \ln x) \quad \text{for } x > 0$$

Given that $f(1) = 0$, $f'(1) = 20$ and $f''(1) = 40$, find a system of linear equations for $a, b$ and $c$. Find $a, b, c$ by solving the system using a matrix method.

**Ans:**

$$f(1) = 0 \Rightarrow a + b + c = 0$$

$$f'(x) = 2ax - \frac{b}{x^2} + \frac{c}{x} \Rightarrow f'(1) = 3a - b + c = 20$$

$$f''(x) = 2a + \frac{2b}{x^3} - \frac{c}{x^2} \Rightarrow f''(1) = 6a + 2b - c = 40$$

Augmented matrix:

$$\begin{pmatrix} 1 & 1 & 1 & 0 \\ 3 & -1 & 1 & 20 \\ 6 & 2 & -1 & 40 \end{pmatrix} \rightarrow \begin{pmatrix} 1 & 1 & 1 & 0 \\ 0 & -4 & -2 & 20 \\ 0 & -4 & -7 & 40 \end{pmatrix} \rightarrow \begin{pmatrix} 1 & 1 & 1 & 0 \\ 0 & 1 & \frac{1}{2} & -5 \\ 0 & 0 & 1 & -4 \end{pmatrix}$$

$$\Rightarrow \begin{cases} a = 7 \\ b = -3 \\ c = -4 \end{cases}$$

---

## Module 5: Sequences, Series, and Financial Modelling

---

### 1. Savings Accounts

#### i) Annual Interest Rate ($\%$): $r$

$\Rightarrow$ Balance after $t$ years if no money is taken out: $P(1 + r)^t$

---

### 2. Sequences

#### i) Sequences

A sequence of numbers $y_0, y_1, y_2, \ldots$ is an infinite and ordered list of numbers with one term $y_t$, corresponding to each non-negative integer $t$.

- $y_{t-1}$ is the $t^{\text{th}}$ term.
- A sequence is defined explicitly by a formula. E.g.: $y_t = t^2$ generates the sequence: $y_0 = 0$, $y_1 = 1$, $y_2 = 4$, $y_3 = 9$, $y_4 = 16$, $\ldots$

#### ii) Arithmetic and Geometric Progressions

- **Arithmetic progression** with first term $a$ and common difference $d$:

$$y_t = a + dt$$

E.g.: $a = 5$, $d = 3$ $\Rightarrow \{5, 8, 11, \ldots\}$

- **Geometric progression** with first term $a$ and common ratio $x$:

$$y_t = a\, x^t$$

Successive terms are defined by $y_t = x\, y_{t-1}$

E.g.: $a = 3$, $x = \dfrac{1}{2}$ $\Rightarrow \left\{3,\, \dfrac{3}{2},\, \dfrac{3}{4},\, \ldots\right\}$, i.e. $y_t = 3\!\left(\dfrac{1}{2}\right)^t$

#### iii) Compound Interest

When the interest is added more frequently than once a year. When the year is divided into $m$ equal periods, the rate $\dfrac{r}{m}$ over each period; the balance after 1 year is:

$$P\!\left(1 + \frac{r}{m}\right)^m$$

If $m \to \infty$, this becomes **continuous compounding**:

$$\lim_{m \to \infty} \left(1 + \frac{r}{m}\right)^m = e^r$$

$\Rightarrow$ The balance after 1 year is: $Pe^r$; after $t$ years is: $Pe^{rt}$

---

### 3. Summing Arithmetic and Geometric Progressions

- **Arithmetic sequence** $a_1, a_2, \ldots, a_n$ ($n$ numbers), common difference $d$:

$$a_n = a_1 + (n-1)d$$

$$S_n = \frac{(a_1 + a_n)\, n}{2} \quad \text{(Sum of the sequence)}$$

- **Geometric sequence** $a_1, a_2, \ldots, a_n$ ($n$ numbers), common ratio $r$:

$$a_n = a_1 \cdot r^{n-1}$$

$$S_n = a_1(1 + r + r^2 + \cdots + r^{n-1}) = a_1 \cdot \frac{1 - r^n}{1 - r}$$

#### i) Exercise

**1.** Find the sum of the first $n$ terms of an arithmetic series whose first term is $1$ and common difference is $5$.

$$a_1 = 1,\quad d = 5 \Rightarrow S_n = \frac{n}{2}(a_1 + a_n) = \frac{n}{2}(1 + 1 + (n-1) \cdot 5) = \frac{n}{2}(2 + 5n - 5) = \frac{5n^2}{2} - \frac{3n}{2}$$

**2.** Find an expression for $3 + 3(4) + 3(4)^2 + \cdots + 3(4)^{n-1}$.

This is a geometric sequence with $a_1 = 3$ and $r = 4$ for $n$ terms:

$$S_n = 3(1 + 4 + 4^2 + \cdots + 4^{n-1}) = 3 \cdot \frac{1 - 4^n}{1 - 4} = 4^n - 1$$

**3.** Find an expression for $2 + 2(3) + 2(3)^2 + \cdots + 2(3)^n$.

This is the sum of a geometric sequence with $(n+1)$ terms with $a_1 = 2$ and $r = 3$:

$$S_n = 2(1 + 3 + 3^2 + \cdots + 3^n) = 2 \cdot \frac{1 - 3^{n+1}}{1 - 3} = 3^{n+1} - 1$$

---

### 4. Working with Sequences and Series

#### i) Finding the General Term of a Sequence Defined Recursively

- A sequence is defined **recursively** if a given term is expressed in terms of the previous one.
- **Example:** Suppose a sequence of numbers is constructed as follows. The first number $a_0$ is [continues in next pages]
