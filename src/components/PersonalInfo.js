import React, { Component } from "react";
import "../App.css";
class PersonalInfo extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    };
  }

  // componentWillMount() {
  //   fetch("https://api.github.com/users/supreetsingh247")
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({ results: response });
  //     });
  // }
  render() {
    return (
      <div className="flex-container">
        <div>
          <img
            style={{ height: "200px" }}
            alt=""
            src={this.props.info.avatar_url}
          />
        </div>
        <div>
          <h2>{this.props.info.name}</h2>
        </div>
        <div>{this.props.info.login}</div>
        <div>{this.props.info.bio}</div>
        <button>Edit Bio</button>
        <div>{this.props.info.company}</div>
        <div>{this.props.info.login}</div>
        <div>India</div>
        <div>supreetsingh.247@gmail.com</div>
      </div>
    );
  }
}

export default PersonalInfo;
