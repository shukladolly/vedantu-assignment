import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { getPersonalProfile } from "../actions/personalAction";
class PersonalInfo extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    };
  }
  componentWillMount() {
    this.props.getPersonalProfile();
  }

  render() {
    console.log("this.props.profile ", this.props.profile);
    return (
      <div className="flex-container">
        <div>
          <img
            style={{ height: "200px" }}
            alt=""
            src={this.props.profile.avatar_url}
          />
        </div>
        <div>
          <h2>{this.props.profile.name}</h2>
        </div>
        <div>{this.props.profile.login}</div>
        <div>{this.props.profile.bio}</div>
        <button>Edit Bio</button>
        <div>{this.props.profile.company}</div>
        <div>{this.props.profile.login}</div>
        <div>India</div>
        <div>supreetsingh.247@gmail.com</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPersonalProfile: () => {
      dispatch(getPersonalProfile());
    }
  };
};

const mapStateToProps = state => {
  console.log("state", state);
  return {
    profile: state.profile.profileInfo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfo);
