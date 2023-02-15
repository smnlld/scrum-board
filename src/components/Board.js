import React from "react";

export const  Board = () => {
  return (
    <>
      <table>
        <thead>
            <tr>
                <th>PENDING</th>
                <th>COMPLETED</th>
                <th>ONGOING</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Event 1 <br/>
                    Desc 1
                    </td>
                <td>
                    Event 2 <br/>
                    Desc 2
                    </td>
                <td>
                    Event 3 <br/>
                    Desc 3
                    </td>
            </tr>
        </tbody>
      </table>
    </>
  );
}
