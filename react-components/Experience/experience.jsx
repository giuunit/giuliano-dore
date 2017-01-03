import React from 'react';

class Experience extends React.Component {
  render() {
    return          <div>
                        <ul className="collection with-header">
                            <li className="collection-header"><h5>My experiences</h5></li>

                            <li className="collection-item avatar">
                                <img src="https://avatars.githubusercontent.com/u/16306379" alt="Freelance" className="circle"/>
                                <span className="title">Giuliano Dore Limited</span>
                                <p>Umbraco / .net / frontend developer <br/> Nov 2015 to present</p>
                                <span className="secondary-content">London</span>
                            </li>
                            
                            <li className="collection-item avatar">
                                <img src="assets/images/logo-redbridge.png" alt="redbridge" className="circle"/>
                                <span className="title">London Borough of Redbridge</span>
                                <p>Umbraco developer <br/> Oct 2016 to Dec 2016</p>
                                <span className="secondary-content">London</span>
                            </li>

                             <li className="collection-item avatar">
                                <img src="assets/images/logo-wpn.jpg" alt="wpn chameleon" className="circle"/>
                                <span className="title">WPN chameleon</span>
                                <p>Umbraco / frontend developer <br/> Aug 2016 to Sep 2016</p>
                                <span className="secondary-content">London</span>
                            </li>
                             <li className="collection-item avatar">
                                <img src="assets/images/logo-phm.png" alt="phm group" className="circle"/>
                                <span className="title">PHM Group</span>
                                <p>Umbraco / frontend developer <br/> Feb 2016 to Jul 2016</p>
                                <span className="secondary-content">London</span>
                            </li>
                             
                            <li className="collection-item avatar">
                                <img src="assets/images/logo-mdbriefcase.jpg" alt="mdbriefcase" className="circle"/>
                                <span className="title">mdBriefcase</span>
                                <p>.NET / Web developer <br/> Dec 2014 to Jan 2016</p>
                                <span className="secondary-content">Toronto</span>
                            </li>
                            <li className="collection-item avatar">
                                <img src="assets/images/logo-emakina.png" alt="Emakina" className="circle"/>
                                <span className="title">Emakina</span>
                                <p>.NET / Web developer <br/> Apr 2013 to Nov 2014</p>
                                <span className="secondary-content">Brussels</span>
                            </li>
                            <li className="collection-item avatar">
                                <img src="assets/images/logo-adneom.jpg" alt="Adneom" className="circle"/>
                                <span className="title">Adneom</span>
                                <p>.NET / Web consultant <br/> Jul 2012 to Mar 2013</p>
                                <span className="secondary-content">Brussels</span>
                            </li>
                            <li className="collection-item avatar">
                                <img src="assets/images/logo-microsoft.jpg" alt="Microsoft" className="circle"/>
                                <span className="title">Microsoft Innovation Center</span>
                                <p>.NET / Web intern <br/> Feb 2012 to May 2012</p>
                                <span className="secondary-content">Mons</span>
                            </li>
                        </ul> 
                    </div>;
  }
}

export default Experience;