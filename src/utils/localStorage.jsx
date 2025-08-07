const employees = [
    {
      "id": 1,
      "email": "e@e.com",
      "password": "123",
      "firstName": "Vivaan",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Description for task 1",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-08-05",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Description for task 2",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-20",
          "category": "Documentation",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Description for task 3",
          "activeTask": false,
          "newTask": true,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-24",
          "category": "Design",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 4",
          "taskDescription": "Description for task 4",
          "activeTask": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-18",
          "category": "Design",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 5",
          "taskDescription": "Description for task 5",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-20",
          "category": "Testing",
          "priority": "High"
        }
      ],
      "taskNumber": {
        "active": 4,
        "new": 2,
        "completed": 1,
        "failed": 2
      }
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstName": "Diya",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Description for task 1",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-27",
          "category": "Documentation",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Description for task 2",
          "activeTask": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-25",
          "category": "Testing",
          "priority": "High"
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Description for task 3",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-23",
          "category": "Testing",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 4",
          "taskDescription": "Description for task 4",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-09",
          "category": "Development",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 5",
          "taskDescription": "Description for task 5",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-08-06",
          "category": "Documentation",
          "priority": "Low"
        }
      ],
      "taskNumber": {
        "active": 2,
        "new": 2,
        "completed": 2,
        "failed": 3
      }
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstName": "Ananya",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Description for task 1",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-16",
          "category": "Development",
          "priority": "High"
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Description for task 2",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-31",
          "category": "Development",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Description for task 3",
          "activeTask": false,
          "newTask": true,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-10",
          "category": "Testing",
          "priority": "High"
        },
        {
          "taskTitle": "Task 4",
          "taskDescription": "Description for task 4",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskDate": "2025-08-02",
          "category": "Development",
          "priority": "High"
        },
        {
          "taskTitle": "Task 5",
          "taskDescription": "Description for task 5",
          "activeTask": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskDate": "2025-08-05",
          "category": "Deployment",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 6",
          "taskDescription": "Description for task 6",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-14",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Task 7",
          "taskDescription": "Description for task 7",
          "activeTask": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-25",
          "category": "Deployment",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 8",
          "taskDescription": "Description for task 8",
          "activeTask": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-21",
          "category": "Deployment",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 9",
          "taskDescription": "Description for task 9",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-22",
          "category": "Design",
          "priority": "High"
        }
      ],
      "taskNumber": {
        "active": 1,
        "new": 4,
        "completed": 5,
        "failed": 5
      }
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstName": "Kabir",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Description for task 1",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-08-04",
          "category": "Development",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Description for task 2",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-08-01",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Description for task 3",
          "activeTask": true,
          "newTask": true,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-11",
          "category": "Deployment",
          "priority": "High"
        },
        {
          "taskTitle": "Task 4",
          "taskDescription": "Description for task 4",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-23",
          "category": "Development",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 5",
          "taskDescription": "Description for task 5",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-30",
          "category": "Documentation",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 6",
          "taskDescription": "Description for task 6",
          "activeTask": true,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskDate": "2025-07-19",
          "category": "Testing",
          "priority": "High"
        },
        {
          "taskTitle": "Task 7",
          "taskDescription": "Description for task 7",
          "activeTask": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-07-20",
          "category": "Deployment",
          "priority": "Low"
        }
      ],
      "taskNumber": {
        "active": 7,
        "new": 2,
        "completed": 4,
        "failed": 6
      }
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstName": "Rohan",
      "tasks": [
        {
          "taskTitle": "Task 1",
          "taskDescription": "Description for task 1",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": true,
          "taskDate": "2025-07-21",
          "category": "Deployment",
          "priority": "Low"
        },
        {
          "taskTitle": "Task 2",
          "taskDescription": "Description for task 2",
          "activeTask": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-14",
          "category": "Testing",
          "priority": "Medium"
        },
        {
          "taskTitle": "Task 3",
          "taskDescription": "Description for task 3",
          "activeTask": false,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskDate": "2025-07-21",
          "category": "Documentation",
          "priority": "High"
        },
        {
          "taskTitle": "Task 4",
          "taskDescription": "Description for task 4",
          "activeTask": false,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskDate": "2025-08-03",
          "category": "Design",
          "priority": "Medium"
        }
      ],
      "taskNumber": {
        "active": 2,
        "new": 1,
        "completed": 3,
        "failed": 1
      }
    }
  ];


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