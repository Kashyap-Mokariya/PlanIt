"use client"
import ProjectHeader from '@/components/projectComponents/Header/ProjectHeader'
import BoardView from '@/app/projects/BoardView/BoardView'
import React, { useState } from 'react'

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
        </div>
    )
}

export default Project