import React, { Component } from 'react';

export default class OrderSummary extends Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader() {
    return (
      <header>
        <h2>Order summary</h2>
      </header>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <div className="card-body">
          TODO
        </div>
      </div>
    );
  }
}