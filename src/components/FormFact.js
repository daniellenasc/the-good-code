import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import toast from "react-hot-toast";

function FormFact({ allNewFacts, setAllNewFacts }) {
  const [form, setForm] = useState({
    name: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.name === "") {
      toast.error("Please, add a new dog fact!");
      return;
    }

    setAllNewFacts([...allNewFacts, form]);

    setForm({
      name: "",
    });
    toast.success("A new dog fact was added successfully!");
  }
  return (
    <div className="d-flex justify-content-around ">
      <InputGroup className="mt-5" style={{ width: "50%" }}>
        <Form.Control
          type="text"
          placeholder="Add new fact"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="shadow-sm  bg-body "
        />
        <Button
          variant="secondary"
          id="button-addon2"
          className="shadow-sm"
          onClick={handleSubmit}
        >
          +
        </Button>
      </InputGroup>
    </div>
  );
}

export default FormFact;
