import './form-container.css';
import React from 'react';
import SearchComponent from '../search-component/search-component';
import CounterComponent from '../counter-component/counter-component';
import ToggleComponent from '../toggle-component/toggle-component';

class FromContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSearchVisible: true };
  }

  onToggleChange = (newState) => this.setState({ isSearchVisible: newState });

  render() {
    const { isSearchVisible } = this.state;
    return (
      <div className="form-container">
        <ToggleComponent onToggleChange={() => this.onToggleChange(!isSearchVisible)} />
        { isSearchVisible
          ? <SearchComponent />
          : <CounterComponent /> }
      </div>
    );
  }
}
export default FromContainer;
