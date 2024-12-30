import React from 'react'
import ReusablePriorityPage from '../../../components/ReusablePriorityPage/ReusablePriorityPage'
import { Priority } from '@/state/api'

const Urgent = () => {
    return (
        <ReusablePriorityPage
            priority={Priority.Backlog}
        />
    )
}

export default Urgent