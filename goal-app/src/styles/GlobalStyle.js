import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 } 

 html {
   height: 100%;
 }

 body {
  background: ${({ theme }) => theme.colors.darkBlue}; 
 }

 a {
   color: ${({ theme }) => theme.colors.gray};
 }

 p {
   font-size: 16px;
   color: ${({ theme }) => theme.colors.white};
   font-family: ${({ theme }) => theme.text.nunito}, sans-serif;
 }

 button {
    background-color: ${({ theme }) => theme.colors.turquoise};
    color: ${({ theme }) => theme.colors.gray};
    border-radius: 30px;
    padding: 10px;
    outline: none;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.darkBlue};
 }

 button:hover {
   cursor: pointer;
 }

 input, select, textarea {
   padding: 10px;
   margin: 5px;
   min-width: 100%;
   max-width: 100%;
   outline: none;
   border: none;
   border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
 }

 label {
   color: ${({ theme }) => theme.colors.gray};
   font-family: ${({ theme }) => theme.text.nunito}, sans-serif;
    font-size: 12px;
    text-transform: uppercase;
 }

h1, h2, h3, h4, h5 {
  font-family: ${({ theme }) => theme.text.quicksand}, sans-serif;
  font-weight: 900;
  text-align: center;
}

a:link {
  text-decoration: none;
}
 `;
