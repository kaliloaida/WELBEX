/* eslint-disable no-irregular-whitespace */
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Whatsapp } from '../../assets/icons/Whatsapp.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Vector } from '../../assets/icons/Vector.svg'
import Flex from '../../components/ui-position/Flex'
import { ReactComponent as Logo } from '../../assets/logo/logo.svg'
import Text from '../../components/ui-position/Text'

export default function Header() {
   return (
      <Flex align="center" width="100%" gap="53px" margin="20px 50px">
         <Flex
            direction="column"
            justify="center"
            align="center"
            margin="35px 0 0 0 "
         >
            <Logo />
            <br />
            <Text weight="300" size="10px" height="12px">
               крупный интегратор CRM <br /> в России ещё 8 странах
            </Text>
         </Flex>
         <Flex gap="137px" align="center">
            <Nav1>
               <li>Услуги</li>
               <li>Виджеты</li>
               <li>Интеграции</li>
               <li>Кейсы</li>
               <li>Сертификаты</li>
            </Nav1>
            <Flex gap="48px">
               <Li>+7 555 555-55-55</Li>
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
            </Flex>
         </Flex>
      </Flex>
   )
}

const Nav1 = styled.nav`
   display: flex;
   width: 500px;
   justify-content: space-between;
   list-style-type: none;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: #e4e5ea;
   @media only screen and (max-width: 768px) {
      font-size: 14px;
   }
`
const Li = styled.li`
   list-style-type: none;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   text-align: right;
   color: #e4e5ea;
`
const Nav3 = styled.nav`
   display: flex;
   gap: 33px;
   align-items: center;
   list-style-type: none;
`
