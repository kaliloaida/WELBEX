import React from 'react'
import styled from 'styled-components'
import Flex from '../ui-position/Flex'
import Title from '../ui-position/Title'
import Text from '../ui-position/Text'

export default function Body() {
   return (
      <Flex gap="440px" width="100%">
         <Text1>
            <Title size="48px" height="58px">
               Зарабатывайте <br /> больше <br />
               <Span1>c WELBEX</Span1>
            </Title>
            <br />
            <Text>
               Развиваем и контролируем <br /> продажи за вас
            </Text>
         </Text1>
         <Text2>
            <Title>
               Вместе c <Span3>бесплатной</Span3>
               <Span2> консультацией</Span2> мы дарим:
            </Title>
            <br />
            <Flex>
               <div>
                  <Title uppercase>Виджеты</Title>
                  <br />
                  <Text size="16px" height="20px">
                     30 готовых решений
                  </Text>
               </div>
               <div>
                  <Title spacing="0.05em" uppercase>
                     Dashboard
                  </Title>
                  <br />
                  <Text size="16px" height="20px">
                     c показателями вашего бизнеса
                  </Text>
               </div>
            </Flex>
            <br />
            <Flex gap="35px">
               <div>
                  <Title spacing="0.05em" uppercase>
                     Skype Аудит
                  </Title>
                  <br />
                  <Text size="16px" height="20px">
                     отдела продаж <br /> и CRM системы
                  </Text>
               </div>
               <div>
                  <Title spacing="0.05em" uppercase>
                     35 дней
                  </Title>
                  <br />
                  <Text size="16px" height="20px">
                     использования <br /> CRM
                  </Text>
               </div>
            </Flex>
            <Button>
               <Text>Получить консультацию</Text>
            </Button>
         </Text2>
      </Flex>
   )
}

const Text1 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: start;
   margin: 100px 0 0 50px;
   width: 90%;
`
const Span1 = styled.span`
   background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
`
const Span2 = styled.span`
   background: linear-gradient(92deg, #fcb045 1%, #fd1d1d 300.36%), #e4e5ea;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   text-transform: uppercase;
`
const Span3 = styled.span`
   background: linear-gradient(92deg, #fcb045 20.14%, #fd1d1d 100%), #e4e5ea;
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   text-transform: uppercase;
`
const Text2 = styled.div`
   display: grid;
   align-items: center;
   justify-content: center;
   margin: 110px 50px 0px 0px;
   text-align: right;
   width: 70%;
`
const Button = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 262px;
   height: 61px;
   border: none;
   margin: 30px 0 0 35px;
   background: #4077f3;
`
