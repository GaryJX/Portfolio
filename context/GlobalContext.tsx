import React from 'react'

const GlobalContext = React.createContext({
  loading: true,
  setLoading: (loading: boolean) => {},
  theme: 'light' as 'light' | 'dark',
  setTheme: (theme: 'light' | 'dark') => {},
})

export default GlobalContext
