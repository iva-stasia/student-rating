import { useState } from 'react';
import './App.css';
import AverageScore from './AverageScore';
import StudentsList from './StudentsList';

function App() {
  const [students, setStudents] = useState([
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
  ]);

  const handleScoreChange = (id, e) => {
    const value = Number(e.target.value);

    if (!isNaN(value)) {
      setStudents((currentStudents) => {
        return currentStudents.map((student, studentId) => {
          if (studentId === id) {
            return { ...student, score: value };
          }

          return student;
        });
      });
    }
  };

  return (
    <>
      <h1>Рейтинг студентів</h1>
      <AverageScore students={students} />
      <StudentsList students={students} handleScoreChange={handleScoreChange} />
    </>
  );
}

export default App;
