import styled from '@emotion/styled'
import React from 'react'

const Box = styled.div`
  background-color: #eeeeee;
  min-height: 100vh;
  width: 100vw;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const AppBackground = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default AppBackground