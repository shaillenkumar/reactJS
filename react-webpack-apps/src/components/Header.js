import React from 'react';


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
  
  export default Header;