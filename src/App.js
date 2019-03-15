import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
// import store from "../store";
import { getUserProfile, getProjectProfile } from "./actions/profileAction";

import PersonalInfo from "./components/PersonalInfo";
import ProjectInfo from "./components/ProjectInfo";

class App extends Component {
  componentWillMount() {
    this.props.getUserProfile();
    this.props.getProjectProfile();
  }

  render() {
    return (
      <div className="App">
        {/* <div>{this.props.profile.login}</div> */}
        <div className="flex-container-main">
          <div className="column">
            <PersonalInfo info={this.props.profile} />{" "}
          </div>
          <div className="column">
            <ProjectInfo info={this.props.project} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: () => {
      dispatch(getUserProfile());
    },
    getProjectProfile: () => {
      dispatch(getProjectProfile());
    }
  };
};

// const mapStateToProps = state => {
//   console.log("state", state);
//   return {
//     profile: state.profile.profileInfo
//   };
// };

const mapStateToProps = state => {
  console.log("state", state);
  return {
    profile: state.profile.profileInfo,
    project: state.profile.projectInfo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
