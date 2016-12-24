import React, { Component } from 'react';
import Navbar from '../lib/nav';
import Card from '../lib/card';
import HeatMap from '../lib/heatmap'
import Axis from '../lib/axes'
import ChartSVG from '../lib/chart'
import Tooltip from '../lib/tooltip'
import {json} from 'd3-request'
import * as d3 from 'd3'

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {hover:false,x:0,y:0,value:0};
  }

  componentWillMount() {
    json("https://raw.githubusercontent.com/terencelimzhengwei/active-sg-badminton/master/data/latest.json",
      (error,data)=>{
        if (error) {
          this.setState({loadError: true});
        }
        this.setState({
          data: data.filter(d => (d.avail.reduce((a, b) => a + b, 0)))
        });
      }
      )
  }

  render() {
    const data = this.state.data? this.state.data.filter(d=>d.booking_date==="2017-01-04") : []
    const time_slots = ["7a","8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p"]
    const venues = data.length>0?data.map(d=>d.venue):[]
    const parseTime = d3.timeParse("%Y%m%d%H%M");
    const formatTime = d3.timeFormat("%Y-%m-%d %H:%M");
    const update_timestamp = data.length>0?formatTime(parseTime(data[0].update_timestamp)):""
    const onMouseOver = (e) =>{
      const x = e.clientX
      const y = e.clientY
      const value = (e.target?e.target.getAttribute("value"):0)
      this.setState({x:x,y:y,hover:true,value:value})
    }
    const onMouseOut = (e) =>{
      this.setState({x:0,y:0,hover:false})
    }


    return (
      <div>
        <Navbar title="ActiveSG Badminton Court Bookings"/>
        <Card title="Badminton Court Availability">
          <ChartSVG>
            <Axis
              data={venues}
              gridSize={30}
              position={"right"}
              num_columns={time_slots.length}
            />
            <Axis
              data={time_slots}
              gridSize={30}
              position={"top"}
              num_columns={venues.length}
            />
            <HeatMap
              gridSize={30}
              stroke={"white"}
              strokeOpacity={0.6}
              colorRange={["#efefef","#1e5062", '#002b53']}
              data={data}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            />
          </ChartSVG>
          <div>
            <div>{"Last updated at " + update_timestamp}</div>
          </div>
          <Tooltip
            show={this.state.hover}
            x={this.state.x}
            y={this.state.y}
            message={"Courts available : " + this.state.value.toString()}
          />

        </Card>
      </div>

    );
  }
}

export default App;
