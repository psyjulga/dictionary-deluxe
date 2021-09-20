import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <small className="Footer mb-3">
      <a
        href="https://github.com/psyjulga/dictionary-deluxe"
        target="_blank"
        rel="noreferrer"
        className="github-link"
        title="open source code on github"
      >
        Open-source code
      </a>
      🐞<span className="signature">by Julia Bestgen</span>💃
    </small>
  );
}
