import React from 'react';

class Title extends React.Component {
  render() {
    return <div>
                <h2 className="header center orange-text">{this.props.name}</h2>
                
                <div className="row center">
                    <h5 className="header col s12 light">{this.props.title}</h5>
                </div>
            </div>;
  }
}

export default Title;