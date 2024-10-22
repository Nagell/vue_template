# Vue Template

- [Vue Template](#vue-template)
  - [Description](#description)
  - [Project setup / Installation](#project-setup--installation)
  - [Commands](#commands)
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

<br>

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/Nagell/vue_template)  
Remember to install suggested extensions in StackBlitz, after the installation of the project.  
If this approach doesn't work for you, you can always just clone the project and run it locally.

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

<br>

## Project setup / Installation

Assuming that you have already installed `Node.js`,  
go to the root directory and run the following commands.

```bash
# Install globally Yarn package manager
npm install -g yarn

# Install dependencies
yarn run init
```

> [!NOTE]
> Remember to scan the project for `app_name` and replace them with your own values.

<br>

## Commands

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

<br>

## Development

All commands, tips and tricks and documentation about used tools and libraries are in the  
[DEVELOPMENT.md](./docs/DEVELOPMENT.md) file.

<br>

## Build

```bash
yarn run build:prod
# or
yarn run build:staging
```

The builds are saved in the `/dist` directory.

<br>

## Environment variables

### NODE_ENV & VITE MODE

The NODE_ENV=production is not supported in the .env file in Vite  
Only NODE_ENV=development is supported to create a development build of the project  
Vite has also so called Mode, depending on the .env file used for build or a serve command.  

Respectively it uses

- `.env` or `.env.development` file for development mode (serve command)
- `.env.production` file for production mode (build command)
- `.env.[mode]` file for custom mode (build command with --mode [mode] argument)

If you need some local environment variables, use `.env.development.local` file.

More about modes [here](https://vitejs.dev/guide/env-and-mode.html#modes)  

To make use of it in your code, you can use `import.meta.env.MODE` variable.

```javascript
if (import.meta.env.MODE !== 'production') {
  console.log('Not the production mode');
}
```

<br>

### VITE_APP_*

Use `VITE_APP_` prefix to expose environment variables to your app  

```bash
VITE_APP_API_URL=https://api.example.com
```
