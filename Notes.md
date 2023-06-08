When writing functional components, define event handlers inside your component.

When we use the `useState` hook and render a component multiple times,
each of these will get their  own state.

Hooks have restrictions:

  1 can only be called at the top of a component.

  2 cannot be used inside a loop or a condition.

When we return multiple elements from a React component, we must wrap it
in `<> <span>Foo</span><span>Bar</span></>`

If a function were to be called inside a component as an event handler,
it is called before being passed to the child compoent.
This could lead to infinite loop if the function updates the state.
