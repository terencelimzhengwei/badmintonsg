/**
 * Created by terencelimzw on 26/12/16.
 */

import React, {Component } from 'react';
import Card from '../lib/card'

import './index.css';

export default class NotFound extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    // const { className, ...props } = this.props;
    return (
      <div className="flex-container notfound">
        <Card title="404 Not Found" width={"50%"}>
          <p>
            What are you doing here my friend? You're obviously not in the right route...
          </p>
        </Card>
      </div>
    );
  }
}