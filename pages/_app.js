import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { extendTheme } from "@chakra-ui/react" 
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#000",
      200: "#fff",
    },
  },
})


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5GTJ7W8' });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp