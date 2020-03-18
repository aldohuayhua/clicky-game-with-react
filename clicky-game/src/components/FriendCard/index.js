import React from "react";
import "./style.css"

function FriendCard(props) {
    console.log(props)
    return (
        <div className="conatiner">
            <div className="card">
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
                {/* <span className="remove" onClick={() => { props.handleChange(props.id) }} >𝘅</span> */}
            </div>
        </div>
    )
}

export default FriendCard
