import { forwardRef } from "react"

// const ForwardRef = (props,ref)=>{
//     return(
//     <div>
//         <input type="text" ref={ref} />
//     </div>
//     )
// }

// export default forwardRef(ForwardRef);



const ForwardRef = (props) => {
    return(
        <div>
            <input type="text" ref={props.ref} />
        </div>
    )
}

export default ForwardRef;