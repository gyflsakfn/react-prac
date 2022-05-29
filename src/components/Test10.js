import React, { useState } from 'react';

const Test10 = () => {
  const [name, setName] = useState('홍길동')
  const [age, setAge] = useState(20)
  const [color, setColor] = useState('royalblue')

  console.log( 'Test10' )
  let num = 10
  
  const onName1 = () => {
    setName('김정민')
  }
  const onName2 = () => {
    setName('하정우')
  }
  const onName3 = () => {
    setName('김윤석')
  }


  return (
    <div>
      <h1>{ num }</h1>
      <h2 style={{backgroundColor: color, padding: 10, margin: 10}}>
        이름/{name}, 나이: {age}, 컬러: {color}</h2>
        <p>
          <button onClick={ onName1 }>김정민</button>
          <button onClick={ onName2 }>하정우</button>
          <button onClick={ onName3 }>김윤석</button>
        </p>
        <p>
          <button onClick={ () => { setColor('red') } }>red</button>
          <button onClick={ () => setColor('blue') }>blue</button>
          <button onClick={ () => setColor('green') }>green</button>
        </p>
        <p>
          <button onClick={ () => setAge(20) }>20살</button>
          <button onClick={ () => setAge(15) }>15살</button>
          <button onClick={ () => setAge(2) }>2살</button>
        </p>

    </div>
  );
};

export default Test10;

/*
Hook은 React 16.8버전

함수형 컴포넌트는 렌더링(실행) 할때마다 내부의 것들을 기억하지 못한다.
다시 생성 초기화 ( 함수, 변수 )

내부의 것들을 유지하기 위해 즉,
값을 기억하기 위해서 - Hook이 등장했다.

값을 유동으로 변경해주고 값을 기억 : useState
새로운 state 변수를 선언하고, count라 부르겠습니다.
const [상태 데이터, 상태 데이터를 변경해주는 함수] = useState(초기값);
쉽게 설명. const [변수, 변수를 변경해주는 함수] = useState(초기값);

const [A, B] = useState(0)
A = 0
B() => B(100) => A=100

const [test, setTest] = useState(0) 
setCount(값)
setCount(수식)
*/