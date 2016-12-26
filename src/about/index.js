/**
 * Created by terencelimzw on 26/12/16.
 */

import React, {Component } from 'react';
import Card from '../lib/card'

import './index.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    // const { className, ...props } = this.props;
    return (
      <div className="flex-container about">
        <Card title="About" width={"50%"}>
          <p>
            Badminton is a popular sport in Singapore and sometimes it is difficult to find available slots to book.
            Using data from booking sites like ActiveSG as well as OCBC Arena, a simple visualization was built
            to help users quickly find available slots.
          </p>
          <p>
            By looking at the color of the grids, users can easily know
            how many available courts there are. By clicking on the grids, users will be redirected to the booking site.
          </p>
        </Card>
        <Card title="Author" width={"50%"}>
          <p>
            This web application was built by
            <a
              href="https://www.linkedin.com/in/terencelimzw"
              style={{textDecoration:"none",color:'#1e5062'}}
              target="_blank"
            ><b> @terencelim </b>
            </a>
            as a way for him to learn more about using React for web development as well as D3 for data visualization.
          </p>
          <p>
            Terence is currently a Data Science Consultant at
            <a
            href="https://www.linkedin.com/company/dataspark"
            style={{textDecoration:"none",color:'#1e5062'}}
            target="_blank"
            ><b> DataSpark</b>
            </a>.
          </p>
        </Card>
      </div>
    );
  }
}