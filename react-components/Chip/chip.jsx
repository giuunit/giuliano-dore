import React from 'react';

class Chip extends React.Component {
  render() {
    return  <div className="chip">{this.props.name}</div>
  }
}

export default Chip;