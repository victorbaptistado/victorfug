import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <Box style={{backgroundColor: "rgb(10, 25, 41)"}}>
        <ul style={{
                    padding: 10,
                    display: "flex",
                    flexDirection: "row",
                    listStyleType: "none",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    marginRight: 300,
                    marginLeft: 300,
                  }}>
            <li><Link style={{textDecoration: "none"}} to="/"><h4>HOME</h4></Link></li>
            <li><Link style={{textDecoration: "none"}} to="/texts"><h4>TEXTS</h4></Link></li>
            <li><Link style={{textDecoration: "none"}} to="/about"><h4>ABOUT</h4></Link></li>
        </ul>
    </Box>
  )
}
