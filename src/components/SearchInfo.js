import React, { Component } from "react";

class SearchInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
  }
  handleChange = e => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.arr;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState(
      {
        filtered: newList
      },
      e => {
        this.props.onSearch(this.state.filtered);
      }
    );
  };

  render() {
    console.log("filtered", this.state.filtered);
    return (
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
        <input
          className="search"
          type="text"
          onChange={e => this.handleChange(e)}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default SearchInfo;
