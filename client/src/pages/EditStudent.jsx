import axios from "axios";
import { useLocation } from "react-router-dom";
import { updateStudent } from "../helpers/APIRoutes";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function EditStudent() {
  const location = useLocation();
  const [newStudent, setNewStudent] = useState(location.state);
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate("/");
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    await axios.patch(`${updateStudent}/${location.state.id}`, newStudent);
    goToEdit();
  };

  const handleChange = (event) => {
    setNewStudent({ ...newStudent, [event.target.name]: event.target.value });
    console.log(newStudent);
  };

  return (
    <div>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name..."
            value={newStudent.firstName}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name..."
            value={newStudent.lastName}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
        <Link to="/">
          <button className="btn btn-outline-danger">Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default EditStudent;
