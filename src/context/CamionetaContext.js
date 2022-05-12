import { createContext, useState } from "react";

const CamionetaContext = createContext();

const CamionetaProvider = ({ children }) => {
    const [Camioneta, setCamioneta] = useState({
        modelo: "Lobo 2020",
        marca: "Ford",
        nombreAgencia: "Ford Aguascalientes"
    })
    return <CamionetaContext.Provider value={Camioneta}>{children}</CamionetaContext.Provider>
}

export { CamionetaProvider }
export default CamionetaContext
