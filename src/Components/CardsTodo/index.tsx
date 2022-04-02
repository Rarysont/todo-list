import { CloseIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Center, Container, Flex, IconButton, Text } from '@chakra-ui/react';

import { Loading } from '../Loading';

interface Props {
  id: number;
  title: string;
  loading: boolean;
}

export function CardsTodo(props: Props) {
  const { id, title, loading } = props;

  if (loading) {
    return <Loading />;
  }
  return (
    <Container key={id} borderRadius="10px" borderWidth="1px" borderColor="#4d5499" marginBottom="5">
      <Flex justifyContent="space-between">
        <Center marginLeft="5px">
          <Text fontWeight="bold" fontSize="16" color="white">
            {title}
          </Text>
        </Center>

        <Box>
          <IconButton variant="ghost" aria-label="teste" icon={<EditIcon color="white" />}>
            Edit
          </IconButton>
          <IconButton variant="ghost" aria-label="Search database" icon={<CloseIcon color="white" />}>
            Delete
          </IconButton>
        </Box>
      </Flex>
    </Container>
  );
}
