import React from 'react';
import './title.css';

const titleElement = React.createElement(
  'div',
  { className: 'title' },
  React.createElement('span', { className: '' }, 'Task №1'),
);

class TitleComponent extends React.Component {
  render() {
    return titleElement;
  }
}
export default TitleComponent;
