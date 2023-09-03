import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot, ReactDOM } from "react-dom/client";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";

import './index.css';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ThirdwebProvider clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID} activeChain={activeChain} desiredChainId={ChainId.Sepolia} >
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
);