import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import styled from 'styled-components';

const Button = styled.button`
  color: red;
  a {
    color: green;
  }
`;

function App() {
  return (
    <>
      <h4>comfy sloth starter</h4>
      <Button>
        <a href="https://www.google.com">Google</a>
      </Button>
    </>
  );
}

export default App;
