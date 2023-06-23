import { Box, Container, ScreenName } from './loginFormStyle';
const { useState } = require('react');

const LogInForm = () => {
  const [dataLogin, setdataLogin] = useState({
    login: '',
    password: '',
  });
  return (
    <Box>
      <Container action="">
        <ScreenName>Log In</ScreenName>
        <label htmlFor="">
          Name <input type="text" />
        </label>
        <label htmlFor="">
          <p>Password</p> <input type="text" />
        </label>
      </Container>
    </Box>
  );
};

export default LogInForm;
