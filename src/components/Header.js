import React from "react";

export const Header = ({onAdd}) => {
  return (
    <>
      <h1>SCRUM BOARD </h1>
      <p>BY: <strong>Simon Ullado</strong></p>
      <button onClick={onAdd}> Add New Event</button>
      
    </>
  );
};
