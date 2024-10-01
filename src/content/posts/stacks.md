---
title: "Stacks"
description: "Discrete structures: a bit of stacks."
pubDate: 2024-09-29
image:
  url: "/images/stacks.webp"
  alt: "stacks"
---

## What is a stack?

A stack is a linear structure such that intersections, queries and deletions are only allowed at a single point. The stack may have nothing on it (empty stack). These are called LIFO (Last In, First Out) or FILO (First In, Last Out) structures. Operations are only allowed at the top of the stack.

### Operations

For data handling, it has two basic operations:

- **push**: which places an object on the stack.
- **pop**: which removes the last stacked item.

At any given time, only the top of the stack is accessible, i.e. the last stacked object (called TOS, Top of Stack). The remove operation allows obtaining this element, which is removed from the stack allowing access to the previous one (previously stacked), which becomes the last one, the new TOS.

### RPN (Reverse Polish Notation)

It is an alternative algebraic method of data entry. It is an expression where each operator comes before its operands. Parentheses are not used to indicate the order of operations, as long as the arity of the operator is fixed.

```js
3 4 + // This will result 7
```