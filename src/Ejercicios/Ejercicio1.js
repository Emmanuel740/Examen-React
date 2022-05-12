import  React from 'react';


export const ExamenWolf = (props) =>{

    const [text, setText] = React.useState("react js");
    React.useEffect(() =>{
        console.log('texto inicializado')
    },[text])
    return (
        <h1>{text}</h1>
    )
}
