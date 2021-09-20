import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.data);

  if (props.data) {
    return (
      <div className="Results">
        <h2 className="mb-3 mt-3"> {props.data.word} </h2>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
