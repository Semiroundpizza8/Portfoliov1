/* global describe beforeEach it */

import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Home } from './home'

const adapter = new Adapter()
enzyme.configure({ adapter })

describe('Home', () => {
  let home;

  beforeEach(() => {
    home = shallow(<Home />)
  })
  describe('Header Text', () => {
    it('Renders my name in an h1', () => {
      expect(home.find('h1').text()).to.be.equal('Benjamin Odisho')
    })
    it('Displays navigation to other sections', () => {
      expect(home.find('ul')).to.have.length(1);
      let listItems = home.find('ul').children()
      expect(listItems).to.have.length(3);
      listItems.forEach(item => {
        expect(item.type()).to.be.equal('li')
      })
    })
  });
  describe('Header Sketch', () => {
    it('Renders Sketch', () => true)
    it('', () => true)
  });
})
