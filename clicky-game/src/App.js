import React from 'react';
import './App.css';
import friends from "./friends.json"
import FriendCard from './components/FriendCard/index.js';
import Wrapper from "./components/Wrapper/index.js";
import Stringify from 'react-stringify'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      friends : friends,
      score: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick = (id) =>{

    this.setState((prevState)=>{
      const newArray = prevState.friends.map((friend)=>{
        if(friend.id === id){
          if(friend.clickedOn){
            alert("sorry this friend has already been clicked on you lose")
            return friend
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
    setTimeout(()=>{console.log(this.state.friends);}, 500)
    
  }



  render(){
    const FriendInfo = this.state.friends.map(
      (friend) => {
        return(<FriendCard key={friend.id} image={friend.image} id={friend.id} name={friend.name} clickedOn={friend.clickedOn} handleClick={this.handleClick}/>)
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
