"use client"
import ProjectHeader from '@/components/projectComponents/ProjectHeader'
import React, { useState } from 'react'

type Props = {
    params: { id: string }
}

const Project = ({ params }: Props) => {

    const { id } = params
    const [activeTab, setActiveTab] = useState("Board")
    const [isModalNewTaskOpen, setModalNewTaskOpen] = useState(false)

    return (
        <div>
            {/* Modal NEW TASKS */}

            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* {
                activeTab === "Board" && (
                    <Board />
                )
            } */}
        </div>
    )
}

export default Project