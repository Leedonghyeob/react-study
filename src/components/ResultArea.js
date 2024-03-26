import {useContext} from "react"
import { ResultContext} from "./Hook/UseContextText"

export default function ResultArea(props) {
    const style =  {
        height : '300px',
        border : '1px solid blue'
    }
    
    const hobby = useContext(ResultContext);

    return(
        <div style={style}>
            {/* <p>{props.hobby}</p> */}
            <p>{hobby}</p>
        </div>
    )
}