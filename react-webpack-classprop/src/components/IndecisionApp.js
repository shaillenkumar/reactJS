import React from 'react';

import AddOption from './AddOption.js'  // although the .js can be ommited
import Options from './Options' 
import Action from './Action' 
import Header from './Header'

export default class IndecisionApp extends React.Component{
    // make state as class variable
    state = {
        options: [] // just an empty array
    };

    //make this event handler function as class properties with an arrow function
    handleDeleteOption =(optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    };

    //make this event handler function as class properties with an arrow function
    handleDeleteOptions = () => {
      this.setState(()=>({options : []}));        // ({}) means its an object|  {} for body of arrow fn
    };

    //make this event handler function as class properties with an arrow function
    handlePick = ()  => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    };

    //make this event handler function as class properties with an arrow function
    handleAddOption = (option) => {
      console.log(option);
      if(!option){
        return "Enter Valid Value to Add Item "
      }else if(this.state.options.indexOf(option)>-1) {
        return "This Item already exists "
      }
      this.setState((prevState) => ({options : prevState.options.concat([option])}));
    };

    
    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        // Do nothing at all
      }
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
    componentWillMount(){
      console.log('Component Will Mount');
    }

    render(){
       const title='Indecision App';  //props
       const subtitle = 'Put your life in the hands of computer';
       return( <div>
            <Header subtitle={subtitle}/>  //Commenting Title to get the valu from default Props 
            <Action 
              hasOptions={(this.state.options.length)>0}
              handlePick={this.handlePick}
            />
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption= {this.handleAddOption}
            />
        </div> );
    }
}

IndecisionApp.defaultProps = {
  options: []
};