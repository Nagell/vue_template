# Vue Based Monorepo Template

- [Vue Based Monorepo Template](#vue-based-monorepo-template)
  - [Description](#description)
  - [Project setup / Installation](#project-setup--installation)
    - [Develop](#develop)
    - [Build project](#build-project)
    - [Run build locally](#run-build-locally)
    - [Lints and fix](#lints-and-fix)
    - [Storybook](#storybook)
    - [Additional commands](#additional-commands)
  - [Development](#development)
  - [Build](#build)
  - [Environment variables](#environment-variables)
    - [NODE\_ENV \& VITE MODE](#node_env--vite-mode)
    - [VITE\_APP\_\*](#vite_app_)

## Description

This is a Vue template for quick start of a new project.  
Used tools and libraries:

- `husky` and `conventional-commits` for commit linting
- `yarn` for dependency management
- `eslint` (with`@stylistic/eslint-plugin` instead of prettier) for linting
- `vite` as a development server and build tool
- `typescript` for type safety
- `tailwindcss` for styling

The template contains also preconfigured:

- `storybook`
- `pinia`
- `vue-router`
- `vue-i18n`

as well as a basic structure:

- `assets` - for styles, fonts, etc.
- `components` - for reusable components
- `composables` - for reusable logic
- `helpers` - for utility functions
- `layouts` - for layout components
- `locales` - for translations
- `pages` - for views
- `plugins` - for Vue plugins
- `services` - for API services
- `store` - for Pinia store
- `types` - for typescript types used in the project

## Project setup / Installation

Assuming that you have already installed `Node.js`,  
go to the root directory and run the following commands.

```bash
# Install globally Yarn package manager
npm install -g yarn

# Install dependencies
yarn run init
```

🟦**TIP**  
Remember to scan the project for `app_name` and replace them with your own values.

### Develop

Start the app in development mode with hot-reloads

```bash
yarn run serve
```

### Build project

```bash
# Build for production
yarn run build:prod

# Build for staging
yarn run build:staging
```

### Run build locally

```bash
yarn run preview
```

### Lints and fix

```bash
# Only lint
yarn run lint

# Lint and fix
yarn run lint:fix
```

### Storybook

```bash
# Start Storybook
yarn run storybook:dev

# Build Storybook
yarn run storybook:build
```

### Additional commands

```bash
# Install dependencies for ci
## Helpful when you want to install all dependencies for a CI pipeline,  
## reassuring that they are installed exactly as in the `yarn.lock` file.
yarn run ci

# Clean dependencies
## Helpful when you want to reinstall all dependencies.
yarn run clean
```

<details><summary>Why yarn?</summary>

Because we are using monorepo structure, we have to use so called `workspaces` as well.  
Yarn `workspaces` implementation is far superior to the npm one, by providing more features and better performance.  

For example package hoisting, which allows us installing dependencies in the root `node_modules`  
and save time and dependency management overhead are working much better in Yarn.  
Good explanation of the struggle with npm caveats is provided by [this article](https://medium.com/@d.ts/how-to-use-npm-workspace-d155076da956).

</details>

## Development

All commands, tips and tricks and documentation about used tools and libraries are in the  
[DEVELOPMENT.md](./docs/DEVELOPMENT.md) file.

## Build

Nx will only run build for the affected projects and commands.  
This will only work if you have a Git repository initialized and the changes are committed.  
Default check if a package/project is affected is made by comparing the head of the current branch  
against the main branch.

```bash
yarn run build:prod
# or
yarn run build:staging
```

The builds are saved in the `/dist` directory.

**IMPORTANT**  
 In an CI pipeline you require another command to check for affected packages.  
[Read more](https://nx.dev/ci/features/affected#specify-which-shas-to-use-to-calculate-affected-code)

## Environment variables

### NODE_ENV & VITE MODE

🟥**IMPORTANT**  
Do not add and commit `.env` file to projects. There is a known problem with the Nx commands  
causing usage of the `.env` file for every build mode, no matter what mode is set in the command.  
If you need some local environment variables, use `.env.development.local` file.

The NODE_ENV=production is not supported in the .env file in Vite  
Only NODE_ENV=development is supported to create a development build of the project  
Vite has also so called Mode, depending on the .env file used for build or a serve command.  

Respectively it uses

- `.env` or `.env.development` file for development mode (serve command)
- `.env.production` file for production mode (build command)
- `.env.[mode]` file for custom mode (build command with --mode [mode] argument)

More about modes [here](https://vitejs.dev/guide/env-and-mode.html#modes)  

To make use of it in your code, you can use `import.meta.env.MODE` variable.

```javascript
if (import.meta.env.MODE !== 'production') {
  console.log('Not the production mode');
}
```

### VITE_APP_*

Use `VITE_APP_` prefix to expose environment variables to your app  

```bash
VITE_APP_API_URL=https://api.example.com
```
