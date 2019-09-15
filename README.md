# Tracktik challenge

## General infos

- App is deployed on Heroku and liveDemo can see at [this address][heroku]. As it is Heroku, be patient cause it can be long if the app is asleep ^^
- UI has been partially done with [Material UI lib][mat-ui]
- Unit tests have been done with [Jest][jest] and [Enzyme][enzyme]
- a [local json][json-server] server is available and can be run from the server folder with `json-server --watch db.json` to simulate API calls

For unit testing, I was only able to test the Components generation and create snapshots for comparison. For some reasons, I wasn't able to simulate DOM manipulation with Enzyme, as node targeting was always returning empty, even if debugging the test would show me the generated markup from Enzyme shallow or react-renderer create function... Have it been working, I would have created mock functions with [Jest spies][jest-spies] and would have tested it with [Expect methods][expect-methods]. \
Also, I decided to play a little with [React Hooks][react-hooks] and worked with **useEffect** and **useState**. As a consequence, there are no Class Components in the project, only Functional Components with state. \
As for the UI, I went for [Material UI lib][mat-ui] but it created a lot of extra markup and some components have become pretty big because of that. On a small project like this, I'd choose [Evergreen UI][evergreen-ui] next time as it is more lightweight in my opinion.

---

## Available Scripts

This project was bootstrapped with [Create React App][create-react-app].

### `npm install`

Install all necessary packages ans stuff

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000][local] to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

---

## Editor configuration

project runs [ESlint][eslint] and [Prettier][prettier]. \
In VSCode, install the respective plugins and add the following code to your editor JSON settings to activate auto-save and automatic linting

```json
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": [
    "js"
  ],
  "files.autoSave": "onFocusChange"
```

[heroku]: https://damp-basin-31817.herokuapp.com/
[create-react-app]: https://github.com/facebook/create-react-app
[local]: http://localhost:3000
[mat-ui]: https://material-ui.com/
[jest]: https://jestjs.io/
[enzyme]: https://github.com/airbnb/enzyme
[eslint]: https://eslint.org/
[prettier]: https://prettier.io/
[json-server]: https://github.com/typicode/json-server
[jest-spies]: https://jestjs.io/docs/en/mock-function-api.html
[expect-methods]: https://jestjs.io/docs/en/expect#tohavebeencalled
[react-hooks]: https://fr.reactjs.org/docs/hooks-intro.html
[evergreen-ui]: https://evergreen.segment.com
