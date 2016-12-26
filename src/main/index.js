/**
 * Created by terencelimzw on 26/12/16.
 */

import React, {Component } from 'react';
import Navbar from '../lib/nav';
import './index.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    // const { className, ...props } = this.props;
    const links = [{name:"About",link:"/about"},{name:"Viz",link:"/"}]
    return (
      <div>
        <Navbar title="@terencethehunk" links={links}/>
        {this.props.children}
      </div>
    );
  }
}