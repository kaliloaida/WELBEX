import React from 'react'
import styled from 'styled-components'
import Body from '../../components/body/Body'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/header/Header'

export default function Home() {
   return (
      <Container>
         <MainPage>
            <Spans>
               <BackFont1 />
               <BackFont2 />
               <PurpleBall />
               <RedBall />
               <RedBallSmall />
            </Spans>
            <Header />
            <Body />
            <Footer />
         </MainPage>
      </Container>
   )
}
const Container = styled.div`
   margin: 0 auto;
`
const MainPage = styled.div`
   position: relative;
   width: 100%;
   height: 980px;
   overflow: hidden;
   background: #0e1014;
`
const Spans = styled.span`
   /* position: absolute; */
`
const BackFont1 = styled.span`
   position: absolute;
   width: 259px;
   height: 259px;
   left: 500px;
   top: -154px;
   background: #833ab4;
   opacity: 0.5;
   filter: blur(196px);
`
const BackFont2 = styled.span`
   position: absolute;
   width: 311px;
   height: 311px;
   left: -102px;
   top: 245px;
   background: #961a1a;
   opacity: 0.5;
   filter: blur(196px);
`
const PurpleBall = styled.span`
   position: absolute;
   width: 60px;
   height: 60px;
   left: 800px;
   top: -2px;
   border-radius: 50%;
   background: radial-gradient(
      64% 64% at 27.25% 26.5%,
      rgba(236, 208, 255, 0.64) 0%,
      rgba(161, 93, 207, 0.24) 59.67%,
      rgba(118, 49, 164, 0.208) 78.59%,
      rgba(86, 24, 128, 0.232) 100%
   );
   box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
   filter: blur(5px);
   backdrop-filter: blur(2px);
`
const RedBall = styled.span`
   position: absolute;
   width: 83px;
   height: 83px;
   left: 430px;
   top: 87px;
   border-radius: 50%;

   background: radial-gradient(
      64% 64% at 27.25% 26.5%,
      rgba(255, 208, 208, 0.536) 0%,
      rgba(212, 93, 93, 0.264) 59.67%,
      rgba(167, 49, 49, 0.248) 78.59%,
      rgba(130, 25, 25, 0.248) 100%
   );
   box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
   backdrop-filter: blur(2px);
`
const RedBallSmall = styled.span`
   position: absolute;
   width: 28px;
   height: 28px;
   left: 750px;
   top: 550px;
   border-radius: 50%;

   background: radial-gradient(
      64% 64% at 27.25% 26.5%,
      rgba(255, 208, 208, 0.48) 0%,
      rgba(212, 93, 93, 0.248) 59.67%,
      rgba(167, 49, 49, 0.264) 78.59%,
      rgba(130, 25, 25, 0.232) 100%
   );
   box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
   filter: blur(2.5px);
   backdrop-filter: blur(2px);
`
