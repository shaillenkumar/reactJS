console.log('App.js is running!');

// React - Default Props
// we will make the Header Title with default prop value
// they just have render() function and has no state.

class IndecisionApp extends React.Component{
    constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        options:  ['one','two','three','four']
      };
      
    }
    handleDeleteOptions(){
      this.setState(()=>({options : []}));        // ({}) means its an object|  {} for body of arrow fn
    }
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    handleAddOption(option){
      console.log(option);
      if(!option){
        return "Enter Valid Value to Add Item "
      }else if(this.state.options.indexOf(option)>-1) {
        return "This Item already exists "
      }
      this.setState((prevState) =>{
        return {options : prevState.options.concat([option])};
      });
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
            />
            <AddOption 
              handleAddOption= {this.handleAddOption}
            />
        </div> );
    }
}


const Header = (props) => {
  console.log('title : ',props.title);
  return( <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
  </div>);
}
Header.defaultProps = {
  title: 'Indecision App - From Default Prop'
}


class Action extends React.Component{
    
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

const Options = (props) => {
  return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
          props.options.map((option) => <Option key={option} optionText={option} />)
        }
    </div>
  );
}

const Option = (props) => {
  return(    
    <div>
      {props.optionText}
    </div>
  );
}

class AddOption extends React.Component{
    constructor(props){
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error:undefined
      }
    }
    handleAddOption(e){
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      this.setState(()=>{
        return {error: error}
      })
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
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/*
// stateless functional component demo
// as in case of class based component function name starts with the Capital letter.(lower case for HTML component)
// you can not have 'this' like this.props.Nmae
// stateless fuctional component are fast compared to class based
const User = (props)=>{
  return (
    <div> 
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};
ReactDOM.render(<User name='shailen' age={40}/>, document.getElementById('app'));
*/


