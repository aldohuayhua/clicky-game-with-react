import React from 'react';
import './App.css';
import friends from "./friends.json"
import FriendCard from './components/FriendCard/index.js';
import Wrapper from "./components/Wrapper/index.js"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      friends : friends
    }
    // this.FriendInfo = this.FriendInfo.bind(this)
  }

  // FriendInfo(){
  //   return(
  //     this.state.friends.map(
  //       function x(friend){
  //         return(<FriendCard key={friend.id} name={friend.name} image={friend.image} />)
  //       }
  //     )
  //   )
  // }

  render(){
    console.log(this.state.friends)
    const FriendInfo = this.state.friends.map(
      function x(friend){
        return(<FriendCard key={friend.id} image={friend.image}/>)
      }
    )
    return (
      <Wrapper>
        {/* <h1 className="title">Clicky Game</h1> */}
        {/* <FriendCard /> */}
        {/* {this.FriendInfo()} */}
        {FriendInfo}
      </Wrapper>
    );
  }
}


export default App;
