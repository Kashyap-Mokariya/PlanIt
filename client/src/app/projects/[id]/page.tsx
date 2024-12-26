"use client"
import ProjectHeader from '@/components/projectComponents/Views/Header/ProjectHeader'
import BoardView from '@/components/projectComponents/Views/BoardView/BoardView'
import React, { useState } from 'react'
<<<<<<< HEAD
import ListView from '@/components/projectComponents/ListView/ListView'
import ModalNewTask from '@/components/ModalNewTask'
=======
import ListView from '@/components/projectComponents/Views/ListView/ListView'
import TimelineView from '@/components/projectComponents/Views/TimelineView/TimelineView'
>>>>>>> 45f13978d276e34690745458a04a63d86c0f4636

type Props = {
    params: { id: string }
}

const Project = ({ params }: Props) => {

    const { id } = params
    const [activeTab, setActiveTab] = useState("Board")
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)

    return (
        <div>
            {/* Modal NEW TASKS */}
            <ModalNewTask isOpen={isModalNewTaskOpen}
            onClose={()=> setIsModalNewTaskOpen(false)}
            id={id}
            />

            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

            {
                activeTab === "Board" && (
                    <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
                )
            }
            
            {
                activeTab === "List" && (
                    <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
                )
            }
            
            {
                activeTab === "TimeLine" && (
                    <TimelineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
                )
            }
        </div>
    )
}

export default Project