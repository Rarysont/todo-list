import { Button, Container, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormTodo extends FormData {
  title: string;
}

export function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IFormTodo>();

  const onSubmit: SubmitHandler<IFormTodo> = (form) => {
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Container flexDirection="row" display="flex"> */}
      <FormControl>
        <Input
          id="title"
          placeholder="Adicionar tarefa ao todo"
          {...register('title', {
            required: 'Campo obrigatório',
            minLength: { value: 8, message: 'O tamanho minímo de caracteres são 4' },
          })}
        />
        <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
      </FormControl>

      {/* <Container w="30%"> */}
      <Button type="submit">Enviar</Button>
      {/* </Container>
      </Container> */}
    </form>
  );
}
