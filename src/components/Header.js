import React from "react";

export const Header = ({onAdd}) => {
  return (
    <>
      <h1>SCRUM BOARD </h1>
      <button onClick={onAdd}> Add New Event</button>
      <p>Simon Ullado</p>
    </>
  );
};
