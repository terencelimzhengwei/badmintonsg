import React, { Component } from 'react';
import Card from '../lib/card';
import HeatMap from '../lib/heatmap'
import Axis from '../lib/axes'
import ChartSVG from '../lib/chart'
import Tooltip from '../lib/tooltip'
import Select from '../lib/select'
import {json} from 'd3-request'
import * as d3 from 'd3'

import './index.css';
import '../fonts/font.css'

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
        const date_range = d3.extent(data,(d)=>d.booking_date)
        const date_parser = d3.timeParse("%Y-%m-%d")
        const date_formatter = d3.timeFormat("%Y-%m-%d")
        const date_array = d3.timeDays(date_parser(date_range[0]),date_parser(date_range[1])).map(d=>date_formatter(d))
        const available_slots = data.filter(d => (d.avail.reduce((a, b) => a + b, 0)))
        const booking_date = available_slots.filter(d=>d.booking_date===date_array[0]).length > 0 ? date_array[0] : date_array[1]
        const parseTime = d3.timeParse("%Y%m%d%H%M");
        const formatTime = d3.timeFormat("%Y-%m-%d %H:%M");
        const update_timestamp = formatTime(parseTime(available_slots[0].update_timestamp))
        this.setState({
          data: available_slots,
          date_range: date_array,
          booking_date: booking_date,
          update_timestamp: update_timestamp
        });
      }
      )
  }

  render() {
    const data = this.state.data? this.state.data.filter(d=>d.booking_date===this.state.booking_date) : []
    const time_slots = ["7a","8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p"]
    const venues = data.length>0?data.map(d=>d.venue):[]
    const options = this.state.date_range?this.state.date_range:[]
    const onMouseOver = (e) =>{
      const x = e.clientX
      const y = e.clientY
      const value = (e.target?e.target.getAttribute("value"):0)
      this.setState({x:x,y:y,hover:true,value:value})
    }
    const onMouseOut = (e) =>{
      this.setState({x:0,y:0,hover:false})
    }

    const onChange = (e) =>{
      this.setState({booking_date:e.target?e.target.value:""})
    }


    return (
      <div className="app">
        <div className="flex-container">
          <Card title="Badminton Court Availability" width={"50%"}>
            <div className="update-timestamp">{"Last updated at " + this.state.update_timestamp}</div>
            <Select
              options={options}
              text={"Select a Date"}
              onChange={onChange}
              value={this.state.booking_date}
            />
            <ChartSVG
              width={20*time_slots.length}
              height={20*venues.length}
            >
              <Axis
                data={venues}
                gridSize={20}
                position={"right"}
                num_columns={time_slots.length}
              />
              <Axis
                data={time_slots}
                gridSize={20}
                position={"top"}
                num_columns={venues.length}
              />
              <HeatMap
                gridSize={20}
                stroke={"white"}
                strokeOpacity={0.6}
                colorRange={["#efefef","#1e5062", '#002b53']}
                data={data}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
              />
            </ChartSVG>
            <Tooltip
              show={this.state.hover}
              x={this.state.x}
              y={this.state.y}
              message={"Courts available : " + this.state.value.toString()}
            />
          </Card>
        </div>
      </div>

    );
  }
}

export default App;
