import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot, ReactDOM } from "react-dom/client";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from './context';
import App from "./App";

import './index.css';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ThirdwebProvider clientId={process.env.API_CLIENT_ID} activeChain={activeChain} >
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
);