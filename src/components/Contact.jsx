import React from "react";

class Contact extends React.Component {
  redirectToAbout = () => {
    this.props.history.push("/about");
  };

  render() {
    return (
      <>
        <h5>Contact Component</h5>
        <button onClick={() => this.redirectToAbout()}>Click Me</button>
      </>
    );
  }
}

export default Contact;
