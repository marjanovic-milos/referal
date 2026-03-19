"use client";
import Image from "next/image";
import UsersList from "./components/userList";
import CreateUser from "./components/createUser";
import GoogleLogin from "./components/auth/google";
import { useSnackbar } from "notistack";

import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Text, Button } from "@chakra-ui/react";
export default function Home() {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <UsersList />

      {/* <Button onClick={() => enqueueSnackbar("I love hooks")}>Show snackbar</Button> */}
      {/* 
      <Card maxW='sm'>
        <CardBody>
          <Image width={100} height={100} src='../../public/vercel.svg' alt='Green double couch with wooden legs' borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with
              a sprinkle of vintage design.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card> */}
      <CreateUser />
    </div>
  );
}
