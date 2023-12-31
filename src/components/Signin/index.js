import React, { Fragment } from 'react';
import {
   Container,
   FormContent,
   FormH1,
   FormWrap,
   Icon,
   Form,
   FormLabel,
   FormInput,
   FormButton,
   Text,
} from './SigninElements';

const SignIn = () => {
   return (
      <Fragment>
         <Container>
            <FormWrap>
               <Icon to="/">dolla</Icon>
               <FormContent>
                  <Form action="#">
                     <FormH1>Sign in to your account</FormH1>
                     <FormLabel htmlFor="for">Email</FormLabel>
                     <FormInput type="email" required />
                     <FormLabel htmlFor="for">Password</FormLabel>
                     <FormInput type="password" required />
                     <FormButton type="submit">Continue</FormButton>
                     <Text>Forgot Password</Text>
                  </Form>
               </FormContent>
            </FormWrap>
         </Container>
      </Fragment>
   );
};

export default SignIn;
