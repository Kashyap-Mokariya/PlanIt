"use client"
import React, { useEffect, useState } from 'react'
import { useSearchQuery } from '@/state/api'
import { debounce } from 'lodash'
import Header from '@/components/Header'
import TaskCard from '@/components/Cards/TaskCard'
import ProjectCard from '@/components/Cards/ProjectCard'
import UserCard from '@/components/Cards/UserCard'

const Search = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const { data: searchResults, isLoading, isError } = useSearchQuery(searchQuery, {
        skip: searchQuery.length < 3
    })

    const handleSearch = debounce(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(event.target.value)
        }, 500
    )

    useEffect(() => {
        return handleSearch.cancel
    }, [handleSearch.cancel])

    return (
        <div className='p-8'>
            <Header name='Search' />

            <div>
                <input
                    type="text"
                    placeholder='Search...'
                    className='w-1/2 rounded-2xl border p-3 shadow'
                    onChange={handleSearch}
                />
            </div>

            <div className='p-5'>
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error occured while fetching search results</p>}
                {!isLoading && !isError && searchResults && (
                    <div>
                        {searchResults.tasks && searchResults.tasks?.length > 0 && (
                            <h2>Tasks</h2>
                        )}
                        {searchResults.tasks?.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                            />
                        ))}

                        {searchResults.projects && searchResults.projects?.length > 0 && (
                            <h2>Projects</h2>
                        )}
                        {searchResults.projects?.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}

                        {searchResults.users && searchResults.users?.length > 0 && (
                            <h2>Users</h2>
                        )}
                        {searchResults.users?.map((user) => (
                            <UserCard
                                key={user.userId}
                                user={user}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search