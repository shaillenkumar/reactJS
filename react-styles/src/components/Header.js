import React from 'react';


const Header = (props) => {
    console.log('title : ',props.title);
    return( <div className='header'>
        <h1 className='header__title'>{props.title}</h1>
        <h2 className='header__subtitle'>{props.subtitle}</h2>
    </div>);
  }


Header.defaultProps = {
    title: 'Indecision App - From Default Prop'
  }
  
  export default Header;