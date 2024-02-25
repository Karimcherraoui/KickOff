import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MatcheCard from '../components/card/MatcheCard';

describe('MatcheCard component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<MatcheCard />);
    const component = getByTestId('matche-card');
    expect(component).toBeTruthy();
  });
  test('handles click on favorie button correctly', () => {
    const { getByTestId } = render(<MatcheCard />);
    const favorieButton = getByTestId('favorie-button');
    fireEvent.press(favorieButton);
    expect(favorieButton).toHaveStyle({ color: 'orange' });
  });
  
});
