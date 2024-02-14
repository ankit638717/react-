const courseModel = {
    id: 1, // Unique identifier for the course= 123432
    name: 'Introduction to React Native',
    instructor: 'Ankit kumar ', // React.js 
    description: 'React is an open-source JavaScript library for building user interfaces, particularly for single-page applications where UI updates are frequent. Developed and maintained by Facebook, React has gained widespread adoption due to its efficiency, flexibility, and component-based architecture.


enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'In
    Progress
   import React from 'react';

    const MyComponent = () => {
        return (
            <div>
                <h1>My React Component</h1>
                <img src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896
                " alt="Description of the image" />
            </div>
        );
    };

    export default MyComponent;

    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: [ JavaScript is a versatile programming language primarily used for creating interactive and dynamic content on web pages.Here are some key aspects of JavaScript: 
    ]
syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your
development environment.'
},
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native
components.'
},
            // Additional weeks and topics...
        ],
        students: [
            {
                id: 121514,
                name: 'Arun singh',
                email: 'arun123@gmail.com',
            },
            {
                id: 124323,
                name: 'sobhit mishra',
                email: 'sobhitm122@gmail.com',
            },
            // Additional enrolled students...
        ],
};
export default courseModel;