import React, { useContext } from 'react'

import {AppContext} from 'context/AppContext'

export const useAppContext = () => {
   const context = useContext(AppContext)
   if (context === undefined) {
      throw new Error('useAppContext must be used within AppContextProvider')
   }

   return context
}