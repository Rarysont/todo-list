import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Center, Container, Flex, Stack, Text, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { IFormTodo } from '../../@types/FormTodo';
import { IdentificationTodo } from '../../@types/Todo';
import { CardsTodo } from '../../Components/CardsTodo';
import { Form } from '../../Components/Form';
import { useTodo } from '../../hooks/todo';

function Todo() {
  const [sucessAddTodo, setSuccessAddTodo] = useState(false);
  const [deleteTodo, setDeleteTodo] = useState(false);
  const { getTodo, todo, loading, addTodo, removeTodo } = useTodo();

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  useEffect(() => {
    (async () => {
      await getTodo();
    })();
  }, [sucessAddTodo, deleteTodo]);

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
      setDeleteTodo(true);
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteTodo(false);
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
          <Center marginBottom="5">
            <Text fontSize="20" fontWeight="bold">
              Todo List
            </Text>
          </Center>

          <Center>
            <Stack w="75%">
              <Form onSubmit={onSubmit} />
            </Stack>
          </Center>
          <Container marginTop="10" marginBottom="10">
            <Container marginBottom="2" marginLeft="-30">
              <Button
                onClick={handleToggle}
                variant="link"
                fontSize="16"
                rightIcon={
                  show ? <ChevronDownIcon width="30px" height="30px" /> : <ChevronUpIcon width="30px" height="30px" />
                }
              >
                Tarefas a realizar
              </Button>
            </Container>

            {todo.length ? (
              todo.map((to) => (
                // eslint-disable-next-line react/jsx-no-bind
                <CardsTodo id={to.id} title={to.title} loading={loading} onRemove={onRemoveTodo} isOpen={show} />
              ))
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
