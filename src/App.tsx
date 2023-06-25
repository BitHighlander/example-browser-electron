import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Button,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    Grid, GridItem,
    Card, CardBody, CardFooter, Text, Divider
} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import './App.scss';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/vs2015.css';
const { ipcRenderer } = require('electron');
import axios from 'axios';
hljs.registerLanguage('javascript', javascript);

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`);

axios.defaults.baseURL = 'http://localhost:9001/api/v1';

function App() {


    return (
        <div className='App'>
            hi
        </div>
    );
}

export default App;
