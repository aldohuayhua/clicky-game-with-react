import React from 'react';
import './App.css';
import friends from "./friends.json"
import FriendCard from './components/FriendCard/index.js';
import Wrapper from "./components/Wrapper/index.js";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      friends : friends,
      score: 0,
      topScore: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.shuffleData = this.shuffleData.bind(this)
    // this.resetGame = this.resetGame.bind(this);
  }

  componentDidMount(){
    this.setState({friends: this.shuffleData(this.state.friends)})
  }

  shuffleData = friends =>{
    let i = friends.length - 1;
    while (i > 0){
      const j = Math.floor(Math.random() * (i+1));
      const temp = friends[i];
      friends[i]= friends[j];
      friends[j]= temp;
      i--
    }
    return friends
  }

  handleClick = (id) =>{

    this.setState((prevState)=>{
      const newArray = prevState.friends.map((friend)=>{
        if(friend.id === id){
          if(friend.clickedOn){
            // alert("sorry this friend has already been clicked on you lose")
            return this.resetGame()
          }else{
            return{
              ...friend,
              clickedOn: true
             }
          }
        }else{
          return friend
        }
      })
      return {
        friends : newArray
      }
    })
    // setTimeout(()=>{console.log(this.state.friends);}, 500)
    
  }

  resetGame(){
    console.log("i should now reset state for all friends.clickedOn to false")
    this.setState((prevState)=>{
    const resetData = prevState.friends.map((item) => {
      console.log(item)
      return ({ ...item, clickedOn: false })
    })
    // console.log(resetData)
    return {
      friends : resetData
    }
    })
  }

  render(){
    const FriendInfo = this.state.friends.map(
      (friend) => {
        return(<FriendCard 
          key={friend.id} 
          id={friend.id} 
          image={friend.image} 
          clickedOn={friend.clickedOn} 
          handleClick={this.handleClick}/>)
      }

    )
    return (
      <Wrapper>
        {/* <h1 className="title">Clicky Game</h1> */}
        {FriendInfo}
      </Wrapper>
    );
  }
}


export default App;
