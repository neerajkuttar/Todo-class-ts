import React, { ReactNode } from "react";

type props = {
    name: String;
}
class Car extends React.Component<props> {
    render() {
      return <h2>Hi, I have a {this.props.name} Car!</h2>;
    }
  }

  export default Car ;

