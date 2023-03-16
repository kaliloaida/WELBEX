import React from 'react'
import styled from 'styled-components'

const Title = (props) => {
   return <TitleStyled {...props}>{props.children}</TitleStyled>
}
const TitleStyled = styled.h4`
   font-family: 'Inter';
   font-style: normal;
   font-weight: ${({ weight }) => weight || '500'};
   font-size: ${({ size }) => size || '18px'};
   line-height: ${({ height }) => height || '22px'};
   color: ${({ color }) => color || ' #E4E5EA'};
   letter-spacing: ${({ spacing }) => spacing || ''};
   text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`
export default Title
