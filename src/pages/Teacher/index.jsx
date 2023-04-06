import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import Loader from "../../components/Loader";
const url = "https://6427fbdc46fd35eb7c492488.mockapi.io/teacher";

export default function Teachers() {
  const [loader, setLoader] = useState(false);
  const [teachers, setTeacher] = useState([]);
  const [id, setId] = useState(null);
  console.log(teachers);

  useEffect(() => {
    setLoader(true);
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setTeacher(res.data);
        setTimeout(() => {
          setLoader(false);
        }, 500);
      });
  }, [id]);

  const removeTeacher = (id) => {
    console.log(id);
    axios
      .delete(`https://6427fbdc46fd35eb7c492488.mockapi.io/teacher/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) setId(id);
      });
  };

  return (
    <>
      <Header title="Patient List" />

      {loader ? (
        <Loader />
      ) : (
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">LastName</th>
              <th scope="col">Specialist</th>
              <th scope="col">Degree</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? (
              teachers.map((data) => (
                <tr className="bg my-2" key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.specialist}</td>
                  <td>{data.degree}</td>
                  <td className="d-flex align-items-center justify-content-center">
                    <div>
                      <button className="btn btn-primary me-3">
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        onClick={() => removeTeacher(data.id)}
                        className="btn btn-danger"
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg">
                <td colSpan="6">Teacher empty</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
}
