# 🧱 Dev Stack Builder

This is my submission for Programming Hero Assignment #05. It's a small
React + TypeScript app where you can browse a list of frontend, backend,
database, and tooling technologies, and build your own "stack" by adding
the ones you'd actually use on a project.

## 📖 What it does

Every technology shows up as a card with an icon, a short description, its
category, difficulty level, and a rating. Hit **Add to Stack** and it drops
into the **Your Stack** panel on the side, where you can pull items back out
one at a time or wipe the whole thing with **Remove All**. Try adding the
same thing twice and you'll get a warning toast instead of a duplicate —
every add, remove, and duplicate attempt pops a toast notification so you
always know what just happened.

## 🛠️ Built with

- React 19 (Vite) + TypeScript
- Tailwind CSS
- React-Toastify
- JSON, fetched at runtime instead of hardcoded into a component

## ✨ A few things worth pointing out

1. **Duplicate protection that actually works** — once something's in your
   stack, its "Add to Stack" button disables itself and switches to
   "✓ Added to Stack," so there's no way to add the same card twice by
   accident.
2. **One gradient, defined once** — the orange → pink → violet gradient
   used on the brand name, the hero heading, and every primary button all
   comes from a single value in `tailwind.config.js`. Change it there and
   it updates everywhere.
3. **Actually responsive, not just "mostly fine on desktop"** — 3 columns
   on desktop, 2 on tablet, 1 on mobile, with a proper hamburger menu for
   the navbar instead of links just disappearing.

## 📂 How the project is laid out

\`\`\`
dev-stack-builder-website/
├── public/
│ └── technologies.json # the technology data, loaded with fetch()
├── src/
│ ├── assets/ # hero banner image
│ ├── types/
│ │ └── technology.ts # shared TypeScript type for a technology
│ ├── components/
│ │ ├── Navbar.tsx
│ │ ├── Hero.tsx
│ │ ├── TechnologyGrid.tsx # fetches the data, handles loading/error/cards
│ │ ├── TechnologyCard.tsx
│ │ ├── YourStack.tsx
│ │ ├── Projects.tsx
│ │ ├── About.tsx
│ │ └── Footer.tsx
│ ├── App.tsx # owns the stack state, wires everything together
│ ├── main.tsx
│ └── index.css
├── tailwind.config.js # the one place the gradient lives
└── package.json
\`\`\`

## 🚀 Running it locally

\`\`\`bash
npm install
npm run dev
\`\`\`

Then open whatever local URL Vite prints (usually `http://localhost:5173`).

## ❓ React Q&A

**1. What is JSX, and why is it used in React?**
JSX lets you write something that looks like HTML right inside your
JavaScript, instead of building the UI with a bunch of
`React.createElement()` calls by hand. It's just easier to read and reason
about when the markup actually looks like markup.

**2. What's the difference between props and state?**
Props get passed into a component from the outside, and the component
itself can't change them — they're read-only from its perspective. State is
the opposite: it lives inside the component, and the component is free to
update it (usually with `useState`). In this project, `technology` is a
prop handed to `TechnologyCard`, while `stack` is state that lives in `App`
and changes every time you add or remove something.

**3. What does `useState` do, and where did I use it here?**
It gives a component a piece of memory that survives between renders, and
re-renders the component automatically whenever that value changes. I'm
using it in a few places: `App.tsx` for the `stack` array,
`TechnologyGrid.tsx` for `technologies`, `isLoading`, and `loadError`, and
`Navbar.tsx` for whether the mobile menu is currently open.

**4. What does `useEffect` do, and why did I need it for loading the JSON?**
`useEffect` lets you run code after a component renders — things like
network requests, which shouldn't happen _during_ rendering. That's exactly
what fetching `technologies.json` is, so the `fetch()` call sits inside a
`useEffect` in `TechnologyGrid.tsx` with an empty dependency array, meaning
it only runs once, right when that component first mounts.

**5. Why does every item in a `.map()` list need a unique `key`?**
So React can tell items apart across re-renders and know exactly which one
got added, removed, or moved — without a stable key it can end up updating
the wrong DOM node or losing a component's internal state by mistake. I use
each technology's `id` as the key, both in the grid and in the stack list.

**6. What's conditional rendering, and where did I use it?**
It just means showing different UI depending on some condition instead of
always rendering the same markup. A good example is in `YourStack.tsx`: if
the stack is empty, it shows "Your stack is empty," and if it's not, it
maps over the array and renders the actual list instead.

**7. How does data flow from parent to child, and how does a child send something back up?**
Parent to child is just props — `TechnologyGrid` hands `technology` and
`isAdded` down to each `TechnologyCard`. Going the other direction, the
parent passes a function down as a prop, and the child calls it (usually
with some data). Here, `App` owns `handleAddToStack` and passes it down
through `TechnologyGrid` to every card as `onAddToStack`. When you click the
button, the card calls `onAddToStack(technology)`, which runs the handler
back in `App` and updates the `stack` state.

## 📤 Submission

- GitHub Repository Link : https://github.com/codewithsiyam/dev-stack-builder-website.git

- Live Site Link(Netlify) :
