import React, { useState } from 'react';
import { Switch } from 'antd';
import styles from './switch.less';
import { ComponentWrapper } from './index.styled';

const TestComponent: React.FC = () => {
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(check => !check);
    console.log(`check=${check}`);
  };
  return (
    <>
      <ComponentWrapper>
        <Switch className={styles} checked={check} onChange={checkHandler} />
      </ComponentWrapper>
    </>
  );
};

export default TestComponent;
