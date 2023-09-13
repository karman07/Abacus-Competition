import React, { useState } from 'react'
import Entry from './Main/Entry'
import { Link } from 'react-router-dom';

const Cardhome = (props) => {

  //const [title, setTitle] = useState("");

  // const handleClick = () =>{
  //   <Entry type={props.title}/>
  // }

  return (
    <div>
    <div className="card border-success mb-3">
        <div className="card-header bg-success text-white">{props.heading}</div>  
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <Link to={`/entry/${props.title}`} className="btn btn-success">
            Start
          </Link>
        </div>
    </div>
</div>
  )
}

export default Cardhome
