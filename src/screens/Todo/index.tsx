import { Center, Container, Flex, Stack, Text, useToast } from '@chakra-ui/react';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { IFormTodo } from '../../@types/FormTodo';
import { IdentificationTodo } from '../../@types/Todo';
import { CardsTodo } from '../../Components/CardsTodo';
import { Form } from '../../Components/Form';
import { useTodo } from '../../hooks/todo';

function Todo() {
  const [sucessAddTodo, setSuccessAddTodo] = useState(false);
  const { getTodo, todo, loading, addTodo, removeTodo } = useTodo();

  useEffect(() => {
    (async () => {
      await getTodo();
    })();
  }, [sucessAddTodo]);

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

  const onSubmit: SubmitHandler<IFormTodo> = async (form) => {
    if (form.title === '' || form.title.length <= 6) {
      const description = form.title === '' ? 'Digite um valor para prosseguir' : 'Mínimo de caracteres: 6';
      customToast({ title: 'Campo obrigatório', description, status: 'error' });
    } else {
      try {
        await addTodo(form);
        setSuccessAddTodo(true);
        customToast({ title: 'Tarefa criada com sucesso', description: 'Parabéns', status: 'success' });
      } catch (error) {
        console.error(error);
      } finally {
        setSuccessAddTodo(false);
      }
    }
  };

  async function onRemoveTodo(params: IdentificationTodo) {
    try {
      await removeTodo(params);
    } catch (error) {
      console.error(error);
    }
  }

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
          <Container w="100%" marginTop="10" marginBottom="10" centerContent>
            {todo.length ? (
              // eslint-disable-next-line react/jsx-no-bind
              todo.map((to) => <CardsTodo id={to.id} title={to.title} loading={loading} onRemove={onRemoveTodo} />)
            ) : (
              <Text>Não há Todo</Text>
            )}
          </Container>
        </Flex>
      </Container>
    </Container>
  );
}

export default Todo;
