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
    )
}

export default FriendCard;
