import React from 'react';
import './App.css';
//import { connect } from 'react-redux';
//import actions from './actions';


function App({char, searchTerm, searchTermChanged}) {
  return (
    <section>
      <div id="header">
        <h1>DC Superheroes</h1>
        <h3>A List of Major DC Superheroes</h3>
      </div>
      <form>
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={e => searchTermChanged(e.target.value)}
          />
        </div>
      </form>

      <table>
        <thead>
          <tr style={{textAlign: 'center'}}>
            <th>Name</th>
            <th>Alter Ego</th>
            <th>First Appearance in</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>                   
        {
          char.map(curChar => (
            <tr key={curChar.name}>
              <td>{curChar.name}</td>
              <td>{curChar.alter_ego}</td>
              <td>{curChar.first_appearance}</td>
              <td><img src={require(`../superhero/images/View/${curChar.name}.png`)} alt='hero' /></td>
            </tr>
          ))          
        }      
        </tbody>
      </table>
    </section>
  );
}

export default App;
//export default connect(store => store, actions)(App);