import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import AlbumsScreen from './components/AlbumsScreen';

const App = () => (
  <Router>
    <Container maxWidth="xl">
      <Route path="/" component={AlbumsScreen} exact />
    </Container>
  </Router>
);

export default App;
