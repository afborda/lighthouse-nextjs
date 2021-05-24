import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Container } from './styled'

const CarouselCustom = () => {
   return (
      <Container>
         <Carousel showStatus={false} showThumbs={false}>
            <div>
               <img src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1043&q=80" />
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1013&q=80" />
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </div>
         </Carousel>
      </Container>
   )
}

export default CarouselCustom
