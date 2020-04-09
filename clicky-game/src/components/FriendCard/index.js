import React from "react";
import "./style.css"

function FriendCard(props) {

    return (
            <img
                className="click-item"
                aria-label="click item"
                alt={props.name}
                src={props.image}
                onClick={() => { props.handleClick(props.id) }}
            />
        // <div className="conatiner">
        //     <div className="card">
        //         <div className="img-container">
        //             <img alt={props.name} src={props.image} onClick={() => {props.handleClick(props.id)}}/>
        //         </div>
        //         {/* <span className="remove" onClick={() => { props.handleChange(props.id) }} >𝘅</span> */}
        //     </div>
        // </div>
    )
}

export default FriendCard;
