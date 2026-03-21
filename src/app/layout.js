"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.900",
      },
    },
  },
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <SnackbarProvider>
          <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </ChakraProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
