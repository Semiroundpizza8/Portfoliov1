import React from 'react';
import { connect } from 'react-redux';
import circles from './sketches/circles';
import sketch from './sketches/sketch';
/*------------
  COMPONENT
 ------------*/
export const Home = (props) => {
  return (
    <div>
      <div id="HeaderText" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '66vw', height: '33vw', margin: 'auto', backgroundColor: 'red'}}>
        <h1>Benjamin Odisho</h1>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  )
};

/*------------
  CONTAINERS
 ------------*/
const mapState = () => {
  return {}
}

const mapDispatch = () => {
  return {}
}

export default connect(mapState, mapDispatch)(Home)
