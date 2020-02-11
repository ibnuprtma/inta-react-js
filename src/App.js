import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Textfield } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My Integration Data</Link>} scroll>
            <Textfield
                onChange={() => {}}
                label="Expandable Input"
                expandable
                expandableIcon="search"
                name="search"
            />
          </Header>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
