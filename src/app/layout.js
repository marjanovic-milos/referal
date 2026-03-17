"use client";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { SnackbarProvider, useSnackbar } from "notistack";

const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={``}>
        <SnackbarProvider>
          <ChakraProvider>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
          </ChakraProvider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
