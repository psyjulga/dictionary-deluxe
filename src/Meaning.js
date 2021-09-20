import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition} <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
