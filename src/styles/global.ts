import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
   margin:0;
   padding:0;
   box-sizing: border-box;
}

html{
   font-size: 62.5%
}

html, body #__next{
   background-color: #E4E9F2;
   height:100%;
}

body{
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

a:link, a:visited {
    text-decoration: none;
    color: blue;
    cursor: pointer;
}

img{
   height: 100%;
   width: 100%;
}
`

export default GlobalStyles
