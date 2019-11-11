import styled, { css } from 'styled-components';
import createFontStyles from '../../utils/createFontStyles';

type Variant = 'secondary';

interface ButtonProps {
  variant?: Variant;
  gutterTop?: boolean;
  gutterBottom?: boolean;
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  padding: ${props =>
    `${props.theme.spacing.small}rem ${props.theme.spacing.large}rem`};
  background-color: ${props => props.theme.colors.primary};
  border: 2px solid transparent;
  border-radius: 100px;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.text};
  transition: all ${props => props.theme.transitions.fast};
  ${props => createFontStyles(props.theme.fonts.button)};

  &:hover,
  &:focus,
  &:active {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: white;
      border-color: ${props => props.theme.colors.secondary};

      &:hover,
      &:focus,
      &:active {
        background-color: ${props => props.theme.colors.secondary};
        color: white;
      }
    `};

  ${props =>
    props.gutterTop &&
    css`
      margin-top: ${props.theme.spacing.medium}rem;
    `};

  ${props =>
    props.gutterBottom &&
    css`
      margin-bottom: ${props.theme.spacing.medium}rem;
    `};
`;

export { Button };
