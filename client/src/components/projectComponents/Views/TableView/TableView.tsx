import Header from '@/components/Header';
import { useAppSelector } from '@/components/redux';
import { useGetTasksQuery } from '@/state/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'

type TableViewProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
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
            <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
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
        <div className='h-[540px] w-full px-4 pb-8 xl:px-6'>
            <div className='pt-5'>
                <Header name='Table' isSmallText />
            </div>
            <DataGrid
                rows={tasks || []}
                columns={columns}
            />
        </div>
    )
}

export default TableView