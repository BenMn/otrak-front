# Material UI React

## Définir un thème général avec `createMuiTheme`

L'utilisation de la méthode `createMuiTheme` permet de mettre en place un thème général pour l'app.
On crée un fichier `theme.js` dans `src/styles/materialUi/materialUiTheme`.
Ce fichier sert à modifier les prorpiétés du thème de base fournies par Material UI.

```js
// src/styles/materialUi/materialUiTheme/theme.js
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // Ici on redéfini les couleurs de la palette de base
  palette: {

    primary: {
      light: '#4d4d4d',
      main: '#212121',
      dark: '#171717',
      contrastText: '#fff',
    },

    secondary: {
      light: '#c54949',
      main: '#b71c1c',
      dark: '#801313',
      contrastText: '#fff',
    },
  },
});

export default theme;

```

Une fois le thème redéfini, on l'applique à l'ensemble de l'application via le composant `<MuiProvider theme={theme}>`.

```js
// src/components/App/index.js
import React from 'react';

import Component from 'src/components/Component';
import AnotherComponent from 'src/components/AnotherComponent';
// on importe le thème défini dans theme.js
import theme from 'src/styles/materialUi/materialUiTheme/theme';
import { MuiThemeProvider } from '@material-ui/core';

const App = () => (
  // on passe le theme en props
  <MuiThemeProvider theme={theme}>
    <div id="app">
    <Component />
    <AnotherComponent />
    </div>
  </MuiThemeProvider>
);

export default App;
```

## Réécrire le style des composants fournis avec `styled`

Material UI nos donne accès à des composants ayant un style par défault.

`styled` est une methode qui permet d'appliquer une couche de style supplementaire qui viendrons écrasser le style de base de Matérial UI.

Nous avons crée un fichier `styles.js` dans un dossier `/src/styles/materialUi/materialUiStyles`.

Exemple:

```js
// src/styles/materialUi/materialUiStyles/styles.js

/* eslint-disable import/prefer-default-export */

// import de la méthode styled
import { styled } from '@material-ui/styles';

// import du composant vanilla de Material UI
import Button from '@material-ui/core/Button';

export const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});
```

On appelle ensuite simplement notre composant customisé dans la page de notre choix.

```js
import React from 'react';
import { MyButton } from 'src/styles/materialUi/materialUiStyles/styles';

const Search = () => (
  <>
    <MyButton>Je suis un bouton custom !</MyButton>
  </>
);

export default Search;

```
