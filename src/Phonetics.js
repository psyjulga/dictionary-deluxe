import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div className="written-phonetic">{props.data.text}</div>
      <a href={props.data.audio} target="_blank" rel="noreferrer">
        🔊
      </a>
    </div>
  );
}
