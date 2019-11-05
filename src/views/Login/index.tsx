import * as React from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { Button } from "../../components/Button";
import { HorizontalSpacer, VerticalSpacer } from "../../components/Spacers";
import Branding from "../../components/Branding";
import { UserContext } from "../../context/User";
import Text from "../../components/Text";

const Centerer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Login: React.FunctionComponent = () => {
  const userContext = React.useContext(UserContext);
  const { login } = useAuth();

  return (
    <HorizontalSpacer>
      <VerticalSpacer>
        <Centerer>
          <Branding />
          <Button variant="secondary" gutterTop onClick={login}>
            {!userContext.data.hasLoadedUser
              ? "Hold on..."
              : "Log in with Google"}
          </Button>
        </Centerer>
      </VerticalSpacer>
    </HorizontalSpacer>
  );
};

export default Login;
