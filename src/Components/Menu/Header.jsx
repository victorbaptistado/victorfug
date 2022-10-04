import { Box, Flex, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Stack style={{ 
                  backgroundImage: "linear-gradient(to right, rgb(5, 71, 107), rgba(5,71,107,0.5))",
                  height: 200, 
                  justifyContent: "space-evenly"
                }}>
      <Box>
        <Text style={{textAlign: "center"}}>
          <Heading style={{color: "rgb(238, 225, 49)"}}>VICTOR FUGAGNOLI</Heading>
          <h1>Transcendence</h1>
        </Text>
      </Box>
    </Stack>
  )
}

export default Header