import React from "react";

const Event = ({ event }) => {
  return (
    <div>
      <table>
        <tr>
          <h1>
          <th>COMPLETED</th>
          <th>TO DO</th>
          <th>NEW TASK</th>
          </h1></tr>
        <tr>
          <td>
            <h3>{event.Title}</h3>
            <p>{event.Description}</p>
            <p>{event.Status}</p>
          </td>
        </tr>
        <tr>
          <td>
            Hello
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Event;
