import React, { Component } from 'react';
import '../R101Collapse/scss/app.css';
//import PropTypes from 'prop-types';
//import './App.css';

//const Headline = () => {
//    return  <h2 className="title">Welcome to the React World!</h2>
//}

//const Greeting = (props) => {
//    const {name, age} = props;
//    return  <p>You will love it {name} who is soon turning {age} </p>
//}



class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            buyItems: ['milk', 'eggs', 'fruit'],
            message: ''
        }
    }

    addItem(e) {
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.newItem.value;

        const isOnTheList = buyItems.includes(newItem);
        if(isOnTheList) {
            this.setState({
                message: 'This item is already on this list'
            })
        }
        else {
            newItem !== '' && this.setState({
                buyItems: [...this.state.buyItems, newItem],
                message: ''
            })            
        }

        this.addForm.reset();
    }

    removeItem(item) {
        const newBuyItems = this.state.buyItems.filter(buyItem => {
            return buyItem !== item;
        })
        
        this.setState({
            buyItems: [...newBuyItems]
        })

        if(newBuyItems.length === 0) {
            this.setState({
                message: 'No items on your list. Add some. '
            })
        }

    }

    clearAll() {
        this.setState({
            buyItems: [],
            message: 'No items on your list. Add some. '
        })            
    }

    render() {
        const {buyItems, message} = this.state;
        return (
        <div className="App">
          <header className="App-header">
            <h2>React Examples</h2>            
            <h3>Shopping List Example</h3>
            <form  ref={(input) => {this.addForm = input}} className="form-inline" onSubmit={(e)  => {this.addItem(e)}}>
              <div className="form-group">
                <label className="sr-only" htmlFor="newItemInput">Add Item</label>
                <input ref={(input) => {this.newItem = input}} type="text" placeholder="Bread" className="form-control" id="newItemInput" />
              </div>
              <button type="submit" className="btn btn-pri">Add</button>
            </form>  
          </header>   
          <div className="content">
            {
              (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
            }  
            {
             buyItems.length > 0 &&      
            <table className="table">
              <caption>Shopping List</caption>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Item</th>
                      <th>Action</th>
                  </tr>    
              </thead>
              <tbody>
                {
                    buyItems.map(item => {
                        return (
                        <tr key={item}>
                            <th scope="row">1</th>
                            <td>{item}</td>
                            <td className="text-right">
                                <button onClick={(e) => this.removeItem(item)} type="button" className="btn btn-default btn-sm">Remove
                                </button>
                            </td>
                         </tr>  
                        ) 
                    })
                }
              </tbody>
              <tfoot>
                  <tr>
                      <td colSpan="2">&nbsp;</td>
                      <td className="text-right">
                        <button onClick={(e) => {this.clearAll()}} className="btn btn-default btn-sm">Clear List</button>
                      </td>
                  </tr>    
              </tfoot>    
            </table>
            }
          </div>
        </div>
      );
    }
}

  //Greeting.propTypes = {
  //    name: PropTypes.string,
  //    age: PropTypes.number
  //}
  
  export default App;
  