import React from "react";

export default function Example(props) {
  if (props.data) {
    return (
      <div className="Example">
        <em>"{props.data}"</em>
      </div>
    );
  } else {
    return null;
  }
}
