
import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

class App extends Component {

state={ advice:''};

componentDidMount()
{
  this.fetchAdvice();
    
}

fetchAdvice = () => 
{
    axios.get(`https://api.adviceslip.com/advice`)
    .then((res)=>{
        console.log(res);
        const { advice } = res.data.slip;
        this.setState({advice : advice});
        
    }).catch((err)=>console.log(err));
}

    render() {
        // const { icon_url }= this.state;
        return (
         
            <div>
                <h1>Advices Of the day</h1>
                  <div className="container">
                    
                    <div className="card">
                         <h2>{this.state.advice}</h2>
                         <button onClick={this.fetchAdvice}>Get More</button>
                    </div>
                    
                </div>
            </div>
              
            
            
        )
    }
}

export default App;
