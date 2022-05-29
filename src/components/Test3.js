import React from 'react';
/*
    함수영역 : 변수, 제어문, 조건문 모두 사용 가능하다.
    css {} 객체 - {키:값} - jQuery 처리 기법 동일
    {'background-color':'pink}
    {'font-size':'20px'}

    키
    backgroundColor , fontSize  , textIndent
*/

const title ='신상명세서'
const name = '김정민'
const age = 20
const addr = '제주도'

const css1 = {
  backgroundColor: 'hotpink',
  fontSize: 30,
  padding: 15,
  border: '1px solid #000',
  margin: 10
}
const css2 = {
  backgroundColor: 'blue',
  fontSize: 20,
  borderRadius: 10,
  margin: 20,
  padding: 8
}
const css3 = {
backgroundColor: 'orange',
padding: 30,
textAlign: 'center',
fontSize: 25,
textDecoration: 'underline'
}

const Test3 = () => {
  return (
    <div>
      <h2 style={ css1 }> {title} </h2>
      <h3 style={ css2 }>이름 : {name} </h3>
      <h3 style={ css3 }>나이 : {age} </h3>
      <h3>주소 : {addr} </h3>
      <p>연습입니다.</p>
      {/* <p style={객체}> { 자바스크립트 수식, 식, 값 }</p> */}
    </div>
  );
};

export default Test3;