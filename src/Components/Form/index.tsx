import { Button, Container, FormControl, Input } from '@chakra-ui/react';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IFormTodo } from '../../@types/FormTodo';

interface IProps {
  onSubmit: SubmitHandler<IFormTodo>;
}

export function Form(props: IProps) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormTodo>();

  const { onSubmit } = props;

  useEffect(() => {
    reset({
      title: '',
    });
  }, [isSubmitting]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container flexDirection="row" display="flex">
        <FormControl>
          <Input id="title" placeholder="Adicionar tarefa ao todo" {...register('title')} />
        </FormControl>

        <Container w="30%">
          <Button isLoading={isSubmitting} type="submit">
            Adicionar
          </Button>
        </Container>
      </Container>
    </form>
  );
}
