"use client";
import React, { useState, type FormEvent, type ChangeEvent } from "react";
import { useWasmTodo } from "./hooks/useWasmTodo";

// Note: Ensure you have your SCSS styles loaded via layout
// This component uses standard classes defined in main.scss

const Page = () => {
    const { tasks, addTask, deleteTask, isWasmLoaded } = useWasmTodo();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (!title) return;

        // Call C++ logic (simulated via hook)
        addTask(title, desc);

        setTitle("");
        setDesc("");
    };

    if (!isWasmLoaded) {
        return (
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
                <h1 className="title-glitch" style={{ fontSize: '2rem' }}>INITIALIZING C++ KERNEL...</h1>
                <div style={{ width: '200px', height: '2px', background: '#00f3ff', boxShadow: '0 0 10px #00f3ff' }}></div>
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <h1 className="title-glitch">
                    CYBER TODO
                </h1>

                <form className="todo-form" onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="TASK SEQUENCE..."
                        value={title}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="PARAMETERS (OPTIONAL)..."
                        value={desc}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)}
                    />
                    <button type="submit">
                        INITIALIZE TASK
                    </button>
                </form>

                <hr style={{ margin: '2rem 0', borderColor: 'rgba(255,255,255,0.1)' }} />

                <div className="task-container">
                    {tasks.length > 0 ? (
                        <ul className="task-list">
                            {tasks.map((task, index) => (
                                <li key={task.id} className="task-item">
                                    <div className="task-content">
                                        <h4>{task.title}</h4>
                                        <p>{task.desc}</p>
                                    </div>
                                    <button
                                        onClick={() => deleteTask(index)}
                                        className="delete-btn">
                                        TERMINATE
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="empty-state">
                            SYSTEM IDLE. NO TASKS DETECTED.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Page;
