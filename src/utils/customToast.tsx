import { useToast } from '@chakra-ui/react';

const toast = useToast();

export const customToast = ({
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
