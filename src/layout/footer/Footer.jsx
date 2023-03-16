import React from 'react'
import Flex from '../../components/ui-position/Flex'
import Text from '../../components/ui-position/Text'
import Title from '../../components/ui-position/Title'
import { ReactComponent as Whatsapp } from '../../assets/icons/Whatsapp.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Vector } from '../../assets/icons/Vector.svg'
import styled from 'styled-components'

export default function Footer() {
   return (
      <Flex direction="row" margin="124px 0 0 50px" gap="105px">
         <Flex direction="column">
            <Title
               uppercase
               weight="700"
               size="14px"
               height="17px"
               spacing="0.05em"
               color=" #656566"
            >
               O компании
            </Title>
            <Text size="16px" height="19px" padding="20px 0 0 0">
               Партнёрская программа
            </Text>

            <Text size="16px" height="19px" padding="10px 0 0 0">
               Вакансии
            </Text>
         </Flex>
         <Flex direction="column">
            <Title
               uppercase
               weight="700"
               size="14px"
               height="17px"
               spacing="0.05em"
               color=" #656566"
            >
               Меню
            </Title>
            <Flex gap="52px">
               <Flex direction="column">
                  <Text size="16px" height="19px" padding="20px 0 0 0">
                     Расчёт стоимости
                  </Text>
                  <Text size="16px" height="19px" padding="10px 0 0 0">
                     Услуги
                  </Text>
                  <Text size="16px" height="19px" padding="10px 0 0 0">
                     Виджеты
                  </Text>
                  <Text size="16px" height="19px" padding="10px 0 0 0">
                     Интеграции
                  </Text>
                  <Text size="16px" height="19px" padding="10px 0 0 0">
                     Наши клиенты
                  </Text>
               </Flex>
               <Flex direction="column">
                  <Text size="16px" height="19px" padding="20px 0 0 0">
                     Кейсы
                  </Text>
                  <Text size="16px" height="19px" padding="10px 0 0 0">
                     Благодарственные письма
                  </Text>
                  <Text size="16px" height="19px" padding="10px 0 0 0">
                     Сертификаты
                  </Text>
                  <Text size="16px" height="19px" padding="10px 0 0 0">
                     Блог на Youtube
                  </Text>
                  <Text size="16px" height="19px" padding="10px 0 0 0">
                     Вопрос / Ответ
                  </Text>
               </Flex>
            </Flex>
         </Flex>
         <Contact>
            <Flex direction="column">
               <Title
                  uppercase
                  weight="700"
                  size="14px"
                  height="17px"
                  spacing="0.05em"
                  color=" #656566"
               >
                  Контакты
               </Title>
               <Flex direction="column">
                  <Text
                     weight="500"
                     size="16px"
                     height="19px"
                     padding="20px 0 20px 0"
                  >
                     +7 555 555-55-55
                  </Text>
                  <Nav3>
                     <li>
                        <Vector />
                     </li>
                     <li>
                        <Phone />
                     </li>
                     <li>
                        <Whatsapp />
                     </li>
                  </Nav3>
                  <Text size="16px" height="19px" padding="10px 0 0 0">
                     Москва, Путевой проезд 3c1, к 902
                  </Text>
                  <Text size="12px" height="15px" padding="80px 0 0 0">
                     ©WELBEX 2022. Все права защищены.
                  </Text>
                  <Text
                     size="12px"
                     height="15px"
                     padding="10px 0 0 0"
                     line="underline"
                  >
                     Политика конфиденциальности
                  </Text>
               </Flex>
            </Flex>
         </Contact>
      </Flex>
   )
}
const Contact = styled.div`
   text-align: right;
   float: right;
   margin-right: 50px;
   @media only screen and (max-width: 768px) {
      font-size: 14px;
   }
`
const Nav3 = styled.nav`
   display: inline-flex;
   float: right;
   gap: 15px;
   align-items: flex-end;
   justify-content: flex-end;
   list-style-type: none;
`
