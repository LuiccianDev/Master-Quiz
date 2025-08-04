---
applyTo: '**'
---
# AI Coding Standards for Quiz Master Project

## 1. Overview

This document provides the project context and coding guidelines that you must follow. The goal is to maintain a clean, consistent, and high-quality codebase.

**Project Context:** This is a "Quiz Master" application built with **Astro**.

## 2. General Coding Standards

### Naming Conventions

- **PascalCase** for component filenames, interfaces, and type aliases.
  ```typescript
  // Correct
  import MyComponent from './MyComponent.astro';
  interface UserProfile { ... }
  type QuizState = 'loading' | 'active' | 'finished';
  ```

- **camelCase** for variables, functions, and methods.
  ```typescript
  // Correct
  const userScore = 0;
  function calculateFinalScore() { ... }
  ```

- **Prefix private class members with an underscore (`_`)**.
  ```typescript
  // Correct
  class ApiClient {
    private _apiKey: string;
  }
  ```

- **ALL_CAPS** for global constants.
  ```typescript
  // Correct
  export const MAX_QUESTIONS_PER_QUIZ = 20;
  ```

### Code Style & Formatting

- **Formatter:** This project uses **Prettier**. All code should be formatted according to the rules in the `.prettierrc` file before committing.
- **Imports:** Group and sort imports for better readability.
  1.  External libraries (e.g., `astro`)
  2.  Project components (e.g., `@/components/...`)
  3.  Local modules (e.g., `./utils`)
  4.  Stylesheets (e.g., `../styles/local.css`)

### TypeScript Usage

- **Avoid `any`**: Use specific types whenever possible. If a type is unknown, prefer `unknown` over `any`.
- **Props Interfaces**: Always define a TypeScript `interface` for component props.
  ```astro
  ---
  interface Props {
    title: string;
    isPublished?: boolean;
  }
  const { title, isPublished = false } = Astro.props;
  ---
  ```

## 3. Astro Components

### Component Structure

- **Keep components small** and focused on a single responsibility.
- **Props**: Pass data from parent to child components exclusively via props.
- **Scoped Styles**: Use `<style>` tags for component-specific styles to avoid CSS conflicts. Global styles are located in `src/styles/global.css`.

### Example Component

```astro
---
// src/components/QuizCard.astro
import BaseButton from './BaseButton.astro';

interface Props {
  title: string;
  questionCount: number;
}

const { title, questionCount } = Astro.props;
---
<div class="quiz-card">
  <h2>{title}</h2>
  <p>{questionCount} Preguntas</p>
  <BaseButton>Empezar Quiz</BaseButton>
</div>

<style>
  .quiz-card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
  }
</style>
```

## 4. Error Handling

- **Async Operations**: Always wrap `await` calls and other asynchronous operations in `try/catch` blocks.
- **Error Boundaries**: Implement proper error boundaries in Astro components where data fetching or complex logic can fail.
- **Logging**: Log errors with meaningful contextual information to aid in debugging.

```typescript
// Example of a fetch call inside a component
let data;
let error;
try {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  data = await response.json();
} catch (e) {
  console.error('Failed to fetch data:', e);
  error = 'No se pudieron cargar los datos.';
}
```

## 5. Accessibility (a11y)

- **Semantic HTML**: Use HTML elements for their intended purpose (e.g., `<button>` for buttons, `<nav>` for navigation).
- **ARIA Roles**: Use ARIA attributes where necessary to enhance accessibility, especially for dynamic components.
- **Image Alt Text**: Provide descriptive `alt` text for all `<img>` tags.
