import React from 'react';

const Test6 = () => {
  return (
    <div>
      <Dog name="강아지" age="5" />
      <hr/>
      <Cat name="고양이"/>
      <hr/>
      <Bird name="시조새"/>
      {/* 
      <컴포넌트명 변수명 = 값
      <컴포넌트명 props명 = 전달 값
      <컴포넌트명 속성 = 값
       */}
    </div>
  );
};

const Dog = ( props ) => {
  // props는 객체로 인식 - 속성은 키로 설정된다.
  // props = { name : 강아지 } -> props.name, props.age
  return (
    <div>
      <h2>{props.name}의 나이는 {props.age} 입니다.</h2>
    </div>
  );
};


const Cat = ( props ) => {
  // props = { name: 고양이 }
  // 구조분해, 비구조할당
  const { name } = props
  return (
    <div>
      <h2> {name} 컴포넌트 </h2>
    </div>
  );
};

const Bird = ( {name} ) => {
  return (
    <div>
      <h2> { name } 컴포넌트 </h2>
    </div>
  );
};

export default Test6;

/*
React 컴포넌트의 단방향 데이터 흐름. ( 컴포넌트에 값을 전달 )

부모 컴포넌트에서 자식 컴포넌트에 값을 전달할 때
자식 컴포넌트에서 부모의 값을 받아올 때

React 컴포넌트는 상위 컴포넌트에서 하위 컴포넌트로 데이터(props)가 흐릅니다. 
하위 컴포넌트는 전달 받은 props를 읽기만 가능하고, 쓸 수 없습니다. (READONLY)
*/