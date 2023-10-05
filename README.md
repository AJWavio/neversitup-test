# Neversitup Test Project

## Pre requisite
NodeJS v15+

## Install dependency
```bash
$ npm install
```

## Run the app
```bash
# ts-node (no compile)
$ npm run start:dev

# build project
$ npm run build

# run build version
$ npm run start
```

## Unit test
```bash
$ npm run test
```

## Project structure
Each answer and it's unit test file are contain within their corresponding directory.

    .
    ├── count-smileys                       # Count smiley module
    │   ├── count-smileys.test.ts
    │   └── count-smileys.ts
    ├── find-odd                            # Find odd module
    │   ├── find-odd.test.ts
    │   └── find-odd.ts
    ├── permutation                         # Permutation module
    │   ├── permutation.test.ts
    │   └── permutation.ts
    ├── jest.config.ts                      # Jest configuration file
    ├── tsconfig.json                       # Typescript configuration file
    ├── package.json
    ├── package-lock.json
    └── README.md

## Naming conventions

### Function names
- Use camelCase for function names.
- Function name should start with verb (ex. find...(), get...()).

### Variable names
- Use camelCase for variable names.
- Use meaningful and descriptive names (Using `i` as loop index are acceptable).
- Standard built-in objects variable should have type postfix (ex. userArr, productMap, permutationsSet).

## Code styles

### Indentation and spacing
- Use a consistent indentation of four spaces.
- Use spaces around binary operators and after commas.
- Use space after `,` in function argument.
- Use padding line around loop.
- Use padding line before function return (One line function are exception).
- Use padding line before `throw` statement.

### Curly braces
- Use the "K&R" style with braces on the same line.