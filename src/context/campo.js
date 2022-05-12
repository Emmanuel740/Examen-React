import {createContext, useState} from "react";

const CampoContext = createContext();

const CampoProvider = ({children}) =>{
     const [Campo, setCampo] = useState(1)

     const handleField = (e) =>{
          console.log(e)
        //   if(e === 'suma'){
        //        console.log('si')
        //        setCount(Count + 1)
        //   }else{
        //        console.log('no')
        //        setCount(Count - 1)

        //   }
     }
     
     const data = {Campo, handleField};
     return <CampoContext.Provider value={data}>{children}</CampoContext.Provider>
}

export {CampoProvider}
export default CampoContext
