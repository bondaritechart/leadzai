
import { CSSProperties } from 'react'

import styled from '@emotion/styled'

export interface TextProps {
  display?: CSSProperties['display']
  color?: CSSProperties['color']
  fontSize?: number
  align?: CSSProperties['textAlign']
}

export const Text = styled.span<TextProps>`
  ${({ display }) => display && `display: ${display};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}rem;`}
  ${({ align }) => align && `text-align: ${align};`}
`
