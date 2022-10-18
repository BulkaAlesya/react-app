import React from 'react';
import './search.css';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '', addedText: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonAction = this.handleButtonAction.bind(this);
  }

  handleInputChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleButtonAction() {
    const { searchValue, addedText } = this.state;
    this.setState({ addedText: `${addedText} ${searchValue}, ` });
  }

  render() {
    const { searchValue, addedText } = this.state;
    return (
      <div className="search-container">
        <input type="text" value={searchValue} onChange={this.handleInputChange} />
        <button type="button" onClick={this.handleButtonAction}> Add </button>
        <span>
          [
          {addedText}
          ]
        </span>
      </div>
    );
  }
}
export default SearchComponent;
