import React from 'react';
import './toggle.css';

class ToggleComponent extends React.PureComponent {
  render() {
    const { onToggleChange } = this.props;
    return (
      <div>
        <label htmlFor="checkbox-input" className="switch">
          <input id="checkbox-input" type="checkbox" onChange={onToggleChange} />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}
export default ToggleComponent;
