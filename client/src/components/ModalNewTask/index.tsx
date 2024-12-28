

import React, { useState } from 'react';
import { Priority, Status, useCreateProjectMutation } from '@/state/api';

import { formatISO } from 'date-fns';
import Modal from '../Modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

const ModalNewTask = ({ isOpen, onClose, id }: Props) => {
  const [createTask, { isLoading }] = useCreateProjectMutation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<Status>(Status.ToDo);
  const [priority, setPriority] = useState<Priority>(Priority.Backlog);
  const [tags, setTags] = useState('');
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [authorUserId, setAuthorUserId] = useState('');
  const [assignedUserId, setAssignedUserId] = useState('');

  const handleSubmit = async () => {
    if (!title || !authorUserId) return;
    const formattedStartDate = formatISO(new Date(startDate), { representation: 'complete' });
    const formattedDueDate = formatISO(new Date(dueDate), { representation: 'complete' });
    await createTask({
      description,
      title,
      status,
      priority,
      tags,
      startDate: formattedStartDate,
      dueDate: formattedDueDate,
      authorUserId: parseInt(authorUserId),
      assignedUserId: parseInt(assignedUserId),
      projectId: Number(id),
    });
  };

  const isFormValid = () => {
    return title && authorUserId;
  };

  const selectStyles =
    'mb-4 block w-full rounded border border-gray-300 px-3 py-2 dark:border-dark-tertiary dark:bg-slate-500 dark:text-white dark:focus:outline-none';
  const inputStyles =
    'w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-slate-500 dark:text-white dark:focus:outline-none';

  return (
 <Modal isOpen={isOpen} onClose={onClose} name="Create New Task">
      {/* Modal Header with Close Button */}
      <div
        className="mx-auto max-w-lg bg-white p-6 rounded-lg shadow-lg dark:bg-dark-secondary"
        style={{ backgroundColor: 'white' }} 
      >
      <div className="flex justify-between items-center border-b pb-3">
        <h3 className="text-lg font-medium">Create New Task</h3>
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          onClick={onClose}
        >
          <span className="text-2xl">&times;</span>
        </button>
      </div>

      {/* Form */}
      <form
        className="mt-4 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          className={inputStyles}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={inputStyles}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
          <select
            className={selectStyles}
            value={status}
            onChange={(e) => setStatus(Status[e.target.value as keyof typeof Status])}
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value={Status.ToDo}>To Do</option>
            <option value={Status.WorkInProgress}>Work in Progress</option>
            <option value={Status.UnderReview}>Under Review</option>
            <option value={Status.Completed}>Completed</option>
          </select>
          <select
            className={selectStyles}
            value={priority}
            onChange={(e) => setPriority(Priority[e.target.value as keyof typeof Priority])}
          >
            <option value="">Select Priority</option>
            <option value={Priority.Urgent}>Urgent</option>
            <option value={Priority.High}>High</option>
            <option value={Priority.Medium}>Medium</option>
            <option value={Priority.Low}>Low</option>
            <option value={Priority.Backlog}>Backlog</option>
          </select>
        </div>
        <input
          type="text"
          className={inputStyles}
          placeholder="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2">
          <input
            type="date"
            className={inputStyles}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className={inputStyles}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <input
          type="text"
          className={inputStyles}
          placeholder="Author User ID"
          value={authorUserId}
          onChange={(e) => setAuthorUserId(e.target.value)}
        />
        <input
          type="text"
          className={inputStyles}
          placeholder="Assigned User ID"
          value={assignedUserId}
          onChange={(e) => setAssignedUserId(e.target.value)}
        />

        <button
          type="submit"
          className={`mt-4 flex w-full justify-center rounded-md border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
            !isFormValid() || isLoading ? 'cursor-not-allowed opacity-50' : ''
          }`}
          disabled={!isFormValid() || isLoading}
        >
          {isLoading ? 'Creating...' : 'Create Task'}
        </button>
      </form>
      </div>
    </Modal>
  );
};

export default ModalNewTask;

