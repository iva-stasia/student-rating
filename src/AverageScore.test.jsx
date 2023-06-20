import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AverageScore from './AverageScore';

describe('AvarageScore', () => {
  it('should render the average score 175', () => {
    render(
      <AverageScore
        students={[
          {
            name: 'Андрій',
            score: 200,
          },
          {
            name: 'Світлана',
            score: 100,
          },
          {
            name: 'Людмила',
            score: 200,
          },
          {
            name: 'Іван',
            score: 200,
          },
        ]}
      />
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Середній бал: 175');
  });
});
