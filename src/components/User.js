import { useState } from "react";

const User = (props) => {
  const { name } = props;

  const [count] = useState(0);
  const [count2] = useState(2);

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h2>Name: {name}</h2>
      <h3>Occupation: Frontend developer</h3>
      <h4>Contact: utkarshsingh.3008@gmail.com</h4>
    </div>
  );
};

export default User;
