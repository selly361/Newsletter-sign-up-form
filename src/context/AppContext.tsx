import { AppContextProps, IProps } from "./types"
import { createContext, useEffect, useState } from 'react'

import { isEmailValid } from "utils/isEmailValid";

export const AppContext = createContext<AppContextProps>({
    handleInputChange: (e) => {},
    handleSubmit: () => {},
    touched: false,
    modalOpen: false,
    isNotValid: false,
    email: ""
})

function AppContextProvider({ children }: IProps) {

    const [touched, setTouched] = useState(false)
    const [email, setEmail] = useState("")
    const [modalOpen, setModalOpen] = useState(false)
    
    const isNotValid = touched && !isEmailValid(email)

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
        setTouched(true)
    }

    function handleSubmit(){
        if(isEmailValid(email)){
            setModalOpen(true)
        }

        else {
            setTouched(true)
        }
    }



   return (
      <AppContext.Provider value={{ handleInputChange, handleSubmit, touched, modalOpen, isNotValid, email }}>
         {children}
      </AppContext.Provider>
   )
}

export default AppContextProvider