import { Container, Spinner } from '@chakra-ui/react';

export function Loading() {
  return (
    <Container centerContent marginTop="20">
      <Spinner size="xl" />
    </Container>
  );
}
