import React, { Children } from 'react'
import styled from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  background,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  border,
  borderBottom,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  bottom,
  color,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  order,
  overflow,
  position,
  right,
  size,
  space,
  textAlign,
  top,
  width,
  zIndex
} from 'styled-system'
import tag from 'clean-tag'

const Box = styled(({ children, ...props }) => <tag.div {...props}>{Children.map(children, child => child)}</tag.div>)`
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${background}
  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${backgroundSize}
  ${border}
  ${borderBottom}
  ${borderLeft}
  ${borderRadius}
  ${borderRight}
  ${borderTop}
  ${bottom}
  ${color}
  ${display}
  ${flex}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${height}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${lineHeight}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${opacity}
  ${order}
  ${overflow}
  ${position}
  ${right}
  ${size}
  ${space}
  ${textAlign}
  ${top}
  ${width}
  ${zIndex}
`

Box.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...background.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...backgroundSize.propTypes,
  ...border.propTypes,
  ...borderBottom.propTypes,
  ...borderLeft.propTypes,
  ...borderRadius.propTypes,
  ...borderRight.propTypes,
  ...borderTop.propTypes,
  ...bottom.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...left.propTypes,
  ...lineHeight.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...opacity.propTypes,
  ...order.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes
}

export default Box
