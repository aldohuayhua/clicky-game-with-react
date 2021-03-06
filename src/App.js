import React from 'react';
import './App.css';
import friends from "./friends.json"
import FriendCard from './components/FriendCard/index.js';
import Wrapper from "./components/Wrapper/index.js";
import Nav from "./components/Nav/index.js"
import Header from "./components/Header/index.js"



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: friends,
      score: 0,
      topScore: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.shuffleData = this.shuffleData.bind(this);
  }

  componentDidMount() {
    this.setState({ friends: this.shuffleData(this.state.friends) })
  }

  shuffleData = friends => {
    let i = friends.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
      i--
    }
    return friends
  }

  handleClick = (id) => {
    let guessedCorrectly = false;
    const newData = this.state.friends.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        console.log(newItem)
        if (newItem.clickedOn === false) {
          newItem.clickedOn = true;
          guessedCorrectly = true;
        }
      }
      return newItem
    })
    guessedCorrectly ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData);
  }

  handleIncorrectGuess = (data) => {
    this.setState({
      friends: this.resetGame(data),
      score: 0
    });
  }

  handleCorrectGuess = (data) => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);
    console.log("nice, ")
    this.setState({
      friends: this.shuffleData(data),
      score: newScore,
      topScore: newTopScore
    })
  }
  resetGame = (data) => {
    const resetGame = data.map(item => ({ ...item, clickedOn: false }));
    return this.shuffleData(resetGame);
  }

  render() {
    const FriendInfo = this.state.friends.map(
      (friend) => {
        return (<FriendCard
          key={friend.id}
          id={friend.id}
          image={friend.image}
          handleClick={this.handleClick} 
          />)
      }

    )
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Wrapper>
          {FriendInfo}

        </Wrapper>
      </div>
    );
  }
}


export default App;
