import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {}
})

const globalStyles = (
  <GlobalStyles
    styles={{
      'html, body, #root': {
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundColor: 'blue'
      },
      body: {
        fontFamily: 'Roboto, Source Sans Pro, Arial, Helvetica'
      },
      '#root': {
        display: 'flex',
        flex: '1'
      }
    }}
  />
)

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        {/* {globalStyles} */}
        <Typography>Foobar</Typography>
        {/* <Flex flexColumn>
        <Conversation />
        <Composer />
      </Flex> */}
      </React.Fragment>
    </ThemeProvider>
  )
}
