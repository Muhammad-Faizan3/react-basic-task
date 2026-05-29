function Students() {
  const students = [
    {
      id: 1,
      name: "Ali",
      age: 20,
      course: "React JS",
    },
    {
      id: 2,
      name: "Faizan",
      age: 22,
      course: "Node JS",
    },
    {
      id: 3,
      name: "Ahmed",
      age: 19,
      course: "MongoDB",
    },
  ];

  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <div key={student.id}>
          <p>{student.name}</p>
          <p>{student.age}</p>
          <p>{student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default Students;