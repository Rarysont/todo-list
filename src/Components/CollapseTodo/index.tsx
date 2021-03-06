import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Collapse, Container, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { ITodo, IdentificationTodo } from '../../@types/Todo';
import { CardsTodo } from '../CardsTodo';

interface Props {
  onClick: () => void;
  showTodo: boolean;
  todo: ITodo[];
  onRemoveTodo(params: IdentificationTodo): Promise<void>;
  loading: boolean;
  done: boolean;
  onEditTodo(id: string): void;
  // eslint-disable-next-line react/require-default-props
  onUpdateTodoDone?(params: IdentificationTodo): Promise<void>;
  editTodo: string;
  onUpdateTitleTodo: SubmitHandler<IdentificationTodo>;
  setInfoUpdateTodo: Dispatch<SetStateAction<{ id: string; done: boolean }>>;
}

function CollapseTodo(props: Props) {
  const {
    onClick,
    showTodo,
    todo,
    onRemoveTodo,
    loading,
    done,
    onUpdateTodoDone,
    onEditTodo,
    editTodo,
    onUpdateTitleTodo,
    setInfoUpdateTodo,
  } = props;

  return (
    <Container>
      <Container marginBottom="2" marginLeft="-30">
        <Button
          onClick={onClick}
          variant="link"
          fontSize="16"
          rightIcon={
            showTodo ? <ChevronDownIcon width="30px" height="30px" /> : <ChevronUpIcon width="30px" height="30px" />
          }
        >
          {done ? 'Tarefas realizadas' : 'Tarefas a realizar'}
        </Button>
      </Container>
      {todo.length ? (
        todo.map((to) => (
          <CardsTodo
            id={to.id}
            title={to.title}
            loading={loading}
            onRemove={onRemoveTodo}
            isOpen={showTodo}
            done={done}
            onUpdateTodoDone={onUpdateTodoDone}
            onEditTodo={onEditTodo}
            editTodo={editTodo}
            onUpdateTitleTodo={onUpdateTitleTodo}
            setInfoUpdateTodo={setInfoUpdateTodo}
          />
        ))
      ) : (
        <Collapse in={showTodo} style={{ width: '100%' }}>
          <Text>N??o h?? Todo</Text>
        </Collapse>
      )}
    </Container>
  );
}

export default CollapseTodo;
