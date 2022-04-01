import { EditIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, IconButton, Center, Container, Flex, Input, InputGroup, Stack, Text } from '@chakra-ui/react';

function Todo() {
  return (
    <Container bg="#7D53DE" minH="100vh" p={4}>
      <Container bg="whitesmoke" borderRadius="10px">
        <Flex flexDirection="column">
          <Center>
            <Text fontWeight="bold" fontSize="24" color="blackAlpha.800">
              Todo List
            </Text>
          </Center>

          <Center>
            <Stack w="75%">
              <InputGroup>
                <Input variant="outline" type="text" placeholder="Digite aqui o seu Todo" />
              </InputGroup>
            </Stack>
          </Center>
          <Box bg="blue.300" marginTop="10" marginBottom="10" borderRadius="10px">
            <Flex justifyContent="space-between">
              <Center marginLeft="5px">
                <Text fontWeight="bold" fontSize="16" color="white">
                  Comprar Remédio
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
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}

export default Todo;
