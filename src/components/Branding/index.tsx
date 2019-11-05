import * as React from 'react';
import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import createFontStyles from '../../utils/createFontStyles';

const StyledBranding = styled.span<{} & Partial<LinkProps>>`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  ${props => createFontStyles(props.theme.fonts.branding)};
`;

interface Props {
  asLink?: boolean;
  compact?: boolean;
}

const Branding: React.FunctionComponent<Props> = ({
  asLink = false,
  compact = false
}) => {
  const text = compact ? 'Dw' : 'Dogwalk';

  if (asLink) {
    return (
      <StyledBranding
        to="/"
        as={({ compact, ...props }: LinkProps & Props) => <Link {...props} />}
      >
        {text}
      </StyledBranding>
    );
  }

  return <StyledBranding>{text}</StyledBranding>;
};

export default Branding;
