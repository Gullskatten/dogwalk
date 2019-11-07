import * as React from 'react';
import styled from 'styled-components';
import { IoMdHome, IoIosSettings, IoIosLogOut } from 'react-icons/io';
import { UserContext } from '../../context/User';
import { NavLink, Link } from 'react-router-dom';
import Avatar from '../Avatar';
import useAuth from '../../hooks/useAuth';
import truncate from '../../utils/truncate';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${props => props.theme.layout.sidebarWidth}px;
  background-color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.spacing.medium}rem;
`;

const UserWrapper = styled.div`
  display: flex;
  padding-bottom: ${props => props.theme.spacing.medium}rem;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  align-items: center;
`;

const DisplayName = styled.div`
  margin-left: ${props => props.theme.spacing.medium}rem;
  display: flex;
  flex: 1;
  color: #fff;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: ${props => props.theme.spacing.medium}rem;
`;

const ListItem = styled.li`
  a {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    transition: ${props => props.theme.transitions.fast};
    padding: ${props => props.theme.spacing.small}rem 0;

    &.active {
      color: ${props => props.theme.colors.primary};
    }

    svg {
      transition: ${props => props.theme.transitions.fast};
      color: #fff;
      margin-right: ${props => props.theme.spacing.medium}rem;
    }

    &.active {
      svg {
        color: ${props => props.theme.colors.primary};
      }
    }

    &:hover,
    &:focus,
    &:active {
      color: ${props => props.theme.colors.primary};

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
        <DisplayName>{truncate(userContext.data.displayName, 20)}</DisplayName>
      </UserWrapper>
      <List>
        <ListItem>
          <NavLink to="/" aria-label="Home link" exact>
            <IoMdHome aria-hidden="true" />
            Dashboard
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/settings" aria-label="Settings link" exact>
            <IoIosSettings aria-hidden="true" />
            Settings
          </NavLink>
        </ListItem>

        <ListItem>
          <Link to="#" onClick={handleLogoutEvent}>
            <IoIosLogOut aria-hidden="true" />
            Sign out
          </Link>
        </ListItem>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
