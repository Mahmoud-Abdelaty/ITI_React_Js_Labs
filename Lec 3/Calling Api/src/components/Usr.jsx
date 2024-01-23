import React from "react";

export default function Usr(props) {
  const type = (props.index + 1) % 2 === 0 ? "even" : "odd";
  return (
    <tr className={type}>
      <td>{props.name}</td>
      <td> {props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
}
