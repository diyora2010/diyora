import React, { useState } from "react";
import { Container } from "./style";
import { Form } from "./style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { onSuccess } from "../../components/Notification";

export default function Add() {
  useState(() => {
    onSuccess()
  }, [])

  const [data, setData] = useState({
    name: "",
    last_name: "",
    specialist: "",
    degree: "",
  });

  const navigate = useNavigate();

  function newTeacher(item) {
    const newData = {...data}
    newData[item.target.id] = item.target.value
    setData(newData)
    // console.log(newData)
  }

  function submit(item) {
    item.preventDefault();
    axios.post('https://6427fbdc46fd35eb7c492488.mockapi.io/teacher', {
        name: data.name,
        last_name: data.last_name,
        specialist: data.specialist,
        degree: data.degree
    }).then(res => navigate('/teachers'))
  }
  return (
    <Container>
      <Form>
        <Form.Input onChange={(el) => newTeacher(el)} id='name' value={data.name} className="form-control my-3" placeholder="Enter name"/>
        <Form.Input onChange={(el) => newTeacher(el)} id='last_name' value={data.last_name} className="form-control my-3" placeholder="Enter lastName"/>
        <Form.Input onChange={(el) => newTeacher(el)} id='specialist' value={data.specialist} className="form-control my-3" placeholder="Enter specialist"/>
        <Form.Input onChange={(el) => newTeacher(el)} id='degree' value={data.degree} className="form-control my-3" placeholder="Enter degree" />
        <Form.Btn className="btn btn-success" onClick={(el) => submit(el)}><Link to={'/teachers'}>Add teacher</Link></Form.Btn>
      </Form>
    </Container>
  );
}
