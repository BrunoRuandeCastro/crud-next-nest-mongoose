import Header from '@/components/Header';
import { Box, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

//const Home: React.FC<LayoutProps> = ({ children }) => {
export default function Home() {
  return (
    <Box>
      <Header />
      <Flex align="center" justifyContent="center"></Flex>
    </Box>
  );
}

// export default function Home() {
//   return (
//     <Box>
//       <Header />
//       <Flex align="center" justifyContent="center"></Flex>
//     </Box>
//   );
// }
