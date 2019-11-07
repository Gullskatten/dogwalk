import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link, NavLink, LinkProps, NavLinkProps } from 'react-router-dom';
import createFontStyles from '../../utils/createFontStyles';

type Variants = 'title' | 'subtitle' | 'body';
type Element =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'link'
  | 'navlink';

interface Props {
  element?: Element;
  variant?: Variants;
  gutterBottom?: boolean;
  gutterTop?: boolean;
  to?: string;
}

const StyledText = styled.p<Props>`
  margin: 0;
  ${props => createFontStyles(props.theme.fonts[props.variant || 'body'])}

  ${props =>
    props.gutterBottom &&
    css`
      margin-bottom: ${props.theme.spacing.medium}rem;
    `};

  ${props =>
    props.gutterTop &&
    css`
      margin-top: ${props.theme.spacing.medium}rem;
    `};
`;

const Text: React.FunctionComponent<Props> = ({
  element = 'p',
  variant = 'body',
  gutterBottom,
  gutterTop,
  to,
  children
}) => {
  const elm =
    element === 'link'
      ? ({
          element,
          variant,
          gutterBottom,
          gutterTop,
          ...props
        }: LinkProps & Props) => <Link {...props} />
      : element === 'navlink'
      ? ({
          element,
          variant,
          gutterBottom,
          gutterTop,
          ...props
        }: NavLinkProps & Props) => <NavLink {...props} />
      : element;

  return (
    <StyledText
      as={elm}
      to={to}
      variant={variant}
      gutterBottom={gutterBottom}
      gutterTop={gutterTop}
    >
      {children}
    </StyledText>
  );
};

export default Text;
