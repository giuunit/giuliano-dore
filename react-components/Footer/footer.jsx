import React from 'react';

class Footer extends React.Component {
  render() {
    return <footer className="page-footer orange">
    <div className="container">
      <div className="row">
        <div className="col l9 s12">
          <h5 className="white-text">A little bit about me</h5>
          <p className="grey-text text-lighten-4">Rigorous and motivated, I am always looking for improvement and challenges. Currently in London, UK.</p>

        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Connect</h5>
          <ul>
            <li><a className="white-text" target="_blank" href="https://www.linkedin.com/in/giulianodore">LinkedIn</a></li>
            <li><a className="white-text" target="_blank" href="https://github.com/giuunit">Github</a></li>
            <li><a className="white-text" target="_blank" href="https://onedrive.live.com/redir?resid=55FB04C24525115C!28924&authkey=!ABasyJ7ROdsxe2o&ithint=file%2cpdf">My resume</a></li>
            <li><a className="white-text" target="_blank" href="mailto:giuliano.dore@gmail.com">Email</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>;
  }
}

export default Footer;