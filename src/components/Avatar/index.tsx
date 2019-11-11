import styled, { css } from 'styled-components';

interface AvatarProps {
  size?: 'large' | 'small';
  src: string;
  to?: string;
  shadowed?: boolean;
}

const Avatar = styled.div<AvatarProps>`
  border-radius: 50%;
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;

  ${props =>
    props.to &&
    css`
      display: flex;
      &:hover {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    `};

    ${props =>
      props.size === 'large' &&
      css`
        width: 150px;
        height: 150px;

        @media all and (max-width: ${props =>
            props.theme.screenSizes.mobile}px) {
          width: 140px;
          height: 140px;
        }
      `};

      ${props =>
        props.shadowed &&
        css`
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        `};
`;

export default Avatar;
