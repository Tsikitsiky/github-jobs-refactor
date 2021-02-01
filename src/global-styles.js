import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Roboto',Helvetica, Arial, sans-serif;
        background-color: #e5e5e5;
        color: #334680;
        font-size: 16px;
        margin: 0;
    }

    a {
        color: #334680;
        text-decoration: none;
    }
`;