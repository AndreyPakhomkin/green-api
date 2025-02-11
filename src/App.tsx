import React from 'react';
import { AppContainer } from './components/styledComponents/AppStyles';
import ContentWrapper from './components/ContentWrapper';

const App: React.FC = () => {
  return (
    <AppContainer>
      <ContentWrapper />
    </AppContainer>
  );
};

export default App;
