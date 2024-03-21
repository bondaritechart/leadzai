
import { CSSProperties } from 'react'

import styled from '@emotion/styled'

export interface FlexProps {
  direction?: CSSProperties['flexDirection']
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  flex?: CSSProperties['flex']
  wrap?: CSSProperties['flexWrap']
  gap?: number
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ gap, theme }) => gap && `gap: ${gap}rem;`};
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
`
