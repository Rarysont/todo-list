import { Button, Container, FormControl, Input, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormTodo {
  title: string;
}

export function Form() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<IFormTodo>();

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
    if (form.title === '' || form.title.length <= 4) {
      const description = form.title === '' ? 'Digite um valor para prosseguir' : 'Mínimo de caracteres: 4';
      customToast({ title: 'Campo obrigatório', description, status: 'error' });
    } else {
      customToast({ title: 'Tarefa criada com sucesso', description: 'Parabéns', status: 'success' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container flexDirection="row" display="flex">
        <FormControl>
          <Input id="title" placeholder="Adicionar tarefa ao todo" {...register('title')} />
        </FormControl>

        <Container w="30%">
          <Button isLoading={isSubmitting} type="submit">
            Enviar
          </Button>
        </Container>
      </Container>
    </form>
  );
}
