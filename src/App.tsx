import { ChakraProvider } from '@chakra-ui/react';

import { TodoProvider } from './hooks/todo';
import Routes from './Routes';

function App() {
  return (
    <ChakraProvider>
      <TodoProvider>
        <Routes />
      </TodoProvider>
    </ChakraProvider>
  );
}

export default App;
