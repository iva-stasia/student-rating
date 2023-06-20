import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StudentsList from './StudentsList';

describe('StudentList', () => {
  it('should render the student list', () => {
    render(
      <StudentsList
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
        handleScoreChange={(id) => console.log(id)}
      />
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });
});
