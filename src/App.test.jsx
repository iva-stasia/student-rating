import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('the title is visible', () => {
    render(<App />);

    expect(screen.getByText(/рейтинг студентів/i)).toBeInTheDocument();
  });

  it('should change the student score', () => {
    render(<App />);

    const input = screen.getAllByRole('textbox')[0];
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '500' } });
    expect(input).toHaveValue('500');
  });
});
