import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.data.partOfSpeech}</h4>
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
