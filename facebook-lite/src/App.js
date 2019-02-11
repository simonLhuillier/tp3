import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  
  constructor(props)
  {
    super(props);
   this.state = {
           p1 : { id: 1, name: 'Simon', fullname: 'Lhuillier',birthdate:"19/11/1997", image:  'https://upload.wikimedia.org/wikipedia/commons/a/ae/Michel_Vuillermoz_20070511_Fnac_6.jpg', last:"A la recherche de sabilité", backstyle : '#ae734'},
          p2 : { id: 2, name: 'Maxime', fullname: 'Bienassis',birthdate:"28/08/1997", image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Michel_Cremades.jpg/220px-Michel_Cremades.jpg', last:"A la recherche de sabilité", backstyle : '#ae734'},
          p3 : { id: 3, name: 'Mathieu',fullname: 'Josserand',birthdate:"18/01/1997", image:  'https://pbs.twimg.com/profile_images/723502115180699650/Iq2hcHUE_400x400.jpg', last:"A la recherche de sabilité", backstyle : '#ae734'},
          };
                    
  }
  
  
  render() {
    return (
      <div className="App">
        <header>
          <button class="button" onClick={() => this.setState({name: 'Simon', fullname :'Lhuillier' , date : '19/11/1997', photo : "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michel_Vuillermoz_20070511_Fnac_6.jpg", contenu :'Cherche lamour', backstyle : '#ae734',like :'0 like'})}>{'Simon Lhuillier'}</button>
          <button class="button" onClick={() => this.setState({name: 'Maxime', fullname :'Bienassis' , date : '28/08/1997', photo : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Michel_Cremades.jpg/220px-Michel_Cremades.jpg", contenu :'Cherche son chien' , backstyle : '#ae734',like :'0 like'})}>{'Maxime Bienassis'}</button>
          <button class="button" onClick={() => this.setState({name: 'Mathieu', fullname :'Josserand' , date : '18/01/1997', photo : "https://pbs.twimg.com/profile_images/723502115180699650/Iq2hcHUE_400x400.jpg", contenu :'Chien cherche lamour', backstyle : '#ae734',like :'0 like'})}>{'Mathieu Josserand'}</button>
          </header>
    
        
        <body>
          <div className="card" style = {{background :this.state.backstyle}}>
          <Profile name={this.state.name}  fullname={this.state.fullname} date={this.state.date} photo={this.state.photo} ></Profile>
          <button class="button" onClick={this.changeBackgroung}>Change Color</button>
          </div>

          <div className="post">
          <Post contenu={this.state.contenu}  like={this.state.like} ></Post>
          <button class="button" onClick={this.like}>J'aime</button>
          </div>
          
          </body></div>
      );
  }

  changeBackgroung = (e) => {
    if (this.state.backstyle == 'beige') 
  
    {this.setState({backstyle: 'red'});}
      
    else 
    { this.setState({backstyle: 'beige'});}
    
    }

    like = (e) => {
       this.setState({like: '1 like'});
      
      }
  }

    

class Profile extends React.Component{
  render()
  {        return(
    <div>
          <img class="photo" src={this.props.photo}  />
          <br/>
          <h1>{this.props.fullname} </h1>
          <h3>{this.props.name} </h3>
          <h6>{this.props.date}</h6>
      </div>
      );
  }

}

class Post extends React.Component{
  render()
  {        return(
    <div>
          <h3>{this.props.contenu} </h3>
          <h6>{this.props.like}</h6>
      </div>
      );
  }

}


export default App;


