import axios from "axios";
import React, { useEffect, useState } from "react";
import Usr from "./Usr";
import "../styles/User.css";

export default function CallingAPI() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [error]);

  return (
    <>
      <h1>Data From API</h1>
      <pre>
        {loading ? (
          <h1>Loadinnnnng...........</h1>
        ) : (
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, index) => (
                <Usr
                  key={e.id}
                  name={e.name}
                  email={e.email}
                  phone={e.phone}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        )}
      </pre>
    </>
  );
}
