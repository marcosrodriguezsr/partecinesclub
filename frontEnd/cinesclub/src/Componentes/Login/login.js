import React, {fragment, useState} from 'react';
import axios from 'axios';
import './login.css'
import { Component } from 'react';


class Formulario extends Component{
    state={

            username:'',
            password:'',

    }

    

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/usuarios/').then(result=>{
            console.log(result)
        }).catch(console.log)
    }
    
    enviarDatos = async(event)=> {
        console.log(this.state)
        event.preventDefault();
       
        const newUser = {
    
            username:this.state.username,
            passwword:this.state.passwword,

           
        };
        
     }
    
     changeHanlder =(event) =>{
        this.setState({[event.target.name]: event.target.value})
    
    }
    
     render(){
    
    return(
    
    <div >
       <section className='registro'>
           <form class='form-box' onSubmit={this.enviarDatos}>
            <h1 class='form-title'>Login</h1>
    
            <input 
                onChange={this.changeHanlder}
                name="nombre"
                className="form-control"
                type="text"
                placeholder="username"
            >
                   
    
            </input>
    
            <input 
                onChange={this.changeHanlder}
                name="password" 
                className="form-control"
                type="password"
                placeholder="Password"
              >
    
              </input>
    
         
          
          <button type="submit" >login </button>
          </form>
       </section>
       
        </div>
        
    );
    
    }
    }
    
    export default Formulario;