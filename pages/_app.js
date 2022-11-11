import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react'; 
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {


  return (
    <ChakraProvider>
      <RecoilRoot>
          <Component {...pageProps} />
      </RecoilRoot>
      <ToastContainer />
    </ChakraProvider>
  )
}

export default MyApp
