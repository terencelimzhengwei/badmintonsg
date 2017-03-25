/**
 * Created by terencelimzw on 26/12/16.
 */

import React, {PureComponent } from 'react';
import Card from '../Card';

import './index.css';

export default class About extends PureComponent {

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
          <p>
            The data is updated every 30 minutes so as to minimize any impact on ActiveSG/SportsHub servers.
          </p>
        </Card>
        <Card title="Author" width={"50%"}>
          <p>
            This web application was built by
            <a
              href="https://www.linkedin.com/in/terencelimzw"
              target="_blank"
            ><b> @terencelim </b>
            </a>
            as a way for him to learn more about using React for web development as well as D3 for data visualization.
          </p>
          <p>
            Terence is currently a Data Science Consultant at
            <a
            href="https://www.linkedin.com/company/dataspark"
            target="_blank"
            ><b> DataSpark</b>
            </a>.
          </p>
        </Card>
      </div>
    );
  }
}