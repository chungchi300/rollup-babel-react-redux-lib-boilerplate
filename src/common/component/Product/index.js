import React from 'react';
import PropTypes from 'prop-types';
import {total} from 'helper/priceCalculation';
import {double} from 'helper/weightCalculation';
export default class Product extends React.Component {
  get buggerSize () {
    return double(125);
  }
  render () {
    return (
      <div>
        <em>Our double  meat chicken breast weight is {this.buggerSize} g.</em>
      </div>
    );
  }
}
