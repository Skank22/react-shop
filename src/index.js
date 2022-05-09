import React from 'react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createRoot } from 'react-dom/client';

const client = new ApolloClient({
    uri: 'https://dev-backend.raincheck.co/graphql',
    cache: new InMemoryCache(),
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
);
