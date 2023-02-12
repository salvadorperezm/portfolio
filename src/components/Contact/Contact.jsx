import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RxPaperPlane } from "react-icons/rx";

import {
  contactContainer,
  contactContentContainer,
  contactFormContainer,
  textTitle,
} from "./ContactStyles";
import { useState } from "react";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required."),
      email: Yup.string()
        .email("Invalid email.")
        .required("Email is required."),
      subject: Yup.string().required("Subject is required."),
      message: Yup.string().required("Message is required."),
    }),
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      try {
        await emailjs.send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_FORM_ID,
          values,
          import.meta.env.VITE_PUBLIC_KEY
        );
        actions.resetForm();
        toast({
          title: "Email sent successfully.",
          description: "I will be contacting you as soon as possible.",
          position: "top",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        setIsLoading(false);
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: "Please, verify your email or internet connection.",
          position: "top",
          status: "error",
          duration: 6000,
          isClosable: true,
        });
        setIsLoading(false);
      }
    },
  });

  return (
    <Box id="contact" {...contactContainer}>
      <Box {...contactContentContainer}>
        <Text {...textTitle}>{`<Contact />`}</Text>
        <Box {...contactFormContainer} as={"form"}>
          <FormControl
            isRequired
            isInvalid={formik.errors.fullName && formik.touched.fullName}
          >
            <FormLabel>Full Name</FormLabel>
            <Input
              type={"tex"}
              placeholder="John Doe"
              variant={"flushed"}
              name={"fullName"}
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={formik.errors.email && formik.touched.email}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type={"email"}
              placeholder="johndoe@mail.com"
              variant={"flushed"}
              name={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={formik.errors.subject && formik.touched.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type={"text"}
              placeholder={"Subject"}
              variant={"flushed"}
              name={"subject"}
              value={formik.values.subject}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={formik.errors.message && formik.touched.message}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder={"Write your message here..."}
              name={"message"}
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
          </FormControl>
          <Button
            rightIcon={<RxPaperPlane />}
            onClick={formik.handleSubmit}
            isLoading={isLoading}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
