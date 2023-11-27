import {v1} from 'uuid'

export type CardType = {
    id: string,
    name: string
    description: string
    importance: CardImportanceType
    status: CardStatusType
    type: CardTypeType
    deadline: string
    file: number
    message: number
}
export type FilterValuesType = "All" | "To Do" | "Ongoing" | "Done"
export type CardImportanceType = "high" | "mid" | "low"
export type CardStatusType = "To Do" | "Ongoing" | "Done"
export type CardTypeType = "Today's tasks" | "Upcoming" | "Completed"
export type TaskType = {
    type: CardTypeType
    checked: boolean
    filterParameter: CardTypeType
}
export type CategoryType = {
    filter: FilterValuesType
}
export const allTasks: Array<CardType> = [{
    id: v1(),
    name: "Project X dashboard UI design",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "high",
    status: "Ongoing",
    type: "Today's tasks",
    deadline: "August 15, 2023",
    file: 2,
    message: 3
  },
  
  {
    id: v1(),
    name: "Project X dashboard UI prototype",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "mid",
    status: "To Do",
    type: "Today's tasks",
    deadline: "August 15, 2023",
    file: 2,
    message: 3
  },

  {
    id: v1(),
    name: "Project X product  documentation",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "high",
    status: "Ongoing",
    type: "Today's tasks",
    deadline: "August 15, 2023",
    file: 2,
    message: 3
  },

  {
    id: v1(),
    name: "Project X dashboard UI prototype",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "mid",
    status: "To Do",
    type: "Upcoming",
    deadline: "August 15, 2023",
    file: 2,
    message: 3
  },

  {
    id: v1(),
    name: "Project X dashboard UI prototype",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "mid",
    status: "To Do",
    type: "Upcoming",
    deadline: "August 15, 2023",
    file: 2,
    message: 3
  },
  
  {
    id: v1(),
    name: "Project X product research",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "low",
    status: "Done",
    type: "Completed",
    deadline: "August 15, 2023",
    file: 2,
    message: 3
  },

  {
    id: v1(),
    name: "Project X product research",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "low",
    status: "Done",
    type: "Completed",
    deadline: "August 15, 2023",
    file: 2,
    message: 3
  },

  {
    id: v1(),
    name: "Project X product research",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "low",
    status: "Done",
    type: "Completed",
    deadline: "August 15, 2023",
    file: 2,
    message: 3
  },

  {
    id: v1(),
    name: "Project X product research",
    description: "Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management",
    importance: "low",
    status: "Done",
    type: "Completed",
    deadline: "August 15, 2023",
    file: 2,
    message: 3
  }
]

export const taskType: TaskType[] = [{
    type: "Today's tasks",
    checked: true,
    filterParameter: "Today's tasks"
},
{
    type: "Upcoming",
    checked: false,
    filterParameter: "Upcoming"
},
{
    type: "Completed",
    checked: false,
    filterParameter: "Completed"
}]
export const taskCategory: CategoryType[] = [{
    filter: 'All'
},
{
    filter: 'To Do'
},
{
    filter: 'Ongoing'
},
{
    filter: 'Done'
}
]