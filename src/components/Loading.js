import React, { Component } from 'react'
import loader from './loader.gif';

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="loding" />
      </div>
    )
  }
}

export default Loading