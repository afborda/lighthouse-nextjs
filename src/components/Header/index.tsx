import React from 'react'

import { Container } from './styled'

const Header = () => {
   return (
      <Container>
         <div>
            <p className="pg-inicial">Pagina Inicial\</p>
            <h1 className="pg-title">Meds</h1>
         </div>
         <div className="container-botao">
            <a className="botao-voltar" href="#">
               Voltar
            </a>
         </div>
      </Container>
   )
}

export default Header
