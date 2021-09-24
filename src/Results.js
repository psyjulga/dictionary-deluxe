import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <section>
          <h3 className="mb-3 mt-3 d-inline"> {props.data.word} </h3>

          {props.data.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics data={phonetic} />
              </div>
            );
          })}
        </section>
        <br />
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
