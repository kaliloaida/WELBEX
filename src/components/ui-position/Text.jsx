import React from 'react'
import styled from 'styled-components'

const Text = (props) => {
   return <TextStyled {...props}>{props.children}</TextStyled>
}
const TextStyled = styled.p`
   display: inline;
   font-style: normal;
   font-family: ${({ family }) => family || 'Montserrat'};
   font-weight: ${({ weight }) => weight || '400'};
   padding: ${({ padding }) => padding || ''};
   font-size: ${({ size }) => size || '18px'};
   line-height: ${({ height }) => height || '22px'};
   color: ${({ color }) => color || '#E4E5EA'};
   text-decoration-line: ${({ line }) => line || ''};
`
export default Text
