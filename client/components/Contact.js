import React from 'react';
import { connect } from 'react-redux';

export const Contact = () => {
  return (
    <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
      <h1>Form</h1>
      <div style={{ width: '200px', height: '200px', backgroundColor: 'black' }} />
    </div>
  )
};

const mapState = () => {
  return {}
};

const mapDispatch = () => {
  return {}
};

export default connect(null, null)(Contact);
