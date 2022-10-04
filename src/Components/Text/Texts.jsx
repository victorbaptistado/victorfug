import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import TextModal from './TextModal'

export const Texts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <Heading as="h3" size="md" textAlign="center" marginBottom={8}>TEXTS</Heading>
      <TextModal isOpen={isOpen} onClose={onClose}/>
      <Button onClick={onOpen}>Open Modal</Button>
    </Box>
  )
}
