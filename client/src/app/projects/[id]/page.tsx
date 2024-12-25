"use client"
import ProjectHeader from '@/components/projectComponents/Header/ProjectHeader'
import BoardView from '@/components/projectComponents/BoardView/BoardView'
import React, { useState } from 'react'
import ListView from '@/components/projectComponents/ListView/ListView'

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
        </div>
    )
}

export default Project