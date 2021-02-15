import React from 'react'
import { ActivityIndicator } from 'react-native'
import { COLOR, useTheme } from 'native-x-theme'

interface SpinnerProps {
  animating?: boolean
  color?: string
  size?: 'x-large' | 'large' | 'normal' | 'small' | 'x-small'
}

export function Spinner({
  animating = true,
  color = COLOR.SECONDARY,
  size = 'normal',
}: SpinnerProps) {
  const { getColor } = useTheme()
  const scale =
    size === 'x-large'
      ? { transform: [{ scale: 1.25 }] }
      : size === 'small'
      ? { transform: [{ scale: 0.7 }] }
      : size === 'x-small'
      ? { transform: [{ scale: 0.5 }] }
      : undefined
  const indicatorSize = size === 'x-large' ? 'large' : size === 'large' ? size : 'small'
  return (
    <ActivityIndicator
      size={indicatorSize}
      animating={animating}
      color={getColor?.(color)}
      style={scale}
    />
  )
}
