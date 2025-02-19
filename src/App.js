import React, { useEffect, useState } from "react";
import axios from "axios";

const TestAPI = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://deloyapp-production.up.railway.app/")
      .then((response) => {
        setMessage(response.data); // API trả về chuỗi "Hello World"
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>xin chào tôi là tvuux</h2>
      {error ? <p>Lỗi: {error}</p> : <p>{message}</p>}
    </div>
  );
};

export default TestAPI;
