import React, { Component } from "react";
import "../App.css";
import SearchInfo from "../components/SearchInfo";
class PersonalInfo extends Component {
  searchFiltered = arr => {
    this.setState({
      filterArr: arr
    });
  };

  constructor(props) {
    var arrKeywords = [];
    super(props);
    this.state = {
      projectInfo: [],
      filterArr: [
        "ActionsAngular",
        "bidding",
        "first-contributions",
        "FreeCodeCamp",
        "Observe",
        "pravar",
        "react-basic-pluralsight",
        "React-Redux-Boilerplate",
        "superslides",
        "vedantu",
        "walnut",
        "wizard"
      ]
    };
  }

  render() {
    var arrKeywords = [];
    this.props.info.forEach(function(arrayItem) {
      arrKeywords.push(arrayItem.name);
    });
    console.log("arrKeywords ", arrKeywords);

    console.log("hhh", this.props.info);
    var filteredInfo = this.props.info;
    console.log("this.state.filterArr", this.state.filterArr);

    var filterSearch = filteredInfo.filter(elem =>
      this.state.filterArr.includes(elem.name)
    );
    console.log("filteredInfo filteredInfo ", filterSearch);

    const projectInfo =
      //    this.state.projectInfo &&
      filterSearch.map((d, index) => (
        <div>
          <h2 className="project-title">{d.name}</h2>
          <label>{d.description}</label>
          <hr />
        </div>
      ));
    return (
      <div>
        <SearchInfo arr={arrKeywords} onSearch={this.searchFiltered} />
        {projectInfo}
      </div>
    );
  }
}

export default PersonalInfo;
