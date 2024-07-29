
import React from 'react';

interface TaskCardProps {
  task: string;
  dueDate: string;
  status: 'pending' | 'completed';
}

const TaskCard: React.FC<TaskCardProps> = ({ task, dueDate, status }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 ">
      <h3 className="text-lg font-semibold ">{task}</h3>
      <p className="text-sm text-gray-600 ">Due Date: {dueDate}</p>
      <p className={`text-sm ${status === 'completed' ? 'text-green-600' : 'text-red-600'}`}>
        Status: {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
    </div>
  );
};

export default TaskCard;
