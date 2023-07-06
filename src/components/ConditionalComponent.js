import React, {useState} from 'react'

function ConditionalComponent() {
    const [display, setDisplay] = useState(true);

    // Ternary conditional rendering
    return display ? (
        <div><h3>Conditional component</h3></div>
        ) : (
        <div><h3>Nothing much to see here.</h3></div>
        ) ;

    // conditional rendering with elements.
    // let output;
    // if(display){
    //     output = <h3>Conditional component</h3>
    // } else {
    //     output = <h3>Nothing much to see here</h3>
    // }
    
    // return (
    //     <div>
    //         {output}
    //     </div>
    // )
}

export default ConditionalComponent;