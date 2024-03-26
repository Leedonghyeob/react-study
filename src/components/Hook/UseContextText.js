import { useState, createContext } from "react";
import ResultArea from "../ResultArea";

export const ResultContext = createContext();

export default function UseContextText() {
    const [hobby, sethobby] = useState("");
    const [result, setResult] = useState("");
    return (
        <>
            {/* Provider: 하위(자식) 컴포넌트에게 context를전달 */}
            <ResultContext.Provider value={result}>

                <input type="text" value={hobby}
                    onChange={(e) => sethobby(e.target.value)} />
                <button onClick={() => setResult(`취미는 ${hobby}입니다.`)}>
                    결과 보기</button>
                <hr />
                {/* <ResultArea hobby={result} /> */}
                <ResultArea />
            </ResultContext.Provider>

        </>
    )
}