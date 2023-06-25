import { createContext, useEffect, useState } from 'react'
import { isEmailValid } from "utils/isEmailValid";
import { AppContextProps, IProps } from "./types"

export const AppContext = createContext<AppContextProps>({
    handleInputChange: (e) => {},
    handleSubmit: () => {},
    touched: false,
    modalOpen: false,
    isNotValid: false
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
      <AppContext.Provider value={{ handleInputChange, handleSubmit, touched, modalOpen, isNotValid }}>
         {children}
      </AppContext.Provider>
   )
}

export default AppContextProvider