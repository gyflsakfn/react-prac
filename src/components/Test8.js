import React from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
  return (
    <>
      <Test8Sub 
        name = "김태리"
        age = { 20 }
        addr = "제주도"
        tel = "010-0000-1111"
        done = {true}
        color = "tomato"
        bgColor = "hotpink"
      />
      <hr/>
      <Test8Sub 
        name = "김정민"
        addr = "진해"
        color = "skyblue"
        bgColor = "yellow"
      />
      <hr/>
      <Test8Sub />
    </>
  );
};

export default Test8;