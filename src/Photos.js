import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.data) {
    return (
      <section className="Photos">
        <div className="row">
          {props.data.map(function (photo, index) {
            return (
              <div className="col-6" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noreferrer"
                  title="link to original page"
                >
                  <img
                    className="img-fluid"
                    src={photo.src.landscape}
                    alt="pexels"
                  />
                </a>
              </div>
            );
          })}
        </div>
        <p className="pexels-hint">
          Photos from{" "}
          <a
            href="http://www.pexels.com"
            target="_blank"
            rel="noreferrer"
            title="pexels.com"
          >
            {" "}
            pexels.com
          </a>{" "}
        </p>
      </section>
    );
  } else {
    return null;
  }
}
