# FitLit

## Abstract

This is the pair project from Mod 2 at the Turing School for Software and Design. The goal was to create an activity-tracking app using provided data sets. Other learning goals included implementing a robust testing suite, implementing ES6 classes, and using object and array prototype methods to perform data manipulation. The project specification can be found [here](https://frontend.turing.io/projects/fitlit.html).

## Contributors

- Liliana Weimer: https://github.com/lilianaweimer
- Dougie ? Douglas: https://github.com/DougieDev


## Setup

To view the project:
- Clone this repository
- Enter the directory
- Enter `open src/index.html` in the console

## Screenshots:
[will add these tomorrow, once we have it as complete as possible]





# FitLit Starter Kit

The details of this project are outline in [this project spec](http://frontend.turing.io/projects/fitlit.html).

## Setup

1. Within your group, decide on one person to have the project repository (repo) on their GitHub account. Then, that person should fork this repo - on the top right corner of this page, click the **Fork** button.
1. Both memebers of the group should clone down the _forked_ repo. Since you don't want to name your project "activity-tracker-starter", you can use an optional argument when you run git clone (you replace the [...] with the terminal command arguments): `git clone [remote-address] [what you want to name the repo]`
1. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` to install project dependencies.
1. Run `open src/index.html` in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page)
1. Make sure both members of your team are collaborators on the forked repo.

## Testing

There is no boilerplate for testing in this starter-kit repo. You will need to set this up yourself. However, if you ran `npm install`, then the tooling you need to start testing is already installed (`mocha` and `chai`).

## Linting Your Code

Run the command in your terminal `npm run lint` to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit, but that's ok - the linter is still running successfully.

Your linter will look only at the JavaScript files you have within the `src` and the `test` directories.

## Data Model

**Users**

```
[
  {
    "id": [number],
    "name": [string],
    "address": [string],
    "email": [string],
    "strideLength": [number - feet],
    "dailyStepGoal": [number - steps],
    "friends": [array - one-way connection to other user(s)]
  },
  ...more user data
]
```

**Activity**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numSteps": [number - steps],
    "minutesActive": [number - minutes],
    "flightsOfStairs": [number - flights]
  },
  ...more activity data
]
```

**Hydration**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numOunces": [number - ounces]
  },
  ...more hydration data
]
```

**Sleep**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "hoursSlept": [number - hours],
    "sleepQuality": [number - unitless]
  },
  ...more sleep data
]
```
