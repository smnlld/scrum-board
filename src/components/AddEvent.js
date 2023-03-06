import React, { useState } from "react";

export const AddEvent = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please add a Event");
      return;
    }
    onAdd({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-body">
        <label>TITLE</label>
        <input
          type="text"
          placeholder=" Add Title of Event "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-body">
        <label>Description</label>
        <input
          type="text"
          placeholder=" Add Description of Event "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-body">
        <label>Status</label>
        <input
          type="text"
          placeholder=" Add Status of Event "
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
        <input type="submit" value="Save Event" className="btn-submit" />
    </form>
  );
};



