import React from "react";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <div className="Synonyms">
        {props.data.map(function (synonym, index) {
          return <span key={index}>•{synonym}&nbsp; </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
