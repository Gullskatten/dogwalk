import * as React from 'react';
import { UserContext } from '../../context/User';
import Text from '../../components/Text';

const Walkers: React.FunctionComponent = () => {
  const userContext = React.useContext(UserContext);

  return (
    <>
      <Text element="h1" variant="title">
        Hello, {userContext.data.displayName}!
      </Text>
    </>
  );
};

export default Walkers;
