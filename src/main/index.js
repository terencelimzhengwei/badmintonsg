/**
 * Created by terencelimzw on 26/12/16.
 */

import React, {Component } from 'react';
import Navbar from '../lib/nav';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
        <Navbar title="@terencelimzhengwei" links={links}/>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}