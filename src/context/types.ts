import { ReactNode } from 'react'


export interface AppContextProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: () => void
    touched: boolean
    modalOpen: boolean
    isNotValid: boolean
}

export interface IProps {
    children: ReactNode;
}