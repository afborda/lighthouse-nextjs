import React from 'react'

import { Container } from './styled'

const Menu = () => {
   return (
      <Container>
         <div className="background-menu">
            <div>
               <a className="link" href="#">
                  Início
               </a>
            </div>
            <div>
               <a className="link" href="#">
                  Combos Promocionais
               </a>
            </div>
            <div>
               <a className="link" href="#">
                  Serviços
               </a>
            </div>
         </div>
      </Container>
   )
}

export default Menu
