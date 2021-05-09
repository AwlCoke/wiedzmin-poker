import React from 'react';
import './App.css';
import { Container} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import ButtonComponent from "./components/button-component";

const theme = {
    spacing: 8,
}

function App() {
  return (
    <Container className="App">
        <Box py={5}>
            <ButtonComponent variant="outlined" color="primary" onClick={ () => {} } />
        </Box>
    </Container>
  );
}

export default App;
