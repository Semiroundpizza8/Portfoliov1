import React from 'react';
import { connect } from 'react-redux';
import P5Wrapper from 'react-p5-wrapper';
import circles from './sketches/circles';
import sketch from './sketches/sketch';
/*------------
  COMPONENT
 ------------*/
export const Home = (props) => {
  let style = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    zIndex: '-3',
  }
  let headerStyle = {
    zIndex: 20
  }
  return (
    <div>
      <div id="HeaderSketch" style={style}>
        <P5Wrapper sketch={sketch} />
      </div>
      <div id="HeaderText" style={headerStyle}>
        <h1>Benjamin Odisho</h1>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
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
