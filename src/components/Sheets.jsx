import React, { useState, useEffect } from "react";
import Note from "./Note";
import Tabletop from "tabletop";

export default function Sheets() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Tabletop.init({
      key: "1MUIV2jPq83JGFEjk7UnDeoDtvUOzpHHGkITOmusewRY",
      callback: (googleData) => {
        setData(googleData);
        // console.log("Google Sheet Data ===>", googleData);
      },
      simpleSheet: true,
    });
  });

  return (
    <div>
      <h1 className="header">Event Management Data</h1>
      {/* <Note
        eventName="Kaaze"
        startTime="12:00"
        endTime="15:00"
        location="Mumbai"
      />
      <Note
        eventName="Kaaze"
        startTime="12:00"
        endTime="15:00"
        location="Mumbai"
      /> */}

      {data.map((obj, index) => {
        return (
          <Note
            key={index}
            eventName={obj.eventName}
            startTime={obj.startTime}
            endTime={obj.endTime}
            location={obj.location}
          />
        );
      })}
    </div>
  );
}
