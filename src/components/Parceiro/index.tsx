import React from 'react'

import { Container } from './styled'

const Parceiro = () => {
   return (
      <Container>
         <div style={{ width: '50%' }}>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>

            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
               labore tempora aliquid debitis est voluptatum accusantium
               praesentium distinctio tempore odit eaque expedita esse, sapiente
               error? Quasi autem pariatur at voluptatem!
            </p>

            <div>
               <h3>Parceiro</h3>
               <div className="img-parceiro">
                  <img
                     src="https://cdn1.staticpanvel.com.br/static/site/images/icon-app.png?ver=1621310524936"
                     alt="logo panvel parceiro"
                  />
               </div>
            </div>
         </div>
      </Container>
   )
}

export default Parceiro
