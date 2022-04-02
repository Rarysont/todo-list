import { Box, Center, Container, Flex, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';

import { CardsTodo } from '../../Components/CardsTodo';
import { Form } from '../../Components/Form';
import { Loading } from '../../Components/Loading';
import { useTodo } from '../../hooks/todo';

function Todo() {
  const { getTodo, todo, loading } = useTodo();

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
          <Center>
            <Stack w="75%">
              <Form />
            </Stack>
          </Center>
          <Box w="100%" marginTop="10" marginBottom="10">
            {todo.length > 0 && !loading ? todo.map((to) => <CardsTodo id={to.id} title={to.title} />) : <Loading />}
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}

export default Todo;
