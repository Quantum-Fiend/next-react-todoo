#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

// Define a Task structure
struct Task {
    int id;
    std::string title;
    std::string desc;
};

// Global vector to store tasks (in a real Wasm app, we might store this in the heap)
std::vector<Task> tasks;
int nextId = 1;

extern "C" {

    // Function to add a task
    // Returns the new size of the list
    int addTask(const char* title, const char* desc) {
        tasks.push_back({nextId++, std::string(title), std::string(desc)});
        return tasks.size();
    }

    // Function to delete a task by index
    // Returns the new size of the list
    int deleteTask(int index) {
        if (index >= 0 && index < tasks.size()) {
            tasks.erase(tasks.begin() + index);
            return 1; // Success
        }
        return 0; // Failure
    }

    // Function to get the number of tasks
    int getTaskCount() {
        return tasks.size();
    }

    // Function to get a task title by index
    // Note: In real Wasm, string passing is trickier (needs memory management).
    // This is a simplified example assuming the wrapper handles memory or we return pointers.
    const char* getTaskTitle(int index) {
        if (index >= 0 && index < tasks.size()) {
            return tasks[index].title.c_str();
        }
        return "";
    }
    
    // Function to get a task desc by index
    const char* getTaskDesc(int index) {
        if (index >= 0 && index < tasks.size()) {
            return tasks[index].desc.c_str();
        }
        return "";
    }
}
