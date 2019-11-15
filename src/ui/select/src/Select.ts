import { createElement } from 'react'
import ReactSelect from 'react-select'
import styled from '@emotion/styled'

export interface OptionsProps {
  value: string
  label: string
}

export interface ReactSelectProps {
  id?: string
  styles?: object
  placeholder?: string
  value?: string
  autoFocus?: boolean
  className?: string
  classNamePrefix?: string
  isDisabled?: boolean
  isMulti?: boolean
  isSearchable?: boolean
  name?: string
  options?: OptionsProps[]
  color?: string
  borderColor?: string
  onChange?: (value: string) => void
}

const SelectElement = styled(ReactSelect, {
  shouldForwardProp: prop =>
    !['borderColor'].includes(prop),
})<ReactSelectProps>(
  ({ color, borderColor, theme }) => ({
    width: '100%',
    height: 40,
    boxSizing: 'border-box',
    borderRadius: `${theme.borderRadius.n}px`,
    outline: 'none',
    backgroundColor: 'none',
    border: `1px solid ${theme.colors[borderColor]}`,
    boxShadow: '0 2px 4px 0 rgba(41, 50, 70, 0.1)',
    transition: '100ms ease all',
    fontFamily: theme.fontFamily.sf,
    fontSize: `${theme.fontSizes.s}px`,
    fontWeight: theme.fontWeights.normal,
    lineHeight: theme.lineHeights.s,
    color: theme.colors[color],
  }),
)

const Select = ({
  ...props
}: ReactSelectProps) =>
    createElement(
      SelectElement,
      {
      styles: {
        control: basic => ({
          ...basic,
          boxShadow: 'none',
          borderColor: 'lightgray',
          '&:hover': {
            boxShadow: 'none',
            borderColor: 'lightgray',
          },
        }),
      },
      ...props,
    })

export default Select
