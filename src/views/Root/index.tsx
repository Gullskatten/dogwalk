import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { VerticalSpacer, HorizontalSpacer } from '../../components/Spacers';
import Sidebar from '../../components/Sidebar';
import Walkers from '../Walkers';

const MainView = styled.main`
  margin-right: auto;
  margin-left: ${props =>
    `calc(${props.theme.layout.sidebarWidth}px + ${props.theme.spacing.small}px)`};
  width: ${props =>
    `calc(100% - ${props.theme.layout.sidebarWidth}px - ${props.theme.spacing.medium}px)`};
`;

const Root: React.FunctionComponent = () => {
  return (
    <>
      <Sidebar />
      <MainView>
        <HorizontalSpacer>
          <VerticalSpacer>
            <Switch>
              <Route path="/" exact component={Walkers} />
              <Route
                path="/settings"
                exact
                render={() => <h1>Hello, settings here</h1>}
              />
            </Switch>
          </VerticalSpacer>
        </HorizontalSpacer>
      </MainView>
    </>
  );
};

export default Root;
