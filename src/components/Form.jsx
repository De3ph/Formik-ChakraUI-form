import {
  Box,
  VStack,
  FormControl,
  Input,
  Heading,
  Button,
  FormErrorMessage,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { MdPassword } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form() {

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(`Welcome ${values.username}`);
      formik.resetForm();
    },
  });

  return (
    <Box
      w="50%"
      h="50vh"
      bgColor="cyan.100"
      borderRadius="md"
      pt="10"
      mt="20%"
      mx="auto"
    >
      <Box h="100%">
        <VStack h="100%">
          <Box h="30%">
            <Heading>Sign In</Heading>
          </Box>
          <Box>
            <form name="signIn" onSubmit={formik.handleSubmit}>
              <VStack justifyContent="center" spacing="10">

                <FormControl isInvalid={formik.errors.username}>
                  <InputGroup>
                    <InputLeftElement children={<BiUser />} />
                    <Input
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      placeholder="Username"
                    />
                  </InputGroup>

                  <FormErrorMessage>
                    <Text align="center">{formik.errors.username}</Text>
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={formik.errors.password}>
                  <InputGroup>
                    <InputLeftElement children={<MdPassword />} />
                    <Input
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      placeholder="Password"
                      type="password"
                    />
                  </InputGroup>

                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>

                <Button
                  disabled={formik.errors.username || formik.errors.password}
                  type="submit"
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
