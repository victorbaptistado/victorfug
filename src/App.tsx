import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Components/HomePage';
import { Texts } from './Components/Texts';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import Header from './Components/Header';
import { ApolloProvider } from '@apollo/client';
import { client } from "./ApolloClient/client";


function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <Navbar/>
      <Box style={{backgroundColor: "rgba(26, 107, 194, 0.486)", padding: 50 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/texts" element={<Texts />} />
        </Routes>
      </Box>
    </ApolloProvider>
  );
}

export default App;
