'use client'
import Header from '@/components/layout/admin/Header'
import Sidebar from '@/components/layout/admin/Sidebar'
import { useAxiosWithToken } from '@/hooks'

import { useEffect, useState } from 'react'
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [loading, setLoading] = useState(true)

    const checkToken = () => {
        useAxiosWithToken.get("/auth/validate-token").then(() => {
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }
    useEffect(() => {
        checkToken()
    }, [])


    /* const fakeLogin = () => {
        login("Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwampoQWh3RUpDX0Nxc3VtS1NRZnRvUjh3U2g4VUpjIn0.eyJleHAiOjE3NjI5MTE2MTcsImlhdCI6MTc2Mjg3NTYxNywianRpIjoiZGJiMjAxNTAtYjk3YS00YzE2LTk1MTUtODIzOTljMzVmZmJkIiwiaXNzIjoiaHR0cHM6Ly9zc28uYmFrYXBwLmlyL3JlYWxtcy9zYmtpcmFuIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImU5ZTI0OGUzLTVjN2EtNGZkMS04OGNkLTkzMmQ3MjMzNGQzZCIsInR5cCI6IkJlYXJlciIsImF6cCI6InNia2lyYW4tcmVzdC1hcGkiLCJzZXNzaW9uX3N0YXRlIjoiM2RjMzIwZmEtY2UzYy00NDMxLTliYmEtNDRkODljYTAwNDIyIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImNsaWVudC11c2VyIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLXNia2lyYW4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJzYmtpcmFuLXJlc3QtYXBpIjp7InJvbGVzIjpbImNsaWVudC11c2VyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiIzZGMzMjBmYS1jZTNjLTQ0MzEtOWJiYS00NGQ4OWNhMDA0MjIiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6IjA5MTIyNDM5MTY3In0.jn_JculrcppsRLZwbuLIStcBFMOmAaLMBZnxmDVFu8_Oh2WJx_QKUSFdM7I1L-an5Mq-dIMkU2REeYMSYuAUIv38mEiTJ-aF6vh-iiG1zHfcwUHWO7ZNRJ4UFeDjNpEMC_VOQusrw11lHGFinVH18snjfg0ZDAizhmcLOzHzza4pB-NER2OssaIDE6-D-pWirWK-xAHfHnAC40OBr9-JGol0oaXP0fYgYvmUvWGyuwtGIsjrOvXMe_e-gygBtE074HHcNZNYceo1lRB7ZM5Sf5mgR2FYpOQyWgQl75SbSgZpv-6UcAX_d3YbAoOd8IGBD8rpcrRbZbX3JQFgVfBVjw")
    } */
    return (
        <section className="fixed w-full  h-full top-0 left-0 max-w-full  gap-5">
            {loading && <section className='w-full h-full bg-white fixed z-[1000] flex flex-col gap-2 justify-center items-center'>
                <div className='text-lg text-primary'>
                    درحال احراز هویت
                </div>
                <div className='newsLoader'></div>
            </section>}

            <Header />
            <section className="h-auto w-full px-4 max-w-full flex gap-5">
                <Sidebar />
                <section className="w-[100%] p-[16px] h-[90vh] mt-4 shadow-xl overflow-auto rounded-xl bg-white">
                    {/* <button onClick={fakeLogin}>set fake token</button> */}
                    {children}
                </section>
            </section>
        </section>
    )
}
