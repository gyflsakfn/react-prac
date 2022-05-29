import React from 'react';

const Test5 = () => {
  const done1 = true
  const done2 = false
  const done3 = undefined
  return (
    <div>
      <p> { done1 == true ? <button>참확인</button>:<button>거짓확인</button>}</p>
    </div>
  );
};

export default Test5;
/*
    jsx : &&, 삼항, ***
          ||

*/