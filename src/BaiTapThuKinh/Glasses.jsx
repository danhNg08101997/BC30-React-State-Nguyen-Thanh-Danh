import React, { Component } from 'react'

export default class Glasses extends Component {
  render() {
    let { glasses, renderDetail } = this.props;

    return (
        <button
        className="btn"
        onClick={() => {
          renderDetail(glasses);
        }}
      >
        <img className="w-100" src={glasses.url} alt="..." />
      </button>
    )
  }
}
