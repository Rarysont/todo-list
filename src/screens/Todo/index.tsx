import { Box, Center, Container, Flex, Stack, useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { IFormTodo } from '../../@types/FormTodo';
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

  const toast = useToast();

  const customToast = ({
    title,
    description,
    status,
  }: {
    title: string;
    description: string;
    status: 'info' | 'warning' | 'success' | 'error' | undefined;
  }) => {
    return toast({
      duration: 3000,
      position: 'top-right',
      title,
      description,
      status,
    });
  };

  const onSubmit: SubmitHandler<IFormTodo> = (form) => {
    if (form.title === '' || form.title.length <= 6) {
      const description = form.title === '' ? 'Digite um valor para prosseguir' : 'Mínimo de caracteres: 6';
      customToast({ title: 'Campo obrigatório', description, status: 'error' });
    } else {
      customToast({ title: 'Tarefa criada com sucesso', description: 'Parabéns', status: 'success' });
    }
  };

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
              <Form onSubmit={onSubmit} />
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
