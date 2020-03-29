import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { FiSun, FiMoon } from 'react-icons/fi'
import Routes from './routes'

import { ThemeToggle } from './components/SharedComponents'
import { GlobalStyles } from './global'
import Themes from './themes'

function App() {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'Dark'
      : 'Light',
  )

  const toggleTheme = () => {
    if (theme === 'Light') {
      setTheme('Dark')
    } else {
      setTheme('Light')
    }
  }

  return (
    <ThemeProvider theme={Themes[theme]}>
      <ThemeToggle onClick={toggleTheme}>
        {theme === 'Light' ? (
          <FiSun size={20} color="#000" />
        ) : (
          <FiMoon size={20} color="#fff" />
        )}
      </ThemeToggle>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
