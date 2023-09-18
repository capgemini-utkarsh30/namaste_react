import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Construcor");
  }

  componentDidMount() {
    console.log("Parent Did Mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is a Namaste React Series</h2>
        <UserClass name="Utkarsh (class)" />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is a Namaste React Series</h2>
//       <UserClass name="Utkarsh (class)" />
//     </div>
//   );
// };

export default About;
