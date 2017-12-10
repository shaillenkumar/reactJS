import React from 'react';

export default class AddOption extends React.Component{
    constructor(props){
      super(props);
      // remove this binding
      // this.handleAddOption = this.handleAddOption.bind(this); 
      this.state = {
        error:undefined
      }
    }

    handleAddOption = (e) => { // 1. convert to arrow function to remove use of this binding
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      this.setState(()=>({error: error}));
      if (!error) {
        e.target.elements.option.value = '';
      }
    }
    render(){ return (
        <div>
          {this.state.error && <p> {this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>);
    }
}