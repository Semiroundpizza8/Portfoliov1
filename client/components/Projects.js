import React from 'react';
import { connect } from 'react-redux';

export const Projects = () => {
  const sidebarStyle = {
    flexGrow: '1',
    height: 'auto',
    width: 'auto',
    backgroundColor: 'red',
    marginLeft: '2%',
    marginRight: '2%' 
  }
  return (
    <div style={{ display: 'flex'}}>
      <div id="Sidebar" style={sidebarStyle} />
      <div id="Projects" style={{flexGrow: '3' }}>
        <div id="item">
          <div style={{ width: '200px', height: '200px', backgroundColor: 'black' }} />
          <h1>Project</h1>
          <p>ShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortLong</p>
          <h5>Tag</h5>
        </div>
        <div id="item">
          <div style={{ width: '200px', height: '200px', backgroundColor: 'black' }} />
          <h1>Project</h1>
          <p>ShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortLong</p>
          <h5>Tag</h5>
        </div>
        <div id="item">
          <div style={{ width: '200px', height: '200px', backgroundColor: 'black' }} />
          <h1>Project</h1>
          <p>ShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortLong</p>
          <h5>Tag</h5>
        </div>
        <div id="item">
          <div style={{ width: '200px', height: '200px', backgroundColor: 'black' }} />
          <h1>Project</h1>
          <p>ShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortShortLong</p>
          <h5>Tag</h5>
        </div>
      </div>
      <div id="Sidebar" style={sidebarStyle} />
    </div>
  )
};

const mapState = () => { }
const mapDispatch = () => { }

export default connect(null, null)(Projects);
