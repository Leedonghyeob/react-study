/*
    useRef : 특정 DOM에 접근하거나,
            어떤 값(상태)의 변경을 렌더링 없이 저장할 때 사용되는 함수(hook)
    [1] import {useRef} from 'react';
    [2] const 변수명 = useRef();
        변수명 = {
            current: {//..}
        }
    [3] 특정 DOM에 접근하고자 할 때
        <태그 ref={변수명}  />

*/

import {useEffect, useRef} from 'react';

export default function UseRefTest(){
    const idRef = useRef();

    // 처음 렌더링 시점에 어떤 동작을 수행하고자 할 때
    useEffect(()=>{
        // 아이디 입력창에 포커스를 주기
        idRef.current.focus();
    },[]);
    return(
        <div className="center">
            <input type="text" ref={idRef} placeholder="아이디"/><br/>
            <input type="password" placeholder="비밀번호"/><br/>
            <button>로그인</button>
            {/* location 객체 .. */}
            <button onClick={() => {window.location.reload()}}>새로고침</button>
            {/* <button onClick={() => {window.location.href=window.location.href}}>새로고침</button> */}
        </div>


    )

}