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
      friendsClickedOn: []
    }
    this.handleClick = this.handleClick.bind(this)
  }



  handleClick = (id) =>{
    this.setState((prevState) =>{
      const mappingFriendsClickedOn = prevState.friendsClickedOn.map((friend)=>{
        if(id === friend){
          return(
            alert("sorry but you have selected this friend before, you loose")
          )
        }
      })
      prevState.friendsClickedOn.push(id)
      return{
        friendsClickedOn: prevState.friendsClickedOn
      }
    } )
    setTimeout(()=>{console.log(this.state.friendsClickedOn);}, 500)
  }



  render(){
    // console.log(this.state.friends)
    const FriendInfo = this.state.friends.map(
      (friend) => {
        return(<FriendCard key={friend.id} image={friend.image} id={friend.id} name={friend.name} handleClick={this.handleClick}/>)
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
