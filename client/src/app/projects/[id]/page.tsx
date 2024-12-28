"use client"
import ProjectHeader from '@/components/projectComponents/Views/Header/ProjectHeader'
import BoardView from '@/components/projectComponents/Views/BoardView/BoardView'
import React, { useState } from 'react'
import ListView from '@/components/projectComponents/Views/ListView/ListView'
import TimelineView from '@/components/projectComponents/Views/TimelineView/TimelineView'
import TableView from '@/components/projectComponents/Views/TableView/TableView'

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
                activeTab === "Timeline" && (
                    <TimelineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
                )
            }
            
            {
                activeTab === "Table" && (
                    <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
                )
            }
        </div>
    )
}

export default Project