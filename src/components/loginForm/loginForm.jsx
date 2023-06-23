import React from "react";
import { Box, Button, Container, OutlinedInput, Typography } from "@mui/material"
import { useState } from "react";

const LogInForm = () => {
  const [dataLogin, setdataLogin] = useState({
    login: '',
    password: '',
  });
  return (
    <Box sx={{ backgroundColor: "#DCEBF7", width: "100%",}}>
      <Container sx={{padding:5,width: 480, borderRadius: 2, backgroundColor: "#fff", }}>
        <Typography variant="h2" sx={{ fontSize: 24, color: "#3E85F3", marginBottom: 5 }}>Log In</Typography>
        <label htmlFor="">
          <Typography sx={{fontSize:14, fontWeight:600}}>Name</Typography>
          <OutlinedInput placeholder="nadiia@gmail.com" sx={{borderColor:"rgba(220, 227, 229, 0.60);", width: "100%", height: 54, borderRadius: 2, borderColor: "rgba(220, 227, 229, 0.60)", border: 1 }} />
        </label>
        <label htmlFor="">
          <Typography sx={{fontSize:14, fontWeight:600}}>Password</Typography>
          <OutlinedInput placeholder="****" sx={{ width: "100%", height: 54, borderRadius: 2, borderColor: "rgba(220, 227, 229, 0.60)", border: 1 }} />
        </label>
      <Button
      sx={{marginTop:6, width:400, padding:2, borderRadius:4}}
        variant="contained" >
        Log in
      </Button>
      </Container >
    </Box>
  );
};

export default LogInForm;
