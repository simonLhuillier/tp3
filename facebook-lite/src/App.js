import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  
  constructor(props)
  {
    super(props);
   this.state = {
           p1 : { id: 1, name: 'Simon', fullname: 'Lhuillier',birthdate:"19/11/1997", image:  'https://pbs.twimg.com/profile_images/558319647649316865/s7uyinrG_400x400.jpeg', last:"A la recherche de sabilité"},
          p2 : { id: 2, name: 'Maxime', fullname: 'Bienassis',birthdate:"28/08/1997", image:  'https://pbs.twimg.com/profile_images/558319647649316865/s7uyinrG_400x400.jpeg', last:"A la recherche de sabilité"},
          p3 : { id: 3, name: 'Mathieu',fullname: 'Josserand',birthdate:"18/01/1997", image:  'https://pbs.twimg.com/profile_images/558319647649316865/s7uyinrG_400x400.jpeg', last:"A la recherche de sabilité"},
          };
                    
  }
  
  
  render() {
    return (
      <div className="App">
        <header>
          <button class="button" onClick={() => this.setState({name: 'Simon', fullname :'Lhuillier' , date : '19/11/1997', photo : "https://pbs.twimg.com/profile_images/558319647649316865/s7uyinrG_400x400.jpeg", contenu :'Cherche lamour'})}>{'Simon Lhuillier'}</button>
          <button class="button" onClick={() => this.setState({name: 'Maxime', fullname :'Bienassis' , date : '28/08/1997', photo : "https://pbs.twimg.com/profile_images/558319647649316865/s7uyinrG_400x400.jpeg", contenu :'Cherche lamour'})}>{'Simon Lhuillier'}</button>
          <button class="button" onClick={() => this.setState({name: 'Mathieu', fullname :'Josserand' , date : '18/01/1997', photo : "https://pbs.twimg.com/profile_images/558319647649316865/s7uyinrG_400x400.jpeg", contenu :'Cherche lamour'})}>{'Simon Lhuillier'}</button></header>
        <Profile name={this.state.name}  fullname={this.state.fullname} date={this.state.date} photo={this.state.photo} ></Profile>
        </div>
      );
  }
}

class Profile extends React.Component{
  render()
  {        return(
    <div>
          <img class="photo" src={this.props.photo} />
          <br/>
          <h1>{this.props.fullname} </h1>
          <h3>{this.props.name} </h3>
          <h6>{this.props.date}</h6>
      </div>
      );
  }

}

export default App;


