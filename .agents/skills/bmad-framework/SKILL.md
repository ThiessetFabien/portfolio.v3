---
name: bmad-framework
description: Guide the user through the BMAD (Besoin, Méthode, Action, Données) methodology to structure projects. Trigger this skill whenever the user wants to brainstorm a new project, feature, or workflow, or mentions BMAD, project planning, or structured implementation.
---

# BMAD Framework Skill 🏗️

The core implementation of the BMAD (Besoin, Méthode, Action, Données) methodology.

## Purpose
To bridge the gap between a fuzzy idea and a professional, data-driven implementation. BMAD ensures that every action is justified by a need and results in measurable data.

---

## The BMAD Cycle

### 🅱️ BESOIN (Need)
**"Why are we doing this?"**
- Identify the problem or opportunity.
- Define the target audience.
- Specify the pain points being addressed.
- **Questions to ask**:
    - Who is the end user?
    - What happens if we DON'T build this?
    - What is the single most important goal?

### Ⓜ️ MÉTHODE (Approach)
**"How will we solve it?"**
- Define the conceptual framework.
- Choose the technology stack.
- Outline the architecture.
- **Questions to ask**:
    - What are the technical constraints?
    - Are there existing patterns we should reuse?
    - How do we handle complexity?

### 🅰️ ACTION (Execution)
**"What are the steps?"**
- Create the implementation plan.
- Break down tasks into manageable chunks.
- Define the workflow.
- **Questions to ask**:
    - What is the MVP?
    - What are the immediate next steps?
    - How do we verify progress?

### ️📊 DONNÉES / RÉSULTATS (Data/Results)
**"How do we know it worked?"**
- Define success metrics (KPIs).
- Specify the data to be captured.
- Outline the feedback loop.
- **Questions to ask**:
    - What data confirms the *Besoin* was met?
    - How do we measure performance?
    - What does "done" look like?

---

## Standard BMAD Template
Use this template for documenting any feature or project:

```markdown
# Project Name: [Title]

### 🅱️ Besoin
[Description of the need]

### Ⓜ️ Méthode
[Description of the method]

### 🅰️ Action
- [ ] Task 1
- [ ] Task 2

### 📊 Données
- [Metric 1]
- [Output A]
```

---

## Instructions for the AI
When this skill is invoked:
1.  **Phase 1**: Ask the 3 core questions for **Besoin**. Do not proceed until the need is clear.
2.  **Phase 2**: Propose a **Méthode** and ask for feedback.
3.  **Phase 3**: Generate the **Action** plan (tasks).
4.  **Phase 4**: Define the **Données** structure.
