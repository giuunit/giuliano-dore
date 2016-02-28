import React from 'react';

class Card extends React.Component {
  render() {
    return          <div className="card">
                        <div className="card-image">
                            <img className="responsive-img" src="https://avatars.githubusercontent.com/u/16306379" />
                            <span className="card-title">Giuliano Dore</span>
                        </div>
                        <div className="card-content">
                            <div className="chip">C#</div>
                            <div className="chip">Javascript</div>
                            <div className="chip">HTML5</div>
                            <div className="chip">Xamarin</div>
                            <div className="chip">AngularJS</div>
                            <div className="chip">ASP.NET</div>
                            <div className="chip">Entity Framework</div>
                            <div className="chip">Git</div>
                            <div className="chip">NodeJS</div>
                            <div className="chip">Github</div>
                            <div className="chip">jQuery</div>
                            <div className="chip">ASP.NET MVC</div>
                            <div className="chip">ES6</div>
                            <div className="chip">Scrum</div>
                            <div className="chip">Unit-tests</div>
                            <div className="chip">Umbraco</div>
                        </div>
                    </div>;
  }
}

export default Card;