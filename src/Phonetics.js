import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div className="phonetic-text">{props.data.text}</div>
      <a
        className="phonetic-audio"
        href={props.data.audio}
        target="_blank"
        rel="noreferrer"
        title="listen to phonetic"
      >
        🔊
      </a>
    </div>
  );
}
