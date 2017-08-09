import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {

    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange= { event => this.setState({ term: event.target.value }) }/>
        value of the input: {this.state.term}
      </div>
    );
  }

  onInputChange(event) {

    console.log(event.target.value);
  }
}

export default SearchBar;
