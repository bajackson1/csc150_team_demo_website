# Momentum Demo Website Process Documentation

## Project overview

Momentum is a landing page concept for a productivity application aimed at college students and young professionals. The product combines task management, focus timing, and habit tracking in one interface so users can stay organized without juggling several separate tools.

## Tools used

- React
- Vite
- Tailwind CSS
- Codex for layout, copy, styling, and SVG asset generation inside repo
- AI image prompt directions prepared for Copilot and Gemini

## AI asset prompt list

### Logo

Prompt:

`Minimal app logo for a productivity brand named Momentum, rounded icon, blue and soft neutral palette, clean SaaS style, modern but friendly`

Saved file:

- `src/assets/logo-mark.svg`

### Feature icons

Prompt:

`Set of simple productivity app icons for task list, focus timer, habit tracking, and insights, matching blue UI style, rounded shapes, modern landing page`

Saved files:

- `src/assets/feature-task.svg`
- `src/assets/feature-timer.svg`
- `src/assets/feature-habit.svg`
- `src/assets/feature-insight.svg`

### Hero illustration

Prompt:

`Clean SaaS dashboard illustration for productivity app with tasks, timer, habits, analytics, light background, blue accents, polished landing page style`

Saved file:

- `src/assets/hero-visual.svg`

## Iteration notes

### Logo iterations

1. Initial direction focused on a rounded square badge with simple productivity symbolism — combined an M letterform with an upward arrow to convey growth and momentum

![Logo Iteration 1](Logo%20(Iteration%201).png)

2. Second direction simplified to a bold standalone M letterform with a blue gradient, prioritizing app-icon readability over illustrative detail

![Logo Iteration 2 / Final](Logo%20(Iteration%202-Final).png)

3. Final direction settled on the clean M mark for its versatility across small sizes and its modern SaaS aesthetic

### Feature icon iterations

1. First set used very literal UI symbols; generated alongside a reference layout to ensure consistent scale and visual language across task, timer, habit, and insights icons

![Feature Icons](Feature%20Icons.png)

2. Second set simplified forms and made line weight more consistent
3. Final set matched the same rounded blue visual language across all four icons — these were then redrawn as SVGs for use in the site

### Hero illustration iterations

1. First concept centered on a generic dashboard blockout with a dark sidebar and task/timer/habit modules

![Hero Illustration Iteration 1](Hero%20Illustration%20(Iteration%201).png)

2. Second concept shifted to a lighter, more editorial composition with a landing page frame and supporting feature callouts

![Hero Illustration Iteration 2 / Final](Hero%20Illustration%20(Iteration%202-Final).png)

3. Final concept emphasized a clean SaaS composition with stronger contrast and clearer cards — the overall layout informed the SVG hero visual built into the site

## Team contribution summary

- **Brooks Jackson**: project setup, Vite/React/Tailwind configuration, folder structure, global styling, component architecture, all section layouts, responsive design, asset integration, and final polish
- **Natalie Bar**: defined the brand direction and visual identity — chose the blue and soft neutral color palette, established typography rules, and led decisions on spacing and layout tone across sections; also wrote the features section copy and the how it works section copy
- **Charles Cataldo**: wrote the team reflection and compiled the AI disclosure; contributed to early brainstorming on topic selection and target audience framing
- **Andrew Chisholm**: created the initial wireframes and section flow outline that the team used as a build reference; wrote the hero section headline and subheadline copy and the pricing section copy; tested the final site across multiple screen sizes and browsers
- **Alexander Hyde**: proposed the Momentum concept and productivity app topic; wrote the testimonials section copy and the footer tagline; led the AI image generation sessions and iterated on visual asset prompts in Copilot and Gemini

## Reflection

Building this project gave us a clearer picture of what actually makes a landing page work. It's easy to focus on making something look good—but we kept running into the same question: does someone landing on this page immediately understand what the product does and why they'd care? That kept us honest.

We spent a lot of time on structure. The flow we landed on—hero section up front, features in the middle, call-to-action at the end—sounds obvious, but getting it to feel natural took more iteration than we expected. The bigger shift was moving from "here are the features" to "here's how this changes your day." Task management, focus timers, habit tracking—those are fine to list, but they only land if the reader connects them to something real in their life.

Designing for college students and young professionals shaped a lot of our decisions. We wanted it to feel clean and focused, not cluttered. The color palette—soft neutrals, blue accents—wasn't just an aesthetic choice. That combination reads as calm and professional, which felt right for an app centered on focus and productivity. Typography and spacing followed the same logic.

We used AI tools throughout. Codex and Claude Code helped us move fast on the front-end side—testing layouts, generating structure, working through styling. Copilot and Gemini handled visual exploration: mockups, icons, early visual directions. They were genuinely useful, but they required a lot of review. Generated content needed to be checked, trimmed, and adjusted to actually fit what we were building. The tools are fast—they're not always right.

One thing we wrestled with was how minimal to go. Too sparse and the page loses context; too detailed and it starts to feel dense. We went back and forth on that a few times, cutting and re-adding copy in different sections until it felt balanced.

Team-wise, we divided work along natural lines—technical build, visual direction, and content were mostly handled by different people. That made it easy to move quickly, but it also meant staying in sync mattered. When design assumptions and code decisions started to drift, we had to regroup and realign. That back-and-forth was actually one of the more useful parts of the process—it forced us to articulate decisions we'd otherwise just make quietly and move on from.

If we kept working on this, we'd focus on adding interactive elements and tightening the user journey. But as a foundation, this gave us a solid understanding of how to build something that communicates clearly and holds together visually.

## AI disclosure

Our team used AI tools throughout this project to support ideation, design, and development—not to do the work for us.

For visuals, we used Copilot and Gemini to generate UI mockups, icons, and early design concepts. These gave us a fast way to explore directions, but everything generated was reviewed and refined before it made it into the final product.

On the development side, Codex and Claude Code helped with writing and organizing front-end code. They sped things up, but all output was evaluated and adjusted by our team. Nothing was dropped in untouched.

All major decisions—structure, content, design direction—were made by us. AI handled some of the groundwork; we handled the judgment calls.
