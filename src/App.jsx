import './App.css'
import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1)
  }

  function decrement(){
    if (count > 0){
      setCount(count - 1)
    }
  }

  return (
    <Center h='100vh'>
      <Box p={4} maxW="md" w="100%" textAlign="center">
        <Text fontSize="100px" fontFamily='monospace' fontWeight="bold" mb={4}>
          {count}
        </Text>
        <Button colorScheme="blue" onClick={increment} disabled={count === 10} ml={2} m={5}>
          Incrementar
        </Button>
        <Button colorScheme="red" onClick={decrement} hidden={count == 0 ? 'hidden':''} ml={2} m={5}>
          Decrementar
        </Button>
      </Box>
    </Center>
  );
}

export default App
