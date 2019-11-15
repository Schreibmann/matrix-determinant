import { createElement } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import ButtonUi, { ButtonProps } from './Button'

const DefaultButton = styled(ButtonUi)<ButtonProps>(
  ({ theme }) => ({
    color: theme.colors.gray,
    border: `1px solid ${theme.colors.githubBackground}`,
    backgroundColor: theme.colors.githubBackground,
    boxShadow: '0 2px 4px 0 rgba(36, 41, 46, 0.4)',
    transition: 'background-color .2s ease-in-out,color .2s ease-in-out,border-color .2s ease-in-out',
  }),
  ifProp('active', ({ theme }: any) => ({
    [':hover']: {
      color: theme.colors.white,
      boxShadow: '0 2px 6px 0 rgba(36, 41, 46, 0.7)',
    },
    [':active']: {
      color: theme.colors.gray,
      boxShadow: '0 1px 2px 0 rgba(36, 41, 46, 0.3)',
    },
  })),
  ifProp('disabled', ({ theme }: any) => ({
    cursor: 'default',
    color: theme.colors.blueHaze,
    background: theme.colors.white,
    border: `1px solid ${theme.colors.blueHaze}`,
    boxShadow: 'none !important',
  }))
)

const Button = ({ disabled, onClick, children, ...props }: ButtonProps) =>
  createElement(
    DefaultButton,
    {
      type: 'button',
      disabled,
      active: !disabled,
      onClick: disabled ? null : onClick,
      ...props,
    },
    children
  )

Button.defaultProps = {
  onClick: () => { },
}

export default Button
