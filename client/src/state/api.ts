import { createProject, getProjects } from './../../../server/src/controllers/projectController';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export interface Project {
    id: number
    name: string
    description?: string
    startDate?: string
    endDate?: string
}

export enum Status {
    ToDO = "To Do",
    WorkInProgress = "Work In Progress",
    UnderReview = "Under Review",
    Completed = "Completed"
}

export enum Priority {
    Urgent = "Urgent",
    High = "High",
    Medium = "Medium",
    Low = "Low",
    Backlog = "Backlog",
}

export interface User {
    userId?: number
    userName: string
    email: string
    profilePictureUrl?: string
    cognitoId?: string
    teamId?: number
}

export interface Attachment {
    id: number
    fileUrl: string
    fileName: string
    taskId: number
    uploadedById: number
}

export interface Task {
    id: number
    title?: string
    description?: string
    status?: Status
    priority?: Priority
    tags?: string
    startDate?: string
    dueDate?: string
    points?: number
    projectId: number
    authorUserId?: number
    assignedUserId?: number

    author?: User
    assignee?: User
    comments?: Comment[]
    attachments?: Attachment[]
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
    reducerPath: "api",
    tagTypes: ["Projects"],
    endpoints: (build) => ({
        getProjects: build.query<Project[], void>({
            query: () => "projects",
            providesTags: ["Projects"],
        }),

        createProject: build.mutation<Project, Partial<Project>>({
            query: (project) => ({
                url: "projects",
                method: "POST",
                body: project
            }),

            invalidatesTags: ["Projects"]
        }),

    })
})

export const { } = api