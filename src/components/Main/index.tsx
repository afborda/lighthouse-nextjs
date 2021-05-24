import Carousel from 'components/Carousel'
import CombosPromocionais from 'components/CombosPromocionais'
import Header from 'components/Header'
import Menu from 'components/Menu'
import Parceiro from 'components/Parceiro'
import { Container, MainContainer } from './styled'

const Main = () => (
   <Container>
      <MainContainer>
         <Header />
         <Carousel />
         <Menu />
         <Parceiro />
         <CombosPromocionais />
      </MainContainer>
   </Container>
)

export default Main
