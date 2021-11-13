export const allProjects = [
    {
        id: 1,
        title: "Car 1",
        description: "The first project.",
        goal: 150,
        image: "https://images3.alphacoders.com/115/115387.jpg",
        is_open: false,
        date_created: "2020-03-20T14:22:23.382748Z",
        owner: 1,
    },
]
    
    export const oneProject = {
        id: 1,
        title: "Project One",
        description: "The first car.",
        goal: 150,
        image: "https://images3.alphacoders.com/115/115387.jpg",
        is_open: false,
        date_created: "2020-03-20T14:22:23.382748Z",
        owner: 1,
        ratings: [
            {id: 1,
                rating: 5,
                comment: "This car is fast",
                supporter: 3,
                project_id: 1,
            },
        ],
    };

    export default allProjects
