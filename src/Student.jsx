function Student({ name, score, handleScoreChange, id }) {
  return (
    <li>
      <label>{name}</label>
      <input
        type="text"
        value={score}
        onChange={(e) => handleScoreChange(id, e)}
      />
    </li>
  );
}

export default Student;
