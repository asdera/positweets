//define a class component
// import React from "react";
// export class Dish extends React.Component{
//   constructor(props){
//     //call the function super - calls the constructor of parent class
//     super(props);
//     //referencing everything in here. we want to initialize state
//     this.state = {
//       count:0
//     }
//   }

//   // must return markup to be a component
//   render(){
//     return(
//       <div className="Dish">
//         <h2>{this.props.name}</h2>
//         <p>Count: {this.state.count}</p>

//       </div>
//     );
//   }
// }

//make a function not an object!
import React, { useState } from "react";
export const Dish = (props) => {
  const [count, setCount] = useState(0);

  const addDish = () => {
    setCount(count + 1);
  };

  return (
    <div className="Dish">
      <h2
        style={{
          fontSize: "1vh",
        }}
      >
        @{props.name}
      </h2>
      <p>{props.tweetText}</p>
      <h3>Count: {count}</h3>
      <button className="clap" onClick={addDish}>
        {" "}
        Clap👏
      </button>
    </div>
  );
};
