import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const TextModal = ({isOpen, onClose}) => {
  return (
    <Modal size={'full'} isOpen={isOpen} onClose={onClose}>
    <ModalOverlay  />
    <ModalContent >
        <ModalHeader textAlign={"center"}>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        ABOUT

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit libero volutpat. Risus at ultrices mi tempus. Vitae congue mauris rhoncus aenean. Suspendisse ultrices gravida dictum fusce ut. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Accumsan in nisl nisi scelerisque eu ultrices. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Enim eu turpis egestas pretium aenean pharetra. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Risus feugiat in ante metus dictum at. Risus nullam eget felis eget nunc lobortis mattis aliquam. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Mauris nunc congue nisi vitae suscipit tellus mauris a. Risus nec feugiat in fermentum posuere. Netus et malesuada fames ac turpis egestas sed tempus urna. Urna et pharetra pharetra massa massa ultricies. In hac habitasse platea dictumst quisque. Nunc id cursus metus aliquam eleifend mi in. Eget nullam non nisi est sit. Enim neque volutpat ac tincidunt vitae. Pulvinar pellentesque habitant morbi tristique. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. At tellus at urna condimentum mattis. Cursus risus at ultrices mi tempus imperdiet. Pellentesque elit eget gravida cum sociis. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Pellentesque habitant morbi tristique senectus. Cursus eget nunc scelerisque viverra mauris. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sed elementum tempus egestas sed sed risus pretium. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Eu consequat ac felis donec et odio pellentesque.

Id leo in vitae turpis massa. Et magnis dis parturient montes nascetur ridiculus mus mauris. Facilisis volutpat est velit egestas. Sed augue lacus viverra vitae congue. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ut porttitor leo a diam sollicitudin tempor id eu. Velit sed ullamcorper morbi tincidunt ornare massa. Tincidunt praesent semper feugiat nibh. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Porttitor leo a diam sollicitudin tempor id eu nisl. Sit amet venenatis urna cursus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Enim sit amet venenatis urna cursus eget. Arcu odio ut sem nulla pharetra diam sit amet nisl. Aliquet lectus proin nibh nisl condimentum. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Sagittis vitae et leo duis ut diam quam nulla. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Elit at imperdiet dui accumsan. Sit amet consectetur adipiscing elit pellentesque. At urna condimentum mattis pellentesque id nibh. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Arcu vitae elementum curabitur vitae. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Ornare arcu dui vivamus arcu felis bibendum ut tristique et.
        </ModalBody>
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default TextModal