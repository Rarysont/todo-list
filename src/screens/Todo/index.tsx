import { Box, Center, Container, Flex, Input, InputGroup, Stack, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

import { CardsTodo } from '../../Components/CardsTodo';
import { useTodo } from '../../hooks/todo';

function Todo() {
  const { getTodo, todo } = useTodo();

  useEffect(() => {
    (async () => {
      await getTodo();
    })();
  }, []);

  return (
    <Container
      display="flex"
      justifyContent="start"
      flexDirection="column"
      w="520px"
      minH="600px"
      margin="128px auto"
      borderRadius="10px"
      borderWidth="1px"
      borderColor="#4d5499"
    >
      <Container w="100%" borderRadius="10px" marginTop="10">
        <Flex flexDirection="column">
          <Center marginBottom="5">
            <Text fontWeight="bold" fontSize="24">
              Todo List
            </Text>
          </Center>

          <Center>
            <Stack w="75%">
              <InputGroup>
                <Input variant="filled" type="text" placeholder="Digite aqui o seu Todo" />
              </InputGroup>
            </Stack>
          </Center>
          <Box w="100%" marginTop="10" marginBottom="10">
            {todo.map((to) => (
              <CardsTodo id={to.id} title={to.title} />
            ))}
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}

export default Todo;
