import React from 'react'

import { Container } from './styled'
import { FaAmbulance } from 'react-icons/fa'

const CustomItem = (data: any) => {
   return (
      <Container>
         <div>
            <img
               src="https://e7.pngegg.com/pngimages/907/509/png-clipart-lansoprazole-esomeprazole-graphy-logo-product-caixa-photography-logo.png"
               alt="Imagem ilustrative de remedio generico"
            />
         </div>
         <div>
            <h2>Amaxil 500mg 150 ml</h2>
            <p>codigo: 155030 </p>
         </div>
         <div>
            <FaAmbulance color="#F66715" size={15} />
            <h3>
               Aplicação Domiciliar <strong> Gratuita</strong>
            </h3>
         </div>
      </Container>
   )
}

export default CustomItem
