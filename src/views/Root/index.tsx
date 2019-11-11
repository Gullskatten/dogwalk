import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { VerticalSpacer, HorizontalSpacer } from '../../components/Spacers';
import Sidebar from '../../components/Sidebar';
import Walkers from '../Walkers';
import Settings from '../Settings';

const MainView = styled.main`
  margin-right: auto;
  margin-left: ${props =>
    `calc(${props.theme.layout.sidebarWidth.mobile}px + ${props.theme.spacing.small}rem)`};
  width: ${props =>
    `calc(100% - ${props.theme.layout.sidebarWidth.mobile}px - ${props.theme.spacing.medium}rem)`};

  @media all and (min-width: ${props => props.theme.screenSizes.mobile}px) {
    margin-left: ${props =>
      `calc(${props.theme.layout.sidebarWidth.desktop}px + ${props.theme.spacing.small}rem)`};
    width: ${props =>
      `calc(100% - ${props.theme.layout.sidebarWidth.desktop}px - ${props.theme.spacing.medium}rem)`};
  }
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
              <Route path="/settings" exact component={Settings} />
            </Switch>
          </VerticalSpacer>
        </HorizontalSpacer>
      </MainView>
    </>
  );
};

export default Root;
