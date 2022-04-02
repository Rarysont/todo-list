import { Box, Center, Container, Flex, Input, InputGroup, Stack, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { CardsTodo } from '../../Components/CardsTodo';
import { Form } from '../../Components/Form';
import { Loading } from '../../Components/Loading';
import { useTodo } from '../../hooks/todo';

function Todo() {
  const { getTodo, todo, loading } = useTodo();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    (async () => {
      await getTodo();
    })();
  }, []);

  // function submit(form: any) {
  //   console.log(form);
  // }

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
          {/* <Center marginBottom="5">
            <Text fontWeight="bold" fontSize="24">
              Todo List
            </Text>
          </Center> */}
          <Center>
            <Stack w="75%">
              <Form />
              {/* <InputGroup>
                <Input variant="filled" type="text" placeholder="Digite aqui o seu Todo" />
              </InputGroup> */}
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
