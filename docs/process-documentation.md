# Momentum Demo Website Process Documentation

## Project overview

Momentum is a landing page concept for a productivity application aimed at college students and young professionals. The product combines task management, focus timing, and habit tracking in one interface so users can stay organized without juggling several separate tools.

## Assignment checklist

- Complete demo website with hero, features, how it works, pricing, testimonials, and final CTA
- AI-generated brand and UI visuals saved in `src/assets/`
- Prompt list included in this document
- Iteration notes included in this document
- Team contribution summary included in this document
- Reflection included in this document
- AI disclosure included in this document
- No API keys, tokens, or passwords stored in project files

## Tools used

- React
- Vite
- Tailwind CSS
- Codex for layout, copy, styling, and SVG asset generation inside repo
- AI image prompt directions prepared for Copilot and Gemini Nano Banana style generation

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

Our team wanted to build something that looked realistic enough to present as a real product while still being small enough to finish in a short class project window. We chose a productivity landing page because it connected well to earlier brainstorming around organization, habit building, and focused work. That made it easier to define a clear audience, clear value proposition, and sections that are common in real SaaS websites.

AI was most helpful in two places. First, it sped up ideation. It helped us move quickly from a broad idea into concrete landing page sections, sample copy, and visual directions. Second, it helped with implementation. Vibe coding tools and AI-assisted coding were useful for getting a working front-end structure in place quickly, then refining spacing, responsiveness, and section flow. That saved time on repetitive setup and let us focus more on decisions about layout and clarity.

At the same time, AI had weaknesses. Outputs could feel generic, overly wordy, or too polished in a way that did not always match our assignment goals. We still had to review everything closely, rewrite copy, simplify layouts, and make sure the final result felt intentional instead of auto-generated. It also did not automatically handle project requirements like process documentation, contribution summaries, or assignment-specific details, so we had to organize those ourselves.

The biggest takeaway from vibe coding was that speed is useful only when paired with editing and judgment. AI helped us produce a strong starting point, but the final quality came from reviewing, trimming, and aligning the work as a team. That balance between quick generation and careful revision was the most important part of our workflow.

## AI disclosure

- Codex: code generation, section copy, styling updates, SVG asset creation, and documentation drafting
- Copilot: prompt direction for brand and visual asset exploration
- Gemini Nano Banana: prompt direction for alternate visual iterations
