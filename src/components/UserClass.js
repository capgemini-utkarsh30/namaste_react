import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child Construcor");

    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    console.log("Child Did Mount");

    const data = await fetch("  https://api.github.com/users/utkarsh3008");
    const json = await data.json();

    console.log(json, "userData");

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component  did update ");
  }
  render() {
    console.log("Child Render");

    const { name, location, avatar_url, email } = this.state.userInfo;

    const increaseCount = () => {
      this.setState({
        count: count + 1,
      });
    };

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location : {location}</h2>
        <h3>Occupation: Frontend Developer</h3>
        <h4>Contact: utkarshsingh.3008@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
