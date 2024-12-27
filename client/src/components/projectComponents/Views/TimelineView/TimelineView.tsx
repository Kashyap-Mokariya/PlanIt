// import { useAppSelector } from '@/components/redux'
// import { useGetTasksQuery } from '@/state/api'
// import {DisplayOption, Gantt, ViewMode} from "gantt-task-react"
// import "gantt-task-react/dist/index.css"
// import React, { useMemo, useState } from 'react'

// type TimelineProps = {
//     id: string
//     setIsModalNewTaskOpen: (isOpen: boolean) => void
// }

// type TaskTypeItem = "task" | "milestone" | "project"

// const TimelineView = ({ id, setIsModalNewTaskOpen }: TimelineProps) => {
//     const isDarkMode = useAppSelector((state) => state.theme.isDarkMode)

//     const { data: tasks, isLoading, error } = useGetTasksQuery({ projectId: Number(id) })

//     const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
//         viewMode: ViewMode.Month,
//         locale: "en-US"
//     })

//     const ganttTasks = useMemo(() => {
//         return (
//             tasks?.map((task) => ({
//                 start: new Date(task.startDate as string),
//                 end: new Date(task.dueDate as string),
//                 name: task.title || "Untitled Task",
//                 id: `Task-${task.id}`,
//                 type: "task" as TaskTypeItem,
//                 progress: task.points ? (task.points / 10) * 100 : 0,
//                 isDisabled: false
//             })) || []
//         )
//     }, [tasks])

//     const handleViewModeChange = (
//         event: React.ChangeEvent<HTMLSelectElement>
//     ) => {
//         setDisplayOptions((prev) => ({
//             ...prev,
//             viewMode: event.target.value as ViewMode,
//         }))
//     }

//     if (isLoading)
//         return <div className='dark:text-white'>Loading...</div>

//     if (error || !tasks)
//         return <div className='dark:text-white'>An error occured while fetching tasks</div>

//     return (
//         <div className='px-4 xl:px-6'>
//             <div className='flex flex-wrap items-center justify-between gap-2 py-5'>

//                 <h1 className='me-2 text-lg font-bold dark:text-white'>
//                     Project Tasks Timeline
//                 </h1>

//                 <div className='relative inline-block w-64'>
//                     <select 
//                         className='focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white'
//                         value={displayOptions.viewMode}
//                         onChange={handleViewModeChange}
//                     >
//                         <option value={ViewMode.Day}>Day</option>

//                         <option value={ViewMode.Week}>Week</option>
//                         <option value={ViewMode.Month}>Month</option>
//                     </select>
//                 </div>
//             </div>

//             <div className=' rounded-md border bg-white shadown dark:bg-dark-secondary dark:text-white'>
//                 <div className='timeline'>
//                     <Gantt
//                         tasks={ganttTasks}
//                         {...displayOptions}
//                         columnWidth={displayOptions.viewMode === ViewMode.Month ? 100 : 100}
//                         listCellWidth='100px'
//                         barBackgroundColor={isDarkMode ? "#101214" : "#aeb8c2"}
//                         barProgressSelectedColor={isDarkMode ? "#000" : "#9ba1a6"}
//                     />
//                 </div>

//                 <div className='px-4 pb-5 pt-1'>
//                     <button
//                         className='flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600'
//                         onClick={() => setIsModalNewTaskOpen(true)}
//                     >
//                         Add New Task
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TimelineView

// import { useAppSelector } from '@/components/redux'
// import { useGetTasksQuery } from '@/state/api'
// import { DisplayOption, Gantt, ViewMode } from "gantt-task-react"
// import "gantt-task-react/dist/index.css"
// import React, { useMemo, useState } from 'react'

// type TimelineProps = {
//     id: string
//     setIsModalNewTaskOpen: (isOpen: boolean) => void
// }

// type TaskTypeItem = "task" | "milestone" | "project"

// const TimelineView = ({ id, setIsModalNewTaskOpen }: TimelineProps) => {
//     const isDarkMode = useAppSelector((state) => state.theme.isDarkMode)

//     const { data: tasks, isLoading, error } = useGetTasksQuery({ projectId: Number(id) })

//     const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
//         viewMode: ViewMode.Month,
//         locale: "en-US"
//     })

//     const ganttTasks = useMemo(() => {
//         return (
//             tasks?.map((task) => ({
//                 start: new Date(task.startDate as string),
//                 end: new Date(task.dueDate as string),
//                 name: task.title || "Untitled Task",
//                 id: `Task-${task.id}`,
//                 type: "task" as TaskTypeItem,
//                 progress: task.points ? (task.points / 10) * 100 : 0,
//                 isDisabled: false
//             })) || []
//         )
//     }, [tasks])

//     const handleViewModeChange = (
//         event: React.ChangeEvent<HTMLSelectElement>
//     ) => {
//         setDisplayOptions((prev) => ({
//             ...prev,
//             viewMode: event.target.value as ViewMode,
//         }))
//     }

//     if (isLoading)
//         return <div className='dark:text-white'>Loading...</div>

//     if (error || !tasks)
//         return <div className='dark:text-white'>An error occured while fetching tasks</div>

//     return (
//         <div className='px-4 xl:px-6'>
//             <div className='flex flex-wrap items-center justify-between gap-2 py-5'>
//                 <h1 className='me-2 text-lg font-bold dark:text-white'>
//                     Project Tasks Timeline
//                 </h1>

//                 <div className='relative inline-block w-64'>
//                     <select
//                         className='focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white'
//                         value={displayOptions.viewMode}
//                         onChange={handleViewModeChange}
//                     >
//                         <option value={ViewMode.Day}>Day</option>
//                         <option value={ViewMode.Week}>Week</option>
//                         <option value={ViewMode.Month}>Month</option>
//                     </select>
//                 </div>
//             </div>

//             <div className='rounded-md border bg-white shadow dark:bg-dark-secondary dark:text-white'>
//                 <div style={{
//                     height: '300px',
//                     position: 'relative',
//                 }}>
//                     <div className='absolute inset-0 overflow-x-auto overflow-y-hidden gantt-container'>
//                         <Gantt
//                             tasks={ganttTasks}
//                             {...displayOptions}
//                             columnWidth={100}
//                             listCellWidth='200px'
//                             barBackgroundColor={isDarkMode ? "#101214" : "#aeb8c2"}
//                             barProgressSelectedColor={isDarkMode ? "#000" : "#9ba1a6"}
//                             barProgressColor="#2563eb"
//                             ganttHeight={200}
//                             rowHeight={50}
//                         />
//                     </div>
//                 </div>

//                 <div className='px-4 pb-5 pt-1'>
//                     <button
//                         className='flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600'
//                         onClick={() => setIsModalNewTaskOpen(true)}
//                     >
//                         Add New Task
//                     </button>
//                 </div>
//             </div>

//             <style jsx>{`
//                 .gantt-container {
//                     scrollbar-width: thin;
//                 }
//                 .gantt-container::-webkit-scrollbar {
//                     height: 8px;
//                 }
//                 .gantt-container::-webkit-scrollbar-track {
//                     background: ${isDarkMode ? '#1a1d1e' : '#f1f1f1'};
//                     border-radius: 4px;
//                 }
//                 .gantt-container::-webkit-scrollbar-thumb {
//                     background: ${isDarkMode ? '#4a4d4e' : '#888'};
//                     border-radius: 4px;
//                 }
//                 .gantt-container::-webkit-scrollbar-thumb:hover {
//                     background: ${isDarkMode ? '#606364' : '#555'};
//                 }
//             `}</style>
//         </div>
//     )
// }

// export default TimelineView

// import React, { useMemo, useState } from 'react';
// import { useAppSelector } from '@/components/redux';
// import { Task, useGetTasksQuery } from '@/state/api';

// const CELL_WIDTH = 100;
// const ROW_HEIGHT = 50;
// const CHART_HEIGHT = 200;
// const LIST_WIDTH = 200;

// type TimelineProps = {
//     id: string;
//     setIsModalNewTaskOpen: (isOpen: boolean) => void;
// };

// // type Task = {
// //     id: string;
// //     title: string;
// //     startDate: string;
// //     dueDate: string;
// //     points?: number;
// // };

// type ProcessedTask = Task & {
//     startDate: Date;
//     dueDate: Date;
//     progress: number;
// };

// const TimelineView: React.FC<TimelineProps> = ({ id, setIsModalNewTaskOpen }) => {
//     const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
//     const { data: tasks, isLoading, error } = useGetTasksQuery({ projectId: Number(id) });

//     const [viewMode, setViewMode] = useState<'Day' | 'Week' | 'Month'>('Month');

//     const getMonthDates = (startDate: Date, endDate: Date): Date[] => {
//         const dates: Date[] = [];
//         let currentDate = new Date(startDate);

//         while (currentDate <= endDate) {
//             dates.push(new Date(currentDate));
//             currentDate.setMonth(currentDate.getMonth() + 1);
//         }
//         return dates;
//     };

//     const getDayDates = (startDate: Date, endDate: Date): Date[] => {
//         const dates: Date[] = [];
//         let currentDate = new Date(startDate);

//         while (currentDate <= endDate) {
//             dates.push(new Date(currentDate));
//             currentDate.setDate(currentDate.getDate() + 1);
//         }
//         return dates;
//     };

//     const getWeekDates = (startDate: Date, endDate: Date): Date[] => {
//         const dates: Date[] = [];
//         let currentDate = new Date(startDate);

//         while (currentDate <= endDate) {
//             dates.push(new Date(currentDate));
//             currentDate.setDate(currentDate.getDate() + 7);
//         }
//         return dates;
//     };

//     const { timelineDates, processedTasks } = useMemo(() => {
//         if (!tasks?.length) return { timelineDates: [], processedTasks: [] };

//         const sortedTasks = [...tasks].sort((a, b) =>
//             new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
//         );

//         const minDate = new Date(sortedTasks[0].startDate);
//         const maxDate = new Date(sortedTasks[sortedTasks.length - 1].dueDate);

//         let timelineDates: Date[];
//         switch (viewMode) {
//             case 'Day':
//                 timelineDates = getDayDates(minDate, maxDate);
//                 break;
//             case 'Week':
//                 timelineDates = getWeekDates(minDate, maxDate);
//                 break;
//             default:
//                 timelineDates = getMonthDates(minDate, maxDate);
//         }

//         const processedTasks: ProcessedTask[] = sortedTasks.map(task => ({
//             ...task,
//             startDate: new Date(task.startDate),
//             dueDate: new Date(task.dueDate),
//             progress: task.points ? (task.points / 10) * 100 : 0
//         }));

//         return { timelineDates, processedTasks };
//     }, [tasks, viewMode]);

//     const getTaskPosition = (task: ProcessedTask) => {
//         if (!timelineDates.length) return { left: 0, width: 0 };

//         const startTime = task.startDate.getTime();
//         const endTime = task.dueDate.getTime();
//         const timelineStart = timelineDates[0].getTime();
//         const timelineEnd = timelineDates[timelineDates.length - 1].getTime();
//         const totalDuration = timelineEnd - timelineStart;

//         const left = ((startTime - timelineStart) / totalDuration) * (timelineDates.length * CELL_WIDTH);
//         const width = ((endTime - startTime) / totalDuration) * (timelineDates.length * CELL_WIDTH);

//         return { left, width };
//     };

//     if (isLoading) return <div className="dark:text-white">Loading...</div>;
//     if (error || !tasks) return <div className="dark:text-white">An error occurred while fetching tasks</div>;

//     return (
//         <div className="px-4 xl:px-6">
//             <div className="flex flex-wrap items-center justify-between gap-2 py-5">
//                 <h1 className="me-2 text-lg font-bold dark:text-white">
//                     Project Tasks Timeline
//                 </h1>

//                 <div className="relative inline-block w-64">
//                     <select
//                         className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
//                         value={viewMode}
//                         onChange={(e) => setViewMode(e.target.value as 'Day' | 'Week' | 'Month')}
//                     >
//                         <option value="Day">Day</option>
//                         <option value="Week">Week</option>
//                         <option value="Month">Month</option>
//                     </select>
//                 </div>
//             </div>

//             <div className="rounded-md border bg-white shadow dark:bg-dark-secondary">
//                 <div style={{ height: '300px', position: 'relative' }}>
//                     <div className="absolute inset-0 overflow-x-auto overflow-y-hidden gantt-container">
//                         <div style={{
//                             display: 'flex',
//                             position: 'relative',
//                             height: CHART_HEIGHT,
//                             minWidth: LIST_WIDTH + (timelineDates.length * CELL_WIDTH)
//                         }}>
//                             {/* Task List */}
//                             <div style={{
//                                 width: LIST_WIDTH,
//                                 borderRight: '1px solid #ccc',
//                                 backgroundColor: isDarkMode ? '#1a1d1e' : '#f8f9fa'
//                             }}>
//                                 <div className="p-2 font-bold border-b dark:text-white">Tasks</div>
//                                 {processedTasks.map((task, index) => (
//                                     <div
//                                         key={task.id}
//                                         className="p-2 border-b dark:text-white"
//                                         style={{ height: ROW_HEIGHT }}
//                                     >
//                                         {task.title || "Untitled Task"}
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Timeline Grid */}
//                             <div style={{ position: 'relative', flex: 1 }}>
//                                 <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
//                                     {timelineDates.map((date, index) => (
//                                         <div
//                                             key={index}
//                                             style={{
//                                                 width: CELL_WIDTH,
//                                                 padding: '8px',
//                                                 borderRight: '1px solid #ccc',
//                                             }}
//                                             className="dark:text-white"
//                                         >
//                                             {date.toLocaleDateString(undefined, {
//                                                 month: 'short',
//                                                 [viewMode.toLowerCase()]: 'numeric'
//                                             })}
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* Task Bars */}
//                                 {processedTasks.map((task, index) => {
//                                     const { left, width } = getTaskPosition(task);
//                                     return (
//                                         <div
//                                             key={task.id}
//                                             style={{
//                                                 position: 'absolute',
//                                                 left: LIST_WIDTH + left,
//                                                 top: (index * ROW_HEIGHT) + ROW_HEIGHT,
//                                                 width: Math.max(width, 0),
//                                                 height: ROW_HEIGHT - 20,
//                                                 backgroundColor: isDarkMode ? '#2563eb' : '#3b82f6',
//                                                 borderRadius: '4px',
//                                                 transition: 'all 0.3s ease'
//                                             }}
//                                         >
//                                             <div
//                                                 style={{
//                                                     width: `${task.progress}%`,
//                                                     height: '100%',
//                                                     backgroundColor: isDarkMode ? '#1d4ed8' : '#2563eb',
//                                                     borderRadius: '4px'
//                                                 }}
//                                             />
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="px-4 pb-5 pt-1">
//                     <button
//                         className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
//                         onClick={() => setIsModalNewTaskOpen(true)}
//                     >
//                         Add New Task
//                     </button>
//                 </div>
//             </div>

//             <style jsx>{`
//         .gantt-container {
//           scrollbar-width: thin;
//         }
//         .gantt-container::-webkit-scrollbar {
//           height: 8px;
//         }
//         .gantt-container::-webkit-scrollbar-track {
//           background: ${isDarkMode ? '#1a1d1e' : '#f1f1f1'};
//           border-radius: 4px;
//         }
//         .gantt-container::-webkit-scrollbar-thumb {
//           background: ${isDarkMode ? '#4a4d4e' : '#888'};
//           border-radius: 4px;
//         }
//         .gantt-container::-webkit-scrollbar-thumb:hover {
//           background: ${isDarkMode ? '#606364' : '#555'};
//         }
//       `}</style>
//         </div>
//     );
// };

// export default TimelineView;

// import React, { useMemo, useState } from 'react';
// import { useAppSelector } from '@/components/redux';
// import { Task, useGetTasksQuery } from '@/state/api';

// const CELL_WIDTH = 140;
// const ROW_HEIGHT = 40;
// const LIST_WIDTH = 300;

// type TimelineProps = {
//     id: string;
//     setIsModalNewTaskOpen: (isOpen: boolean) => void;
// };

// const TimelineView: React.FC<TimelineProps> = ({ id, setIsModalNewTaskOpen }) => {
//     const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
//     const { data: tasks, isLoading, error } = useGetTasksQuery({ projectId: Number(id) });
//     const [viewMode, setViewMode] = useState<'Day' | 'Week' | 'Month'>('Month');

//     const getDateRange = (tasks: Task[]) => {
//         if (!tasks.length) return { start: new Date(), end: new Date() };

//         let minDate = new Date(tasks[0].startDate);
//         let maxDate = new Date(tasks[0].dueDate);

//         tasks.forEach(task => {
//             const startDate = new Date(task.startDate);
//             const dueDate = new Date(task.dueDate);
//             if (startDate < minDate) minDate = startDate;
//             if (dueDate > maxDate) maxDate = dueDate;
//         });

//         // Start from the beginning of the min date's month
//         minDate.setDate(1);
//         // End at the last day of the max date's month
//         maxDate.setMonth(maxDate.getMonth() + 1);
//         maxDate.setDate(0);

//         return { start: minDate, end: maxDate };
//     };

//     const { timelineData, processedTasks } = useMemo(() => {
//         if (!tasks?.length) return { timelineData: [], processedTasks: [] };

//         const dateRange = getDateRange(tasks);
//         const years = new Set<number>();
//         const months: { year: number; month: number; label: string }[] = [];

//         let currentDate = new Date(dateRange.start);
//         while (currentDate <= dateRange.end) {
//             years.add(currentDate.getFullYear());
//             months.push({
//                 year: currentDate.getFullYear(),
//                 month: currentDate.getMonth(),
//                 label: currentDate.toLocaleString('default', { month: 'short' })
//             });
//             currentDate.setMonth(currentDate.getMonth() + 1);
//         }

//         const processedTasks = tasks.map(task => ({
//             ...task,
//             startDate: new Date(task.startDate),
//             dueDate: new Date(task.dueDate),
//             progress: task.points ? (task.points / 10) * 100 : 0
//         }));

//         return {
//             timelineData: {
//                 years: Array.from(years),
//                 months
//             },
//             processedTasks
//         };
//     }, [tasks]);

//     const getTaskPosition = (task: ProcessedTask) => {
//         if (!timelineData.months.length) return { left: 0, width: 0 };

//         const firstMonth = new Date(timelineData.months[0].year, timelineData.months[0].month, 1);
//         const startOffset = task.startDate.getTime() - firstMonth.getTime();
//         const duration = task.dueDate.getTime() - task.startDate.getTime();
//         const totalDuration = timelineData.months.length * 30 * 24 * 60 * 60 * 1000;

//         const left = (startOffset / totalDuration) * (timelineData.months.length * CELL_WIDTH);
//         const width = (duration / totalDuration) * (timelineData.months.length * CELL_WIDTH);

//         return { left, width: Math.max(width, CELL_WIDTH / 4) }; // Minimum width for visibility
//     };

//     if (isLoading) return <div className="dark:text-white">Loading...</div>;
//     if (error || !tasks) return <div className="dark:text-white">An error occurred while fetching tasks</div>;

//     return (
//         <div className="h-full flex flex-col">
//             <div className="flex items-center justify-between p-6">
//                 <h2 className="text-xl font-semibold dark:text-white">Project Tasks Timeline</h2>
//                 <select
//                     className="px-4 py-2 border rounded-md bg-white dark:bg-dark-secondary dark:text-white"
//                     value={viewMode}
//                 >
//                     <option value="Month">Month</option>
//                 </select>
//             </div>

//             <div className="flex-1 overflow-hidden border rounded-lg bg-white dark:bg-dark-secondary">
//                 <div className="h-full overflow-auto">
//                     <div style={{
//                         minWidth: LIST_WIDTH + (timelineData.months.length * CELL_WIDTH),
//                         display: 'flex'
//                     }}>
//                         {/* Task List */}
//                         <div style={{ width: LIST_WIDTH }} className="flex-shrink-0 border-r sticky left-0 bg-white dark:bg-dark-secondary z-10">
//                             <div className="grid grid-cols-3 gap-4 px-4 py-3 font-medium border-b">
//                                 <div>Name</div>
//                                 <div>From</div>
//                                 <div>To</div>
//                             </div>
//                             {processedTasks.map(task => (
//                                 <div key={task.id} className="grid grid-cols-3 gap-4 px-4 py-3 border-b">
//                                     <div>{task.title}</div>
//                                     <div>{task.startDate.toLocaleDateString()}</div>
//                                     <div>{task.dueDate.toLocaleDateString()}</div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Timeline */}
//                         <div className="flex-1">
//                             {/* Years - Sticky Header */}
//                             <div className="sticky top-0 z-20 bg-white dark:bg-dark-secondary">
//                                 <div className="flex border-b">
//                                     {timelineData.years.map(year => (
//                                         <div
//                                             key={year}
//                                             className="text-sm font-medium px-4 py-2 border-r"
//                                             style={{
//                                                 width: CELL_WIDTH * timelineData.months.filter(m => m.year === year).length
//                                             }}
//                                         >
//                                             {year}
//                                         </div>
//                                     ))}
//                                 </div>

//                                 {/* Months */}
//                                 <div className="flex border-b">
//                                     {timelineData.months.map((month, index) => (
//                                         <div
//                                             key={index}
//                                             className="text-sm px-4 py-2 border-r"
//                                             style={{ width: CELL_WIDTH }}
//                                         >
//                                             {month.label}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Timeline Grid */}
//                             <div className="relative" style={{ height: processedTasks.length * ROW_HEIGHT }}>
//                                 {/* Grid lines */}
//                                 <div className="absolute inset-0 flex">
//                                     {timelineData.months.map((_, index) => (
//                                         <div
//                                             key={index}
//                                             className="border-r"
//                                             style={{ width: CELL_WIDTH }}
//                                         />
//                                     ))}
//                                 </div>

//                                 {/* Task bars */}
//                                 {processedTasks.map((task, index) => {
//                                     const { left, width } = getTaskPosition(task);
//                                     const taskNumber = index + 1;
//                                     return (
//                                         <div
//                                             key={task.id}
//                                             className="absolute h-6 rounded bg-blue-500 flex items-center"
//                                             style={{
//                                                 left,
//                                                 top: index * ROW_HEIGHT + (ROW_HEIGHT - 24) / 2,
//                                                 width,
//                                             }}
//                                         >
//                                             <div
//                                                 className="h-full rounded bg-blue-600 relative"
//                                                 style={{ width: `${task.progress}%` }}
//                                             />
//                                             <span className="absolute w-full text-center text-white text-sm font-medium">
//                                                 Task {taskNumber}
//                                             </span>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="border-t p-4 bg-white dark:bg-dark-secondary">
//                     <button
//                         onClick={() => setIsModalNewTaskOpen(true)}
//                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                     >
//                         Add New Task
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TimelineView;

// import React, { useMemo, useState } from 'react';
// import { useAppSelector } from '@/components/redux';
// import { Task, useGetTasksQuery } from '@/state/api';

// const CELL_WIDTH = 140;
// const ROW_HEIGHT = 60;
// const LIST_WIDTH = 300;

// const TimelineView = ({ id, setIsModalNewTaskOpen }) => {
//     const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
//     const { data: tasks, isLoading, error } = useGetTasksQuery({ projectId: Number(id) });
//     const [viewMode, setViewMode] = useState('Month');

//     const getDateRange = (tasks) => {
//         if (!tasks?.length) return { start: new Date(), end: new Date() };

//         const dates = tasks.flatMap(task => [new Date(task.startDate), new Date(task.dueDate)]);
//         const minDate = new Date(Math.min(...dates));
//         const maxDate = new Date(Math.max(...dates));

//         minDate.setDate(1);
//         maxDate.setMonth(maxDate.getMonth() + 1);
//         maxDate.setDate(0);

//         return { start: minDate, end: maxDate };
//     };

//     const { timelineData, processedTasks } = useMemo(() => {
//         if (!tasks?.length) return { timelineData: [], processedTasks: [] };

//         const dateRange = getDateRange(tasks);
//         const months = [];
//         const currentDate = new Date(dateRange.start);

//         while (currentDate <= dateRange.end) {
//             months.push({
//                 year: currentDate.getFullYear(),
//                 month: currentDate.getMonth(),
//                 label: currentDate.toLocaleString('default', { month: 'short', year: 'numeric' })
//             });
//             currentDate.setMonth(currentDate.getMonth() + 1);
//         }

//         const processedTasks = tasks.map(task => ({
//             ...task,
//             startDate: new Date(task.startDate),
//             dueDate: new Date(task.dueDate),
//             progress: task.points ? (task.points / 10) * 100 : 0
//         }));

//         return { timelineData: { months }, processedTasks };
//     }, [tasks]);

//     const getTaskPosition = (task) => {
//         if (!timelineData.months?.length) return { left: 0, width: 0 };

//         const firstMonth = new Date(timelineData.months[0].year, timelineData.months[0].month, 1);
//         const startOffset = task.startDate.getTime() - firstMonth.getTime();
//         const duration = task.dueDate.getTime() - task.startDate.getTime();
//         const totalDuration = timelineData.months.length * 30 * 24 * 60 * 60 * 1000;

//         const left = (startOffset / totalDuration) * (timelineData.months.length * CELL_WIDTH);
//         const width = (duration / totalDuration) * (timelineData.months.length * CELL_WIDTH);

//         return { left, width: Math.max(width, CELL_WIDTH / 4) };
//     };

//     if (isLoading) return <div className="flex items-center justify-center h-full dark:text-white">Loading...</div>;
//     if (error || !tasks) return <div className="flex items-center justify-center h-full dark:text-white">Error loading tasks</div>;

//     return (
//         <div className="h-full flex flex-col bg-gray-50 dark:bg-gray-900">
//             <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 border-b">
//                 <h2 className="text-xl font-semibold dark:text-white">Project Timeline</h2>
//                 <select
//                     className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white"
//                     value={viewMode}
//                 >
//                     <option value="Month">Month View</option>
//                 </select>
//             </div>

//             <div className="flex-1 overflow-hidden">
//                 <div className="h-full overflow-auto">
//                     <div className="relative" style={{
//                         minWidth: LIST_WIDTH + (timelineData.months.length * CELL_WIDTH),
//                     }}>
//                         {/* Task List - Fixed Left Column */}
//                         <div className="absolute left-0 top-0 bottom-0 bg-white dark:bg-gray-800 border-r shadow-lg"
//                             style={{ width: LIST_WIDTH }}>
//                             <div className="sticky top-0 z-20 border-b bg-gray-50 dark:bg-gray-900 p-4">
//                                 <div className="font-medium dark:text-white">Tasks</div>
//                             </div>
//                             <div className="space-y-2 p-2">
//                                 {processedTasks.map((task, index) => (
//                                     <div key={task.id}
//                                         className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border"
//                                         style={{ height: ROW_HEIGHT - 16 }}>
//                                         <div className="font-medium dark:text-white truncate">{task.title}</div>
//                                         <div className="text-sm text-gray-500 dark:text-gray-400">
//                                             {task.startDate.toLocaleDateString()} - {task.dueDate.toLocaleDateString()}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Timeline Grid */}
//                         <div className="ml-[300px]">
//                             {/* Months Header */}
//                             <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b">
//                                 <div className="flex">
//                                     {timelineData.months.map((month, index) => (
//                                         <div
//                                             key={index}
//                                             className="text-sm px-4 py-3 border-r dark:text-white font-medium"
//                                             style={{ width: CELL_WIDTH }}
//                                         >
//                                             {month.label}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Timeline Content */}
//                             <div className="relative" style={{ height: processedTasks.length * ROW_HEIGHT }}>
//                                 {/* Grid Background */}
//                                 <div className="absolute inset-0 grid"
//                                     style={{ gridTemplateColumns: `repeat(${timelineData.months.length}, ${CELL_WIDTH}px)` }}>
//                                     {timelineData.months.map((_, index) => (
//                                         <div key={index} className="border-r h-full" />
//                                     ))}
//                                 </div>

//                                 {/* Task Bars */}
//                                 {processedTasks.map((task, index) => {
//                                     const { left, width } = getTaskPosition(task);
//                                     return (
//                                         <div
//                                             key={task.id}
//                                             className="absolute h-8 rounded-lg bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700"
//                                             style={{
//                                                 left,
//                                                 top: index * ROW_HEIGHT + (ROW_HEIGHT - 32) / 2,
//                                                 width,
//                                             }}
//                                         >
//                                             <div
//                                                 className="h-full rounded-lg bg-blue-500 dark:bg-blue-600"
//                                                 style={{ width: `${task.progress}%` }}
//                                             />
//                                             <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-blue-900 dark:text-blue-100">
//                                                 {task.title}
//                                             </span>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="sticky bottom-0 border-t p-4 bg-white dark:bg-gray-800">
//                     <button
//                         onClick={() => setIsModalNewTaskOpen(true)}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                     >
//                         Add New Task
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TimelineView;

// import React, { useMemo, useState } from 'react';
// import { useAppSelector } from '@/components/redux';
// import { Task, useGetTasksQuery } from '@/state/api';

// const CELL_WIDTH = 140;
// const ROW_HEIGHT = 60;
// const LIST_WIDTH = 300;

// const TimelineView = ({ id, setIsModalNewTaskOpen }) => {
//     const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
//     const { data: tasks, isLoading, error } = useGetTasksQuery({ projectId: Number(id) });
//     const [viewMode, setViewMode] = useState('Month');

//     const getDateRange = (tasks) => {
//         if (!tasks?.length) return { start: new Date(), end: new Date() };

//         const dates = tasks.flatMap(task => [new Date(task.startDate), new Date(task.dueDate)]);
//         const minDate = new Date(Math.min(...dates));
//         const maxDate = new Date(Math.max(...dates));

//         // Adjust range based on view mode
//         switch (viewMode) {
//             case 'Week':
//                 minDate.setDate(minDate.getDate() - minDate.getDay());
//                 maxDate.setDate(maxDate.getDate() + (6 - maxDate.getDay()));
//                 break;
//             case 'Day':
//                 break;
//             default: // Month
//                 minDate.setDate(1);
//                 maxDate.setMonth(maxDate.getMonth() + 1);
//                 maxDate.setDate(0);
//         }

//         return { start: minDate, end: maxDate };
//     };

//     const { timelineData, processedTasks } = useMemo(() => {
//         if (!tasks?.length) return { timelineData: [], processedTasks: [] };

//         const dateRange = getDateRange(tasks);
//         const periods = [];
//         const currentDate = new Date(dateRange.start);

//         while (currentDate <= dateRange.end) {
//             let label;
//             let next;

//             switch (viewMode) {
//                 case 'Week':
//                     label = `Week ${Math.ceil(currentDate.getDate() / 7)}`;
//                     next = new Date(currentDate);
//                     next.setDate(currentDate.getDate() + 7);
//                     break;
//                 case 'Day':
//                     label = currentDate.toLocaleDateString('default', { weekday: 'short', month: 'short', day: 'numeric' });
//                     next = new Date(currentDate);
//                     next.setDate(currentDate.getDate() + 1);
//                     break;
//                 default: // Month
//                     label = currentDate.toLocaleString('default', { month: 'short', year: 'numeric' });
//                     next = new Date(currentDate);
//                     next.setMonth(currentDate.getMonth() + 1);
//             }

//             periods.push({
//                 date: new Date(currentDate),
//                 label
//             });

//             currentDate.setTime(next.getTime());
//         }

//         const processedTasks = tasks.map(task => ({
//             ...task,
//             startDate: new Date(task.startDate),
//             dueDate: new Date(task.dueDate),
//             progress: task.points ? (task.points / 10) * 100 : 0
//         }));

//         return { timelineData: { periods }, processedTasks };
//     }, [tasks, viewMode]);

//     const getTaskPosition = (task) => {
//         if (!timelineData.periods?.length) return { left: 0, width: 0 };

//         const totalDuration = timelineData.periods[timelineData.periods.length - 1].date.getTime() -
//             timelineData.periods[0].date.getTime();
//         const startOffset = Math.max(task.startDate.getTime() - timelineData.periods[0].date.getTime(), 0);
//         const duration = task.dueDate.getTime() - task.startDate.getTime();

//         const left = (startOffset / totalDuration) * (timelineData.periods.length * CELL_WIDTH);
//         const width = (duration / totalDuration) * (timelineData.periods.length * CELL_WIDTH);

//         return { left, width: Math.max(width, CELL_WIDTH / 4) };
//     };

//     if (isLoading) return <div className="flex items-center justify-center h-full dark:text-white">Loading...</div>;
//     if (error || !tasks) return <div className="flex items-center justify-center h-full dark:text-white">Error loading tasks</div>;

//     return (
//         <div className="h-full flex flex-col bg-gray-50 dark:bg-gray-900 w-full max-w-screen-xl">
//             <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 border-b">
//                 <h2 className="text-xl font-semibold dark:text-white">Project Timeline</h2>
//                 <select
//                     className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:text-white"
//                     value={viewMode}
//                     onChange={(e) => setViewMode(e.target.value)}
//                 >
//                     <option value="Month">Month View</option>
//                     <option value="Week">Week View</option>
//                     <option value="Day">Day View</option>
//                 </select>
//             </div>

//             <div className="flex-1 overflow-hidden">
//                 <div className="flex h-full">
//                     {/* Task List - Fixed Left Column */}
//                     <div className="flex-none w-[300px] bg-white dark:bg-gray-800 border-r shadow-lg">
//                         <div className="sticky top-0 z-20 border-b bg-gray-50 dark:bg-gray-900 p-4">
//                             <div className="font-medium dark:text-white">Tasks</div>
//                         </div>
//                         <div className="space-y-2 p-2">
//                             {processedTasks.map((task, index) => (
//                                 <div key={task.id}
//                                     className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border"
//                                     style={{ height: ROW_HEIGHT - 16 }}>
//                                     <div className="font-medium dark:text-white truncate">{task.title}</div>
//                                     <div className="text-sm text-gray-500 dark:text-gray-400">
//                                         {task.startDate.toLocaleDateString()} - {task.dueDate.toLocaleDateString()}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Timeline Grid with Horizontal Scroll */}
//                     <div className="flex-1 overflow-x-auto">
//                         <div style={{
//                             width: timelineData.periods.length * CELL_WIDTH,
//                             minWidth: '100%'
//                         }}>
//                             {/* Periods Header */}
//                             <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b">
//                                 <div className="flex">
//                                     {timelineData.periods.map((period, index) => (
//                                         <div
//                                             key={index}
//                                             className="text-sm px-4 py-3 border-r dark:text-white font-medium"
//                                             style={{ width: CELL_WIDTH }}
//                                         >
//                                             {period.label}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Timeline Content */}
//                             <div className="relative" style={{ height: processedTasks.length * ROW_HEIGHT }}>
//                                 {/* Grid Background */}
//                                 <div className="absolute inset-0 grid"
//                                     style={{ gridTemplateColumns: `repeat(${timelineData.periods.length}, ${CELL_WIDTH}px)` }}>
//                                     {timelineData.periods.map((_, index) => (
//                                         <div key={index} className="border-r h-full" />
//                                     ))}
//                                 </div>

//                                 {/* Task Bars */}
//                                 {processedTasks.map((task, index) => {
//                                     const { left, width } = getTaskPosition(task);
//                                     return (
//                                         <div
//                                             key={task.id}
//                                             className="absolute h-8 rounded-lg bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700"
//                                             style={{
//                                                 left,
//                                                 top: index * ROW_HEIGHT + (ROW_HEIGHT - 32) / 2,
//                                                 width,
//                                             }}
//                                         >
//                                             <div
//                                                 className="h-full rounded-lg bg-blue-500 dark:bg-blue-600"
//                                                 style={{ width: `${task.progress}%` }}
//                                             />
//                                             <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-blue-900 dark:text-blue-100">
//                                                 {task.title}
//                                             </span>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="sticky bottom-0 border-t p-4 bg-white dark:bg-gray-800">
//                     <button
//                         onClick={() => setIsModalNewTaskOpen(true)}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                     >
//                         Add New Task
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TimelineView;

import { useAppSelector } from "@/components/redux";
import { useGetTasksQuery } from "@/state/api";
import { DisplayOption, Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import React, { useMemo, useState } from "react";

type Props = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

type TaskTypeItems = "task" | "milestone" | "project";

const Timeline = ({ id, setIsModalNewTaskOpen }: Props) => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    const {
        data: tasks,
        error,
        isLoading,
    } = useGetTasksQuery({ projectId: Number(id) });

    const [displayOptions, setDisplayOptions] = useState<DisplayOption>({
        viewMode: ViewMode.Month,
        locale: "en-US",
    });

    const ganttTasks = useMemo(() => {
        return (
            tasks?.map((task) => ({
                start: new Date(task.startDate as string),
                end: new Date(task.dueDate as string),
                name: task.title || "",
                id: `Task-${task.id}`,
                type: "task" as TaskTypeItems,
                progress: task.points ? (task.points / 10) * 100 : 0,
                isDisabled: false,
            })) || []
        );
    }, [tasks]);

    const handleViewModeChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setDisplayOptions((prev) => ({
            ...prev,
            viewMode: event.target.value as ViewMode,
        }));
    };

    if (isLoading) return <div>Loading...</div>;
    if (error || !tasks) return <div>An error occurred while fetching tasks</div>;

    return (
        <div className="px-4 xl:px-6">
            <div className="flex flex-wrap items-center justify-between gap-2 py-5">
                <h1 className="me-2 text-lg font-bold dark:text-white">
                    Project Tasks Timeline
                </h1>
                <div className="relative inline-block w-64">
                    <select
                        className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
                        value={displayOptions.viewMode}
                        onChange={handleViewModeChange}
                    >
                        <option value={ViewMode.Day}>Day</option>
                        <option value={ViewMode.Week}>Week</option>
                        <option value={ViewMode.Month}>Month</option>
                    </select>
                </div>
            </div>

            <div className="rounded-md bg-white shadow dark:bg-dark-secondary dark:text-white">
                <div style={{
                    width: '100%',
                    height: '100%',
                    overflowX: 'auto',
                    overflowY: 'hidden'
                }}>
                    <div className={`timeline max-w-[1600px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] 2xl:max-w-[1440px]`}>
                        <Gantt
                            tasks={ganttTasks}
                            {...displayOptions}
                            columnWidth={displayOptions.viewMode === ViewMode.Month || ViewMode.Week || ViewMode.Day ? 150 : 100}
                            listCellWidth="250px"
                            barBackgroundColor={isDarkMode ? "#101214" : "#aeb8c2"}
                            barBackgroundSelectedColor={isDarkMode ? "#000" : "#9ba1a6"}
                        />
                    </div>
                </div>
                <div className="px-4 pb-5 pt-1">
                    <button
                        className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
                        onClick={() => setIsModalNewTaskOpen(true)}
                    >
                        Add New Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Timeline;

