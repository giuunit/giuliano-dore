import React from 'react';

import Chip from '../Chip/chip.jsx';

class Card extends React.Component {
  render() {
    return          <div className="card">
                        <div className="card-image">
                            <img className="responsive-img" src="https://avatars.githubusercontent.com/u/16306379" />
                            <span className="card-title">Giuliano Dore</span>
                        </div>
                        <div className="card-content">
                            <Chip name='C#'></Chip>
                            <Chip name='Javascript'></Chip>
                            <Chip name='HTML5'></Chip>
                            <Chip name='Xamarin'></Chip>
                            <Chip name='AngularJS'></Chip>
                            <Chip name='ASP.NET'></Chip>
                            <Chip name='ReactJS'></Chip>
                            <Chip name='Entity Framework'></Chip>
                            <Chip name='Git'></Chip>
                            <Chip name='NodeJS'></Chip>
                            <Chip name='Github'></Chip>
                            <Chip name='jQuery'></Chip>
                            <Chip name='ASP.NET MVC'></Chip>
                            <Chip name='ES6'></Chip>
                            <Chip name='Scrum'></Chip>
                            <Chip name='Unit-tests'></Chip>
                            <Chip name='Umbraco'></Chip>
                        </div>
                    </div>;
  }
}

export default Card;