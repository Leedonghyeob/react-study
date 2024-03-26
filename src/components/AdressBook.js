import {useRef,useState,addrList} from "react";
import { Button, Table, Form} from "react-bootstrap";

import AdressList from "./AdressList";

export default function AdressBook() {
    const [keyword, setKeyword]= useState("");
    const addList = [
        { no: 1, name: "홍길동", phone: "010-1111-1111" },
        { no: 2, name: "아무개", phone: "010-2222-2222" }
    ]

    const optRef = useRef();

    function checkOption() {
        // select 태그 (요소)의 선택된 항목(option)의 value 값
        // console.log(document.querySelector("select").value);
        console.log(optRef.current.value);
        const option = optRef.current.value;
        // option => name, 입력값: 홍길동 ... "홍길동의 연락처는 010-1111-1111"
        addrList.forEach(function(address){
            // address 객체 안에 option => "name" 이라는 속성 값


            if(option in address&&
                address[option] === keyword){
                console.log(`${address.name}의 연락처는 ${address.phone}`);
                return;
            }
        });
        
        // 결과가 있으면 해당 내용을 출력.(콘솔창, alert)
    }




    return (
        <>
            <header>
                <Form.Select ref={optRef}>
                    <option value={"이름"}>이름</option>
                    <option value={"연락처"}>연락처</option>
                </Form.Select>
                &nbsp;
                <input type="text" value={keyword}
                    onChange={(e)=> setKeyword(e.target.value)}
                    placeholder="검색어를입력하세요."></input>
                &nbsp;
                {/* <button onClick={checkOption}>검색</button> */}
                <Button onClick={checkOption}>검색</Button>
            </header>
            <br /><br />
            <main>
                <Table bordered hover striped>
                    <colgroup>
                        <col></col>
                        <col width={"40%"} />
                        <col width={"50%"} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>이름</th>
                            <th>연락처</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addList.map(function (address) {
                                return (
                                    <AdressList key={address.no}
                                        no={address.no}
                                        name={address.name}
                                        phone={address.phone} />

                                )
                            })
                        }
                    </tbody>
                </Table>
            </main >
            <br /><br />
            <footer>
                <input type="text" placeholder="이름"></input>
                <input type="text" placeholder="연락처"></input>
                <button>추가</button>
            </footer>
        </>

    )
}