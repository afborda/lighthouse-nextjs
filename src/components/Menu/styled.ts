import styled from 'styled-components'

export const Container = styled.div`
   margin-top: 5px;
   height: 60px;
   border-bottom-left-radius: 8px;
   border-bottom-right-radius: 8px;
   background-color: #ffffff;

   .background-menu {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      div {
         width: 20%;
      }
   }

   .link {
      font-weight: bold;
      height: 100%;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #4fc0e0;
      padding: 22px;
   }
`
