import React from 'react';

import { BarcodeProvider } from '../../contexts/BarcodeContext';
import { PageContainer } from './pages';

export const HomeScreen = () => (
  <BarcodeProvider>
    <PageContainer />
  </BarcodeProvider>
)