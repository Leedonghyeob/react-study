/*
    함수형 컴포넌트 (Functional Component)
    - 클래스형 컴포넌트에 비해 비교적 간단
    - React 16.8 이후로 훅(hook) 기능이 추가되어
     상태(state), 생명주기(life cycle) 관리가 가능하게 됨
*/
import React, {useState,useEffect} from 'react';


function FunctionalComponents(){
    const [message, setMessage] = useState("hi");

    // useEffect : 렌더링시점마다실행되는 훅 (hook)
    // - 처음 한번만 실행하고자 할 경우 두번째 인자 값으로 [] 작성
    // useEffect(() => {
    //     setMessage("나는 함수형 컴포넌트입니다.")
    // },[])

    return (
        <>
        <button onClick= {() => { setMessage("errorCode")}}>내용 바꾸기</button>
        <p>{message}</p>             
        </>
    )
}

export default FunctionalComponents;
