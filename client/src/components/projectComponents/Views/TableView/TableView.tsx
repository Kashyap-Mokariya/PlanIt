import Header from '@/components/Header';
import { useAppSelector } from '@/components/redux';
import { dataGridClassNames, dataGridSxStyles } from '@/lib/utils';
import { useGetTasksQuery } from '@/state/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'

type TableViewProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
}

const statusColor: any = {
    "To Do": "#2563EB",
    "Work In Progress": "#059669",
    "Under Review": "#D97706",
    "Completed": "#000000"
}

const columns: GridColDef[] = [
    {
        field: "title",
        headerName: "Title",
        width: 100
    },
    {
        field: "description",
        headerName: "Description",
        width: 200
    },
    {
        field: "status",
        headerName: "Status",
        width: 130,
        renderCell: (params) => (
            <span 
                className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'
                style={{ backgroundColor: statusColor[params.value] || '#FFFFFF', color: '#FFFFFF' }}
            >
                {params.value}
            </span>
        )
    },
    {
        field: "priority",
        headerName: "Priority",
        width: 75
    },
    {
        field: "tags",
        headerName: "Tags",
        width: 130
    },
    {
        field: "startDate",
        headerName: "Start Date",
        width: 130
    },
    {
        field: "dueDate",
        headerName: "Due Date",
        width: 130
    },
    {
        field: "author",
        headerName: "Author",
        width: 150,
        renderCell: (params) => params.value.username || "Unknown"
    },
    {
        field: "assignee",
        headerName: "Assignee",
        width: 150,
        renderCell: (params) => params.value.username || "Unassigned"
    },
]

const TableView = ({ id, setIsModalNewTaskOpen }: TableViewProps) => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode)

    const {
        data: tasks,
        error,
        isLoading,
    } = useGetTasksQuery({ projectId: Number(id) });

    if (isLoading)
        return <div className='dark:text-white'>Loading...</div>

    if (error || !tasks)
        return <div className='dark:text-white'>An error occured while fetching tasks</div>

    return (
        <div className='h-[500px] w-full px-4 pb-8 xl:px-6'>
            <div className='pt-5'>
                <Header 
                    name='Table'
                    buttonComponent={
                        <button
                            className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
                            onClick={() => setIsModalNewTaskOpen(true)}
                        >
                            Add Task
                        </button>
                    }
                    isSmallText
                />
            </div>
            <DataGrid
                rows={tasks || []}
                columns={columns}
                className={dataGridClassNames}
                sx={dataGridSxStyles(isDarkMode)}
            />
        </div>
    )
}

export default TableView