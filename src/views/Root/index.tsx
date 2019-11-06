import * as React from 'react';
import { UserContext } from '../../context/User';
import { VerticalSpacer, HorizontalSpacer } from '../../components/Spacers';
import Text from '../../components/Text';
import useAuth from '../../hooks/useAuth';
import { Button } from '../../components/Button';
import Sidebar from '../../components/Sidebar';
import styled from 'styled-components';

const MainView = styled.main`
  margin-right: auto;
  margin-left: ${props =>
    `calc(${props.theme.layout.sidebarWidth}px + ${props.theme.spacing.small}px)`};
`;

const Root: React.FunctionComponent = () => {
  const userContext = React.useContext(UserContext);
  const { logout } = useAuth();

  return (
    <>
      <Sidebar />
      <MainView>
        <HorizontalSpacer>
          <VerticalSpacer>
            <Text variant="title">Hello, {userContext.data.displayName}!</Text>
            <Button
              gutterTop
              onClick={() => {
                if (window.confirm('Are you sure you want to log out?')) {
                  logout();
                }
              }}
            >
              Logout
            </Button>
          </VerticalSpacer>
        </HorizontalSpacer>
      </MainView>
    </>
  );
};

export default Root;
