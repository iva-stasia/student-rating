export default function AverageScore({ students }) {
  const averageScore =
    students.reduce((acc, { score }) => {
      return acc + score;
    }, 0) / students.length;

  return <h2>Середній бал: {averageScore}</h2>;
}
