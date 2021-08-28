import React from 'react';
import { getByRole, render } from '@testing-library/react';
import TestComponent from '../components/testComponent';

describe('header title test', () => {
   it('test component', () => {
      const { getByRole } = render(<TestComponent />);

      const header = getByRole('heading', {
         name: 'Selam mert',
      });
      expect(header).toBeInTheDocument();
   });
});
