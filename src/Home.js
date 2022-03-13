import React from 'react';
import {Link} from 'react-router-dom';
import Layout from './Layout';
import {Container} from 'react-bootstrap';
const Home = () => {
  return (
    <Layout>
      <Container>
        <Link to="math/mooInk">數學-mooInk</Link>
        <Link to="math/web">數學-Web</Link>
      </Container>
    </Layout>
  );
};

export default Home;