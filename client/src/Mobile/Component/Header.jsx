import React from 'react';
import { Icon } from '@iconify/react';

const Header = (props) => {
  const header = {
    position: 'relative',
    display : 'flex',
    alignItems: 'center',
    padding: '1.5rem',
    borderBottom: '0.1rem solid #D9D9D9',
    color: '--main-color'
  };

  const headerIcon = {
    position: 'absolute',
    fontSize: '2rem',
  }

  const headerTitle = {
    margin: '0 auto',
    fontSize: '1.3rem',
  }

  return (
    <header style={header}>
      <Icon icon="mingcute:arrow-left-line" style={headerIcon} />
      <p style={headerTitle}>{props.title}</p>
    </header>
  );
};

export default Header;