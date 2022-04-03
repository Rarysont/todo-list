import { CheckCircleIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Center, Collapse, Container, Flex, IconButton, Text } from '@chakra-ui/react';

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
}

export function CardsTodo(props: Props) {
  const { id, title, loading, onRemove, isOpen, done, onUpdateTodoDone } = props;

  if (loading) {
    return <Loading />;
  }
  return (
    <Collapse key={id} in={isOpen} style={{ width: '100%' }}>
      <Container borderRadius="10px" borderWidth="1px" borderColor="#4d5499" marginBottom="5">
        <Flex justifyContent="space-between">
          <Center marginLeft="5px">
            <Text fontWeight="bold" fontSize="16" color="white">
              {title}
            </Text>
          </Center>

          <Box>
            {!done && onUpdateTodoDone && (
              <IconButton
                variant="ghost"
                aria-label="teste"
                icon={<CheckCircleIcon />}
                onClick={() => onUpdateTodoDone({ id: String(id), title })}
              />
            )}

            <IconButton variant="ghost" aria-label="teste" icon={<EditIcon />}>
              Edit
            </IconButton>
            <IconButton
              variant="ghost"
              aria-label="Search database"
              icon={<CloseIcon />}
              onClick={() => onRemove({ id: String(id) })}
            >
              Delete
            </IconButton>
          </Box>
        </Flex>
      </Container>
    </Collapse>
  );
}
