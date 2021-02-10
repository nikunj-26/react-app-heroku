import React from "react";
import "./sheets.css";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.eventName}</h1>
      <p>Start Time : {props.startTime}</p>
      <p>End Time : {props.endTime}</p>
      <p>Location : {props.location}</p>
    </div>
  );
}

export default Note;
