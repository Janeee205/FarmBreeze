import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const MyPageComponent = (props) => {
  const component = {
    link : {
      display : 'flex',
      justifyContent : 'space-between',
      alignItems : 'center',
      width : '12.5rem',
      marginRight : '2rem',
      padding : '1rem 0 0.5rem 0',
      borderBottom : '0.1rem solid #D9D9D9'
    }
  }
  return (
    <Link to={props.to} style={component.link}>
      <p>{props.title}</p>
      <Icon icon="iconamoon:arrow-right-2-light" style={{fontSize : '1.5rem', color : '#999'}}/>
    </Link>
  );
};

export default MyPageComponent;