import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class UpdateSize extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          curve: 'smooth'
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      },
      height: 300,
      width: 500,
      series: [{
        data: [30, 40, 25, 50, 49, 21, 70, 51]
      }],
    }
  }

  render() {
    return (
      <>
        <div className="line">
          <Chart options={this.state.options} series={this.state.series} type="line" width={this.state.width} height={this.state.height} />
        </div>
        <div className="row">
          <p className="col pr20">
            <div>Height</div>
            <input type="number" min="250" value={this.state.height} onChange={e => this.setState({ height: e.target.value })} />
          </p>
          <p className="col">
            <div>Width</div>
            <input type="number" min="400" value={this.state.width} onChange={e => this.setState({ width: e.target.value })} />
          </p>
        </div>
      </>
    );
  }
}

export default UpdateSize;
