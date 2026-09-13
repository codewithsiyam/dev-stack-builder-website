# Dev Stack Builder

## Project Description

Dev Stack Builder is a responsive React and TypeScript application where
users can explore different web development technologies and put together
their own development stack. Each technology is shown as a card with its
category, difficulty, rating, and description, and users can add or remove
technologies from a personal stack at any time.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON

## Features

1. **Explore Technologies**
   Browse technologies with their icon, name, category, description,
   difficulty, and rating, loaded from an external JSON file.

2. **Build Your Own Stack**
   Add any technology to a personal stack. The same technology cannot be
   added twice — trying to do so shows a warning toast instead.

3. **Manage Your Stack**
   Remove technologies one at a time, or clear the whole stack with a
   single "Remove All" button. Every add, duplicate attempt, remove, and
   remove-all triggers a toast notification.

## Project Structure

\`\`\`
src/
├── assets/                # logo and hero images
├── types/
│   └── technology.ts      # shared TypeScript type for a technology
|---ui/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TechnologyGrid.tsx # fetches JSON data, handles loading/error/cards
│   ├── TechnologyCard.tsx
│   ├── YourStack.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   └── Footer.tsx
├── App.tsx               # owns the stack state
├── main.tsx
└── index.css
\`\`\`

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

---

## React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like code inside JavaScript or
TypeScript. React uses it because it makes component markup easier to read
and reason about than nested `React.createElement()` calls.

**2. What is the difference between props and state?**
Props are data passed from a parent component to a child component, and
the child cannot change them. State is data owned and managed inside a
component, and it changes over time — for example, via `useState`.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component store and update data, re-rendering whenever
that data changes. It's used in `App.tsx` to store the stack, and in
`TechnologyGrid.tsx` to store the fetched technologies and the loading
state.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs code after a component renders — a network request is a
side effect that shouldn't run during render. The `fetch()` call for
`technologies.json` runs inside a `useEffect` with an empty dependency
array in `TechnologyGrid.tsx`, so it only runs once, when the component
mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items in a list apart between renders, so it
knows exactly which one was added, removed, or changed. Each technology's
`id` is used as the key here.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI depending on a condition.
In `YourStack.tsx`, an empty-stack message is shown when the stack has no
items, and the list of selected technologies is shown otherwise.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as props. To send something back up,
the parent passes a function down as a prop, and the child calls it —
for example, `App` passes `handleAddToStack` down to `TechnologyGrid`,
which forwards it to each `TechnologyCard` as `onAddToStack`.

---

## Submission

- GitHub Repository Link : https://github.com/codewithsiyam/dev-stack-builder-website.git

- Live Site Link(Netlify) : https://dev-stack-builder-siyam.netlify.app
