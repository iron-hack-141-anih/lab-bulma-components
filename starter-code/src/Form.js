import React from "react";
// import "bulma/css/bulma.css";

export default function Form({ label }) {
  return (
    <div>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input className="input" type="text" placeholder={label} />
        </div>
      </div>
    </div>
  );
}
