'use client'
import SaveIcons from '@/app/Svgs/SaveIcons'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


interface Data {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = () => {

    const [posts, setPosts] = useState<Data[] | null>(null);


    useEffect(() => {
        const getPostsData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            if (response.status === 200) {
                setPosts(response.data)
            }
        }


        getPostsData()
    }, [])

    return (
        <div className=" grid md:grid-cols-4 grid-cols-1 gap-8 justify-center items-center w-full">
            {posts ? (
                posts.map((item, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <div className="h-[192px] w-[279px] border-[2px] border-[#E6EBEF] p-4 rounded-lg flex flex-col justify-between items-start">
                            <div className="flex justify-between items-center w-full">
                                <h1 className="text-base font-semibold">Title</h1>
                                <div>
                                    <SaveIcons />
                                </div>
                            </div>
                            <p className="text-[#6F6C90] text-lg">{item.title}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    )
}

export default Posts