import React, { useState } from 'react';

const Test11 = () => {
// hotpink - skyblue 왕복
// setBgColor(값 or 수식)
  const [ bgColor, setBgColor] = useState('hotpink')
  const onColor = () => {
    setBgColor( bgColor === 'hotpink' ? 'skyblue' : 'hotpink')
  }

  return (
    <>
      <h2> h1을 클릭하면 hotpink - skyblue 배경색 글자 변경하기 왕복 </h2>
      <h1 style={{ padding: 30, border: '2px solid #000', margin: 20,
            fontSize: 25, backgroundColor: bgColor, cursor: 'pointer'}}
            onClick = { onColor }>
        backgroundColor : {bgColor}
      </h1>
    </>
  );
};

export default Test11;