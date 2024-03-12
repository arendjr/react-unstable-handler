# React Unstable Handlers

This repo reproduces a soundness error in the ESLint rule for verifying
React exhaustive dependencies. https://github.com/facebook/react/issues/28539

The app shows a counter and three buttons: one to increment, one to decrement,
and one to alternate between incrementing and decrementing. The alternate
button is broken, despite no warnings from the ESLint rule.

## Usage

* Run `yarn` to install the necessary dependencies.
* Run `yarn start` to run the app.
* Witness the "Alternate" button is broken (it only increments). 
* Run `yarn lint` to see if there are ESLint errors (there aren't any unless you make changes).
* Rename `src/App.fixed.js` to `src/App.js` to see the intended behavior (it alternates between incrementing and decrementing).
