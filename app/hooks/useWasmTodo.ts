import { useState, useEffect } from 'react';

// Define types for our C++ Task structure
interface Task {
    id: number;
    title: string;
    desc: string;
}

// This hook simulates the Wasm module behavior
// In a real scenario, this would load the .wasm file and wrap the C++ exports
export const useWasmTodo = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isWasmLoaded, setIsWasmLoaded] = useState(false);

    useEffect(() => {
        // Simulate Wasm loading delay
        setTimeout(() => {
            console.log('WASM Module Loaded: [cpp/logic.wasm]');
            setIsWasmLoaded(true);
        }, 1000);
    }, []);

    // Fix: Implicit any in strict mode
    const addTask = (title: string, desc: string) => {
        // In real Wasm: Module._addTask(title, desc)
        const newTask: Task = {
            id: Date.now(),
            title,
            desc,
        };
        setTasks((prev: Task[]) => [...prev, newTask]);
        return tasks.length + 1;
    };

    const deleteTask = (index: number) => {
        // In real Wasm: Module._deleteTask(index)
        setTasks((prev: Task[]) => {
            const newTasks = [...prev];
            newTasks.splice(index, 1);
            return newTasks;
        });
    };

    return {
        isWasmLoaded,
        tasks,
        addTask,
        deleteTask,
    };
};
