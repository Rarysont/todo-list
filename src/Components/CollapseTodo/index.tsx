import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Container, Text } from '@chakra-ui/react';

import { ITodo, IdentificationTodo } from '../../@types/Todo';
import { CardsTodo } from '../CardsTodo';

interface Props {
  onClick: () => void;
  showTodo: boolean;
  todo: ITodo[];
  onRemoveTodo(params: IdentificationTodo): Promise<void>;
  loading: boolean;
  done: boolean;
  // eslint-disable-next-line react/require-default-props
  onUpdateTodoDone?(params: IdentificationTodo): Promise<void>;
}

function CollapseTodo(props: Props) {
  const { onClick, showTodo, todo, onRemoveTodo, loading, done, onUpdateTodoDone } = props;
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
          />
        ))
      ) : (
        <Text>Não há Todo</Text>
      )}
    </Container>
  );
}

export default CollapseTodo;
