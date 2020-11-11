import React from 'react';
import { Spin } from 'antd';
import './Loading.css'

function Loading() {
  return (
    <div className="loading-container">
      <Spin size="large"/>
    </div>
  )
}

export default Loading;