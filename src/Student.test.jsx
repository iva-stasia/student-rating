import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Student from './Student';

describe('Student', () => {
  it('should render the student input with the initial score', () => {
    render(
      <Student
        name="Андрій"
        score="200"
        id='0'
        handleScoreChange={(id) => console.log(id)}
      />
    );

    expect(screen.getByText('Андрій')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('200');
  });
});
