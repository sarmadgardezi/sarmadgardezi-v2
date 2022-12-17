
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { defaultSEOConfig } from "../utils/next-seo.config";
import Layout from "src/layout";
import theme from "src/theme";

import '../style.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
 <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;