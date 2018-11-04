import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
//import {createStore} from 'redux';
//import char from '../src/superhero/reducers';
//import App from './superhero/App';
import Provider from '../src/superhero2/Provider';
import Consumer from '../src/superhero2/Consumer';
import App from './superhero2/App';
//import './index.css';
//import './calculator/index.css';
//import './emojii-search/index.css';
//import './R101Collapse/scss/app.css';
//import App from './R101Collapse/js/App';
//import App from './ShoppingList/App';
//import App from './calculator/component/App';
//import App from './emojii-search/App';
//import App from './products/App';
//import App from './tictactoe/App';
//import App from './tempcalc/App';
//import App from './App';

// This is used for Ract Native apps
//ReactDOM.render(<App />, document.getElementById('root'));

//This is used for React Redux app  

// const store = createStore(char); 

// ReactDOM.render(
//     <Provider store={store}>
//       <App />    
//     </Provider>,
//     document.getElementById('root')
//   );

//This is used for React Context API

ReactDOM.render(
    <Provider>
      <Consumer>
        <App />
      </Consumer>
    </Provider>,
    document.getElementById('root')
  );
