console.log('App.js is running!');

// React Component and Nesting

// the class name has to start from Capital and all React Component have to have render()
// Nesting inside Indecision component

class IndecisionApp extends React.Component{
    render(){

       const title='Indecision App';  //props
       const subtitle = 'Put your life in the hands of computer';
       const options = ['one','two','three','four'];
       return( <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options} />
            <AddOption />
        </div> );
    }
}


class Header extends React.Component{
    render(){
        console.log('title : ',this.props.title);
        return( <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>);
    }
}
class Action extends React.Component{
    onPick(){
        console.log("onPick called!!");
    }
    render(){
        return( <div>
            <button onClick={this.onPick}>What should I do ?</button>
        </div>);
    }
}

// Nesting the Option in OPtions
class Options extends React.Component{
    render(){
        return(  
        <div>
            { 
                this.props.options.map((option)=>{
                    return <p key={option}>{option}</p>
                })           
            }
            <Option />
        </div>);
    }
}

class Option extends React.Component{
    render(){
        return(  <div>
            Option component here!
        </div>);
    }
}

class AddOption extends React.Component{
    render(){ return (
        <div>
           AddOption component here
        </div>);
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

