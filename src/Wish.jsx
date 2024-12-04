import React from 'react'

function Block(props) {
    return(
    <div>
        <div className="block" id="big_block1">
            <img className="img2" src={props.img} alt="image"/>
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
    </div>
    )
}

export default Block