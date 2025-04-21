# Hudddle.io

This is a `React + Vite + Typescript + Tailwindcss` project.

## Getting Started


#### First clone the repo

```bash
git clone https://github.com/Hudddle-io/frontend
```

#### Install all dependencies

```bash
npm install
```

#### Run the development server:

```bash
npm run dev
```

# Commit Standards

## Branches

- **dev** -> pr this branch for everything `frontend` related
- **main** -> **dont touch** this branch, this is what is running in production.

## Contributions

Hudddle.io welcomes contributions exclusively from those who have been granted access to the repository. If you're working on an unassigned feature or fixing a bug you didn't create, please consider creating an issue or commenting to inform us about your work beforehand, to prevent overlapping efforts.

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/Hudddle-io/frontend`.
2. Open your terminal & set the origin branch: `git remote add origin https://github.com/Hudddle-io/frontend`
3. Pull origin `git pull origin dev`
4. Create a new branch for the task you were assigned to, eg `TaskID/(Feat/Bug/Fix/Chore)/Ticket-title` : `git checkout -b Task1/Feat/login-form`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull origin dev`.
8. Push changes to your new branch, run `git push -u origin Task1/Feat/login-form`.
9. Create a pull request to the `dev` branch not `main`.
10. Ensure to describe your pull request and add a screenshot of your screen.
11. > If you've added code that should be tested, add some test examples.

# Merging

Under any circumstances should you merge a pull requests on a specific branch to the `dev` or `main` branch

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify , frontend or test files                                                    |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Update README file` := `chore` is used because the commit didn't make any changes to the , frontend or test folders in any way.
- `feat: Add plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.

### Note : Commit messages
- Use the present tense ("Add feature" not "Added feature")

## Code Explanation

### API Calls

A separate folder called `api` which contains `api.ts` file was created to handle any outgoing or incoming http request/response. 

### Static Data

A folder named `data` has been created, containing the `data.ts` file, to manage all static objects. Ensure that all static objects are defined within `data/data.ts`, and the mapping can be implemented within your components.

### Typescript types

A folder named `@types` outside the `src` folder has been created and it contains a `@types.ts` to handle all the typescript types.

### Shared Components

Develop all shared components within the `components/shared` directory.

### Layout Components

Construct all layout components within the `components/layouts` directory.

## Auth Folder Guidelines

### Overview

The `auth` folder is dedicated to handling authentication-related functionalities. It includes files and subdirectories that manage user authentication, authorization, and related processes.

## Structure

The suggested structure for the `auth` folder is as follows:

auth/
|-- index.js
|-- utils/
| |-- authUtils.js
|-- components/
| |-- AuthForm.js
| |-- ...
|-- hooks/
| |-- useAuth.js
|-- services/
| |-- authService.js


## auth usage
Ensure that your authentication logic is modular and can be easily integrated into different parts of the application. Follow best practices for security and user data protection.
Feel free to adapt this structure based on your project's specific requirements and coding conventions.

> ❗❗Do not create any custom http calls inside a page or components. Whatever calls that need to be processed by the server should be called within the `ap/api.ts` file.
>❗❗Remember to properly document your code with readable comments


## Code Style Guidelines
When contributing to this project, please adhere to the following coding guidelines for writing components. We encourage the use of either normal function or arrow function syntax for component declarations. Additionally, avoid using class syntax to define components.

### Component Declaration
1. Use Normal Function or Arrow Function
Prefer using normal function or arrow function syntax when declaring components. This aligns with modern JavaScript conventions and enhances code readability.

Example:
```js
// Good: Arrow Function
const MyComponent = () => {
};
export default MyComponent;

// Also Good: Normal Function
function AnotherComponent() {
}
export default MyComponent;
```

## Avoid Using Class Syntax
Avoid using class syntax for component declaration. Instead, opt for function components as they offer a more concise and readable way to define components in modern JavaScript.

Example:
```js
// Avoid: Class Syntax
class DeprecatedComponent extends React.Component {
}
```
