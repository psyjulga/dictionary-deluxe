import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>{definition.definition}</strong> <br />
              <Example data={definition.example} /> <br />
              <Synonyms data={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
