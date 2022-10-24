import './form-container.css';
import React from 'react';
import SearchComponent from '../search-component/search-component';
import CounterComponent from '../counter-component/counter-component';
import ToggleComponent from '../toggle-component/toggle-component';

class FormContainer extends React.Component<FormContainerPops, FormContainerState> {
  constructor(props: FormContainerPops) {
    super(props);
    this.state = { isSearchVisible: true };
  }

  onToggleChange = (newState: boolean) => this.setState({ isSearchVisible: newState });

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

type FormContainerPops = {};
type FormContainerState = { isSearchVisible: boolean};

export default FormContainer;
