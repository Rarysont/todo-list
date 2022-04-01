import { EditIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, IconButton, Center, Container, Flex, Input, InputGroup, Stack, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

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
              <Box key={to.id} borderRadius="10px" borderWidth="1px" borderColor="#4d5499" marginBottom="5">
                <Flex justifyContent="space-between">
                  <Center marginLeft="5px">
                    <Text fontWeight="bold" fontSize="16" color="white">
                      {to.title}
                    </Text>
                  </Center>

                  <Box>
                    <IconButton variant="ghost" aria-label="teste" icon={<EditIcon color="white" />}>
                      Edit
                    </IconButton>
                    <IconButton variant="ghost" aria-label="Search database" icon={<CloseIcon color="white" />}>
                      Delete
                    </IconButton>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}

export default Todo;
