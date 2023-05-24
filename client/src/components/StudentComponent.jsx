import { Link, useNavigate } from "react-router-dom";

function StudentComponent(props) {
  // const navigate = useNavigate();
  // const goToEdit = () => {
  //   navigate("/edit", {
  //     state: { name: "Luca" },
  //   });
  // };

  return (
    <div className="student-component">
      <p>Id: {props.studentId}</p>
      <p>
        {props.studentLastName} {props.studentFirstName}
      </p>

      {/* <p>Name</p> */}
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteStudent(props.studentId);
        }}
      >
        Delete
      </button>
      <Link
        to="/edit"
        state={{
          lastName: props.studentLastName,
          firstName: props.studentFirstName,
          id: props.studentId,
        }}
      >
        <button>Update</button>
      </Link>
    </div>
  );
}

export default StudentComponent;
