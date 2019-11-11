import styled from 'styled-components';

const VerticalSpacer = styled.div`
  margin: ${props => props.theme.spacing.small}rem 0;
`;

const HorizontalSpacer = styled.div`
  padding: 0 ${props => props.theme.spacing.small}rem;

  @media all and (min-width: ${props => props.theme.screenSizes.mobile}) {
    padding: 0 ${props => props.theme.spacing.medium}rem;
  }
`;

export { VerticalSpacer, HorizontalSpacer };
