import React, { useState } from "react";
import { Form, Input, Button, Progress } from "antd";
import lockr from 'lockr';

import "./PinMessage.css";

function PinMessage({ onClose }) {
  const [status, setStatus] = useState("start");
  const [progress, setProgress] = useState(0);

  const confirm = () => {
    // TODO add api call

    lockr.set("pin_set", true)
    setStatus("loading");
    setProgress(2);
    setTimeout(() => {
      setProgress(10)
    }, 300)
    setTimeout(() => {
      setProgress(40)
    }, 1000)
    setTimeout(() => {
      setProgress(70)
    }, 2000)
    setTimeout(() => {
      setProgress(100)
    }, 3000)
    setTimeout(() => {
      setStatus('completed')
    }, 3500)
  };

  if (status === 'completed') {
    return (
      <div className="pin-message-container">
        <div className="pin-message-title">数据库已更新</div>
        <Button type="primary" onClick={onClose}>确认</Button>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="pin-message-container">
        <div className="pin-message-title">数据更新中。。。</div>
        <Progress
          strokeColor="white"
          trailColor="black"
          percent={progress}
          strokeWidth="32px"
          strokeLinecap="square"
          showInfo={false}
        />
      </div>
    );
  }

  return (
    <div className="pin-message-container">
      <div className="pin-message-title">更新巡检数据库?</div>
      <Form layout="inline">
        <Form.Item>
          <Input placeholder="清输入安标网动态吗"></Input>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={confirm}>
            确认
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PinMessage;
