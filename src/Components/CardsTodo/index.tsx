/* eslint-disable react/no-children-prop */
import { CheckCircleIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { Collapse, FormControl, IconButton, Input, InputGroup } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IFormTodo } from '../../@types/FormTodo';
import { IdentificationTodo } from '../../@types/Todo';
import { Loading } from '../Loading';

interface Props {
  id: number;
  title: string;
  loading: boolean;
  onRemove(params: IdentificationTodo): Promise<void>;
  isOpen: boolean;
  done: boolean;
  // eslint-disable-next-line react/require-default-props
  onUpdateTodoDone?(params: IdentificationTodo): Promise<void>;
  onEditTodo(id: string): void;
  editTodo: string;
}

export function CardsTodo(props: Props) {
  const { id, title, loading, onRemove, isOpen, done, onUpdateTodoDone, onEditTodo, editTodo } = props;

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<IFormTodo>();

  const onSubmit: SubmitHandler<IFormTodo> = async (form) => {
    console.log(form);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Collapse key={id} in={isOpen} style={{ width: '100%' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputGroup>
            {editTodo === String(id) ? (
              <Input
                id="title"
                disabled={editTodo !== String(id)}
                placeholder="Adicionar tarefa ao todo"
                {...register('title')}
              />
            ) : (
              <Input
                id="title"
                disabled={editTodo !== String(id)}
                placeholder="Adicionar tarefa ao todo"
                value={title}
                {...register('title')}
              />
            )}
            {editTodo === String(id) && (
              <IconButton
                aria-label="Search database"
                children={<CheckCircleIcon />}
                isLoading={isSubmitting}
                type="submit"
              />
            )}
            {!done && onUpdateTodoDone && editTodo !== String(id) && (
              <IconButton
                variant="ghost"
                aria-label="teste"
                icon={<CheckCircleIcon />}
                onClick={() => onUpdateTodoDone({ id: String(id), title })}
              />
            )}

            {editTodo !== String(id) && (
              <IconButton variant="ghost" onClick={() => onEditTodo(String(id))} aria-label="teste" icon={<EditIcon />}>
                Edit
              </IconButton>
            )}
            {editTodo !== String(id) && (
              <IconButton
                variant="ghost"
                aria-label="Search database"
                icon={<CloseIcon />}
                onClick={() => onRemove({ id: String(id) })}
              >
                Delete
              </IconButton>
            )}
          </InputGroup>
        </FormControl>
      </form>
    </Collapse>
  );
}
