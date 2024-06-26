import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColoModeSwitch from './ColoModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <ColoModeSwitch/> 
    </HStack>
  )
}

export default NavBar
