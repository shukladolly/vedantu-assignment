import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
// import SearchInfo from "../components/SearchInfo";
import { getProjectProfile, updateProjectInfo } from "../actions/projectAction";
class ProjectInfo extends Component {
  searchFiltered = arr => {
    this.setState({
      filterArr: arr
    });
  };

  constructor(props) {
    var arrKeywords = [];
    super(props);
    this.state = {
      projectInfo: []
    };
  }

  handleChange = e => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.projectInfo;
      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.project;
    }
    this.setState({
      projectInfo: newList
    });
    //  this.props.updateProjectInfo(newList);
  };

  componentWillMount() {
    this.props.getProjectProfile();
    // this.setState({
    //   projectInfo: this.props.project
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.project != this.props.project) {
      this.setState({
        projectInfo: this.props.project
      });
    }
  }

  render() {
    let projectInformation = this.state.projectInfo;

    const projectInfo =
      //    this.state.projectInfo &&
      projectInformation &&
      projectInformation.map((d, index) => (
        <div className="project-info">
          <h2 className="project-title">{d.name}</h2>
          <label>{d.description}</label>
          <hr />
        </div>
      ));
    return (
      <div>
        <div>
          <div>
            <ul class="nav">
              <li>
                <a>Overview</a>
              </li>
              <li>
                <a>Repositories</a>
              </li>
              <li>
                <a>Stars</a>
              </li>
              <li>
                <a>Followers</a>
              </li>
            </ul>
            <hr />
          </div>
          <div>
            <input
              className="search"
              align="left"
              type="text"
              onChange={e => this.handleChange(e)}
              placeholder="Search..."
            />
            <select>
              <option value="grapefruit">Type: All</option>
            </select>
            <select>
              <option value="grapefruit">Language: All</option>
            </select>
          </div>
        </div>
        {projectInfo}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProjectProfile: () => {
      dispatch(getProjectProfile());
    },
    updateProjectInfo: newList => {
      dispatch(updateProjectInfo(newList));
    }
  };
};

const mapStateToProps = state => {
  console.log("state of project container", state);
  return {
    project: state.project.projectInfo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectInfo);
