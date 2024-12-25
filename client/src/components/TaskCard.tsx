import React from 'react'
import { Task } from '@/state/api'
import { format } from 'date-fns'
import Image from 'next/image'

type Props = {
    task: Task
}

const getStatusColor: any = () => {
    const statusColors = {
        "To Do": "#2563EB",
        "Work In Progress": "#059669",
        "Under Review": "#D97706",
        "Completed": "#000000"
    }
    return statusColors[status as keyof typeof statusColors] || "#2563EB"
}

const TaskCard = ({ task }: Props) => {
    return (
        <div className='mb-6 rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-dark-secondary dark:text-white'>
            <div className="grid gap-3">
                {/* ID Section */}
                <div className="flex items-baseline justify-between border-b border-gray-100 pb-2 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">ID</span>
                    <span className="text-sm">{task.id}</span>
                </div>

                {/* Title and Description Section */}
                <div className="border-b border-gray-100 pb-2 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{task.title}</h2>
                    <p className="mt-2 mb-2 text-sm text-gray-600 dark:text-gray-300">
                        {task.description || "No description provided"}
                    </p>
                    {/* Attachments Section with Masonry Layout */}
                    {task.attachments && task.attachments.length > 0 && (
                        <div className="mb-4">
                            <div className='grid grid-cols-2 gap-4' style={{ gridAutoRows: "200px" }}>
                                {task.attachments.map((attachment, index) => (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-lg shadow-sm"
                                        style={{ gridRow: `span ${Math.ceil((index % 3) + 1)}` }}
                                    >
                                        <Image
                                            src={`/${attachment.fileURL}`}
                                            alt={attachment.fileName || ""}
                                            layout="fill"
                                            objectFit="cover"
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Status and Priority Section */}
                <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</span>
                        <span
                            className="rounded-full px-3 py-1 text-sm font-medium text-white"
                            style={{ backgroundColor: getStatusColor(task.status) }}
                        >
                            {task.status}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Priority</span>
                        <span
                            className={`rounded-full px-2 py-1 text-xs font-semibold 
                            ${task.priority === "Urgent" ? "bg-red-200 text-red-700" :
                                    task.priority === "High" ? "bg-yellow-200 text-yellow-700" :
                                        task.priority === "Medium" ? "bg-green-200 text-green-700" :
                                            task.priority === "Low" ? "bg-blue-200 text-blue-700" :
                                                "bg-gray-200 text-gray-700"}`}
                        >
                            {task.priority}
                        </span>
                    </div>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2">
                    {task.tags && <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                        {task.tags}
                    </span>}
                </div>

                {/* Dates Section */}
                <div className="grid gap-2 text-sm">
                    <div className="flex gap-2">
                        <span className="font-medium text-gray-500 dark:text-gray-400">Start Date:</span>
                        <span>{task.startDate ? format(new Date(task.startDate), "P") : "Not set"}</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-medium text-gray-500 dark:text-gray-400">Due Date:</span>
                        <span>{task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}</span>
                    </div>
                </div>

                {/* Author and Assignee Section */}
                <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Author : </span>
                        <span className="text-sm">{task.author ? task.author.username : "Unknown"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Assignee : </span>
                        <span className="text-sm">{task.assignee ? task.assignee.username : "Unassigned"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard