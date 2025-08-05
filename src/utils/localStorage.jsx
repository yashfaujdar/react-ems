const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Description for task 1",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-18",
          "category": "Testing",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Description for task 2",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-09",
          "category": "Development",
          "priority": "High"
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Description for task 3",
          "activeTask": true,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-24",
          "category": "Design",
          "priority": "High"
        },
        {
          "taskTitle": "Task 4",
          "taskDescription": "Description for task 4",
          "activeTask": true,
          "newTask": true,
          "completed": true,
          "failed": true,
          "taskDate": "2025-08-05",
          "category": "Documentation",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 5",
          "taskDescription": "Description for task 5",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-26",
          "category": "Testing",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 6",
          "taskDescription": "Description for task 6",
          "activeTask": false,
          "newTask": true,
          "completed": true,
          "failed": true,
          "taskDate": "2025-08-04",
          "category": "Deployment",
          "priority": "High"
        },
        {
          "taskTitle": "Task 7",
          "taskDescription": "Description for task 7",
          "activeTask": true,
          "newTask": true,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-14",
          "category": "Documentation",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 8",
          "taskDescription": "Description for task 8",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-11",
          "category": "Documentation",
          "priority": "Medium"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Description for task 1",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-08-01",
          "category": "Testing",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Description for task 2",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-15",
          "category": "Development",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Description for task 3",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-06",
          "category": "Deployment",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 4",
          "taskDescription": "Description for task 4",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-25",
          "category": "Design",
          "priority": "Medium"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Description for task 1",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-14",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Description for task 2",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-26",
          "category": "Deployment",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Description for task 3",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-26",
          "category": "Design",
          "priority": "High"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Description for task 1",
          "activeTask": true,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-09",
          "category": "Testing",
          "priority": "High"
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Description for task 2",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-16",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Description for task 3",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-09",
          "category": "Testing",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 4",
          "taskDescription": "Description for task 4",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-17",
          "category": "Documentation",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 5",
          "taskDescription": "Description for task 5",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-25",
          "category": "Design",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 6",
          "taskDescription": "Description for task 6",
          "activeTask": true,
          "newTask": true,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-30",
          "category": "Development",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 7",
          "taskDescription": "Description for task 7",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-13",
          "category": "Documentation",
          "priority": "High"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Description for task 1",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-08-05",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Description for task 2",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-27",
          "category": "Design",
          "priority": "High"
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Description for task 3",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-14",
          "category": "Testing",
          "priority": "Medium"
        }
      ]
    }];
const admin =  [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
  }