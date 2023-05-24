import { useState } from "react";
import { createStudent } from "../helpers/APIRoutes";
import StudentList from "../components/StudentList";
import axios from "axios";
import { useEffect } from "react";

function AddStudent() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(...values);
    await axios.post(`${createStudent}`, values);
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log({ [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name..."
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name..."
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <StudentList />
    </div>
  );
}

export default AddStudent;
