import * as React from 'react';
import styled from 'styled-components';
import { IoMdHome, IoIosSettings, IoIosLogOut } from 'react-icons/io';
import { UserContext } from '../../context/User';
import { NavLink, Link } from 'react-router-dom';
import Avatar from '../Avatar';
import useAuth from '../../hooks/useAuth';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${props => props.theme.layout.sidebarWidth}px;
  background-color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.spacing.medium}px 0;
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: ${props => props.theme.spacing.medium}px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  padding-top: ${props => props.theme.spacing.medium}px;
`;

const ListItem = styled.li`
  margin-bottom: ${props => props.theme.spacing.medium}px;

  a {
    display: block;

    svg {
      transition: ${props => props.theme.transitions.fast};
      color: #fff;
    }

    &.active {
      svg {
        color: ${props => props.theme.colors.primary};
      }
    }

    &:hover {
      svg {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

interface Props {}

const Sidebar: React.FunctionComponent<Props> = () => {
  const userContext = React.useContext(UserContext);
  const { logout } = useAuth();

  function handleLogoutEvent(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();

    if (window.confirm('Are you sure you want to log out?')) {
      logout();
    }
  }

  return (
    <Wrapper>
      <UserWrapper>
        <Avatar
          title={userContext.data.displayName}
          src={userContext.data.photoURL}
        />
      </UserWrapper>
      <List>
        <ListItem>
          <NavLink to="/" aria-label="Home link" exact>
            <IoMdHome size="2rem" aria-hidden="true" />
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/settings" aria-label="Settings link" exact>
            <IoIosSettings size="2rem" aria-hidden="true" />
          </NavLink>
        </ListItem>

        <ListItem>
          <Link to="#" onClick={handleLogoutEvent}>
            <IoIosLogOut size="2rem" aria-hidden="true" />
          </Link>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
