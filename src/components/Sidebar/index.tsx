import * as React from 'react';
import styled from 'styled-components';
import { MdHome } from 'react-icons/md';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${props => props.theme.layout.sidebarWidth}px;
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.medium}px 0;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const ListItem = styled.li`
  margin-bottom: ${props => props.theme.spacing.medium}px;

  a {
    svg {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

interface Props {}

const Sidebar: React.FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>
          <a href="#">
            <MdHome size="2rem" />
          </a>
        </ListItem>
        <ListItem>
          <a href="#">
            <MdHome size="2rem" />
          </a>
        </ListItem>
        <ListItem>
          <a href="#">
            <MdHome size="2rem" />
          </a>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
