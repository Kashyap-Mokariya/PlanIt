import React, { useState } from 'react';
import './CreateTask.css';

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'To Do',
    category: 'Backlog',
    tags: '',
    startDate: '',
    endDate: '',
    authorId: '',
    assignedUserId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="container">
      <h2 className="heading">Create New Task</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Backlog">Backlog</option>
              <option value="Current Sprint">Current Sprint</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tags</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="comma separated"
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Author User ID</label>
          <input
            type="text"
            name="authorId"
            value={formData.authorId}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Assigned User ID</label>
          <input
            type="text"
            name="assignedUserId"
            value={formData.assignedUserId}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
