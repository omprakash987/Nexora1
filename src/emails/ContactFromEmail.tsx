


import { Html, Head, Body, Heading, Text, Container } from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container>
          <Heading as="h1">New Contact Form Submission</Heading>
          <Text>Name: {name}</Text>
          <Text>Email: {email}</Text>
          <Text>Message: {message}</Text>
        </Container>
      </Body>
    </Html>
  );
}