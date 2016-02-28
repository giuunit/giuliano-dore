import React from 'react';
import Nav from '../Nav/nav.jsx';
import Title from '../Title/title.jsx';
import Card from '../Card/card.jsx';
import Experience from '../Experience/experience.jsx';
import Footer from '../Footer/footer.jsx';

class App extends React.Component {
  render() {
      
    return  <div>
                <Nav></Nav>
                
                <div className="section no-pad-bot">
                    <div className="container">
                        <Title name='Giuliano Dore' title='Freelance .NET / front-end developer'></Title>
                        
                        <div className="row">
                            <div className="col s12 m4">
                                <Card></Card>
                            </div>
                            <div className="col s12 m8">
                                <Experience></Experience>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer></Footer>
                
            </div>
  }
}

export default App;