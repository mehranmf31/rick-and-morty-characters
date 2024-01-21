# Rick and Morty Character Explorer

[Overview](#overview)

[Scripts and Commands](#scripts-and-commands)

[Third-Party Libraries](#third-party-libraries)

[Project Structure](#project-structure)

---

## Overview

This project, crafted using **React**, **Typescript**, and styled with **TailwindCSS**, offers a dynamic user experience in exploring the world of Rick and Morty. It leverages **React-Query** for efficient data caching and **StoryBook** for component documentation, demonstration, and testing.

## Scripts and Commands

### `yarn dev`

Starts the application in development mode. Access it at [http://localhost:5173](http://localhost:5173) for browser.

### `yarn build`

Builds the application for production, outputting files to the `build` folder. This process optimizes the app for the best performance.

### `yarn lint`

Runs the linter to check for code quality issues and enforce coding standards. This helps maintain code consistency and avoid potential errors.

### `yarn preview`

Serves the production build of the app locally for previewing. This is useful for testing the production build on your local machine. Access it at [http://localhost:4173](http://localhost:4173) for browser.

### `yarn test`

Launches the test runner in interactive watch mode.

### `yarn prepare`

Prepares the project, typically by installing pre-commit hooks. This script ensures that certain checks or tasks are automatically run before commits are made.

### `yarn storybook`

Starts Storybook on [http://localhost:6006](http://localhost:6006), allowing you to view and interact with your components in isolation.

### `yarn build-storybook`

Builds your Storybook setup into a static web application, ready for deployment as a standalone site. This is useful for sharing UI components with team members or stakeholders.

## Third-Party Libraries

A brief on the selected third-party libraries and their roles in this project:

### React-Query

React Query efficiently handles data-fetching, caching, and state synchronization in React apps. It's employed here for API data caching, enhancing user experience and state management (loading, error handling, etc.), and data restoration.

[See the link for more information](https://tanstack.com/query/latest/docs/react/overview)

### TailwindCSS

TailwindCSS is a utility-first CSS framework that accelerates custom design implementation directly in the markup.

It's chosen for its atomic CSS class approach, enabling rapid development and a customizable design system while minimizing CSS redundancy. For unique styling needs not covered by TailwindCSS, CSS modules are employed.

### Storybook

Storybook is a UI development environment that facilitates building UI components in isolation, covering various states and edge cases.

It's used here for component and fragment development, providing a robust documentation platform and efficient testing methods.

## Project Structure

### Directory Layout

```
src
|── @types : Custom type definitions
├── assets: All static files needed
├── lib:
|   ├── constants: Application-wide constants
|   ├── hooks: Custom hooks (centralized exports for ease of use)
|   ├── mocks: Mock data for testing
|   ├── requests: API request functions
│   └── utils:
│       ├── api: Axios instance with custom interceptors and API key
│       └── config: Application configuration, including environment variables
├── components:
|   ├── common: Shared components, tests, and stories
│   └── characters: Components related to the characters
├── pages: Primary components for application pages
├── routes: Routing paths for navigation
└── styles: CSS files
```

### Navigation and Routing

Navigation is managed by React-Router v6. The application features two primary routes:

1. `/` : The main page (index).
2. `/:id` : A dynamic route for displaying character details based on ID.

### State Management

React-Query is utilized for state management, simplifying component structure and avoiding prop drilling. For centralized state management, Redux or Redux-Toolkit could be alternatives. React Context with an atomic design approach is another option.

### Testing Framework

The project employs Vitest and React Testing Library for unit and integration testing. Storybook also facilitates snapshot and accessibility testing. For end-to-end testing, Cypress is a recommended choice.

### Code Quality Tools

- **Husky** is used for managing `pre-commit` and other Git hooks.
- **ESLint** statically analyzes your code to quickly find problems. configuration is specified in `.eslintrc.cjs`.
- **Prettier** configuration is specified in `.prettierrc.json`.
- **CommitLint** adheres to `Conventional Commits` standards ([details](https://www.conventionalcommits.org/en/v1.0.0/)).
