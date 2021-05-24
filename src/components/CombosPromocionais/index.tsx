import CustomItem from 'components/shared/CustomItem'
import React from 'react'

import { Container } from './styled'

const data = [
   {
      name: 'abner',
      teste: 'teste'
   }
]

const CombosPromocionais = () => {
   return (
      <Container>
         <div className="container-promo">
            <h1>Combos Promocionais</h1>
            <h3>Ver mais</h3>
         </div>
         {data.map((value, index) => (
            <>
               <CustomItem data={value} />
            </>
         ))}
      </Container>
   )
}

export default CombosPromocionais
