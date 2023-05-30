import Student from './Student';

function StudentsList({ students, handleScoreChange }) {
  const sortedStudents = students.sort((a, b) => b.score - a.score);

  return (
    <ul>
      {sortedStudents.map(({ name, score }, id) => {
        return (
          <Student
            key={name}
            name={name}
            score={score}
            handleScoreChange={handleScoreChange}
            id={id}
          />
        );
      })}
    </ul>
  );
}

export default StudentsList;
