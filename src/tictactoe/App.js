import React from 'react';
import './App.css';
import sortbtn from './updownarrow.png' // relative path to image 

function Square(props) {   
  return (
    <button className="square" onClick={props.onClick}>
     {props.value}  
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  
  CreateMovesList = () => {
    var counter = 0;
    let list = [];
    // Outer loop to create parent div tags
    for (let i = 0; i < 3; i++) {
      let children = []
      // Innner loop to create children div tags
      for (let j = 0; j < 3; j++) {
        children.push(<a accessKey={counter} key={counter}>{this.renderSquare(counter)}</a>);
        counter = counter + 1;
      }
      // Create the parent add add the children
      list.push(<div className="board-row" key={i}>{children}</div>)
    }
    return list
  }

  render() {
    return (
      <div>
        {this.CreateMovesList()}
      </div>      
    )
  }
}

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares          
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {   
   this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0       
    });
  }

  sortMoves(moves) {
    moves.sort((a, b) => a - b).reverse()
    this.sortedMoves = moves;          
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const winners = fuckReact(current.squares);

    console.log("winners: ", winners);
                    
    var moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';        
      return (
        <li className="moves" key={move}>
          <button 
          onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );     
    });

    if (this.sortedMoves) {
      moves = this.sortedMoves;     
    }

    let status;
    if (winner) {
      status = "Winner: " + winner;  
      for (let i = 0; i < 3; i++ ){
        var row = document.getElementsByClassName("board-row")[i].children; 
        console.log("row: ", row);      
        for (let j = 0; j < row.length; j++) {
          if (row[j].accessKey === winners[0].toString() ||
              row[j].accessKey === winners[1].toString() ||
              row[j].accessKey === winners[2].toString()) {
            //console.log("found a row.accessKey match of: ", row[j].accessKey);
            //document.body.a.setAttribute("style", "background-color: blue;");
          }      
        }    
      }
              
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            winners 
          />
        </div>
        <div className="game-info">
          <h1>React Tutorials - Tic Tac Toe Game</h1>
          <div>{status}</div>
          <p><b>Moves:</b>
          <input type="image" src={sortbtn} alt="Submit" width="36" height="36"
          onClick={ () => this.sortMoves(moves) }/></p>        
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }  
}


// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      let winners = [];
      winners = lines[i];
      return  (winners, squares[a]);
    }
  }
  return null;
}

function fuckReact(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      let winners = [];
      winners = lines[i];
      return  winners;
    }
  }
  return null;
}

// ========================================

export default App;
  