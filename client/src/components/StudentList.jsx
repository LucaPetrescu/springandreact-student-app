import { useState, useEffect, useMemo, createRef } from "react";
import { list } from "../helpers/APIRoutes";
import { deleteStudent } from "../helpers/APIRoutes";
import axios from "axios";
import StudentComponent from "./StudentComponent";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const results = await axios.get(list);
      setStudents(results.data);
    };
    fetchStudents();
  }, [students]);

  const deleteStudent = async (id) => {
    await axios.delete(`${deleteStudent}/${id}`);
    const results = await axios.get(list);
    setStudents(results.data);
    console.log(id);
  };

  return (
    <div className="student-list">
      {students.map((student) => {
        return (
          <StudentComponent
            studentLastName={student.lastName}
            studentFirstName={student.firstName}
            studentId={student.id}
            deleteStudent={deleteStudent}
          />
        );
      })}
    </div>
  );
}

export default StudentList;
