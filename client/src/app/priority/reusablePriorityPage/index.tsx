"use client"
import ModalNewTask from '@/components/ModalNewTask'
import { useAppSelector } from '@/components/redux'
import { Priority, Task, useGetTasksByUserQuery } from '@/state/api'
import React, { useState } from 'react'

type Props = {
    priority: Priority
}

const userId = 1

const ReusablePriorityPage = ({ priority }: Props) => {

    const [view, setView] = useState("list")
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)

    const {data: tasks, isLoading, isError: tasksError} = useGetTasksByUserQuery(userId || 0, {
        skip: userId === null
    })

    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode)

    const filteredTasks = tasks?.filter((task: Task) => task.priority == priority)

    if(tasksError || !tasks)
        return <div>Error fetching tasks</div>

    return (
        <div className='m-5 p-4'>
            <ModalNewTask isOpen={isModalNewTaskOpen} onClose={() => setIsModalNewTaskOpen(false)} />

        </div>
    )
}

export default ReusablePriorityPage