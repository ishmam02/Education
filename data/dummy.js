export const TodayClasses = [
    {name: 'Maths', time: '8:45 AM - 9:30 AM', teacher: 'Pabel' ,attendance: 'Present' , color: 'rgb(71, 63, 151)'},
    {name: 'Mechanics', time: '8:45 AM - 9:30 AM', teacher: 'Pabel' ,attendance: 'Absent' , color: 'rgb(21, 02, 180)'},
    {name: 'Physics', time: '8:45 AM - 9:30 AM', teacher: 'Pabel' ,attendance: 'Present' , color: 'rgb(71, 63, 151)'},
    {name: 'Chemistry', time: '8:45 AM - 9:30 AM', teacher: 'Pabel' ,attendance: 'Present' , color: 'rgb(50, 80, 255)'},
    {name: 'Computer Science', time: '8:45 AM - 9:30 AM', teacher: 'Pabel' ,attendance: 'Join' , color: 'rgb(71, 63, 151)'},
    {name: 'Biology', time: '8:45 AM - 9:30 AM', teacher: 'Pabel' ,attendance: '' , color: 'rgb(71, 63, 151)'},
];

export const Homework = [
    { title: 'Trigonometry', subject: 'Maths', date: 'Today, 9:00 AM', submitted: 'Yes', type: 'Homework' , id: 1 , submissionType: 'Online' },
    { title: 'Trigonometry', subject: 'Maths', date: 'Today, 9:00 AM', submitted: 'No', type: 'Homework' , id: 2  , submissionType: 'Online'},
    { title: 'Trigonometry', subject: 'Maths', date: 'Today, 9:00 AM', submitted: 'Yes', type: 'Homework' , id: 3  , submissionType: 'Online'},
    { title: 'Trigonometry', subject: 'Maths', date: 'Today, 9:00 AM', submitted: '', type: 'Homework' , id: 4  , submissionType: 'Online'}
]
export const Test = [
    {  title: 'Trigonometry', subject: 'Maths', date: 'Tomorrow, 9:00 AM', submitted: "", type: 'Test' , id: 1 , submissionType: 'Offline'  , duration: '1 hour'}
]
export const Exam = [
    {   title: 'Trigonometry', subject: 'Maths', date: 'Tomorrow, 9:00 AM', submitted: '', type: 'Exam' , id: 1  , submissionType: 'Offline' , duration: '1 hour'}
]


export const AllClasses = [
    {name: 'Maths', nextClass: 'Today, 8:45 AM', id: 1 , join: false, color: 'rgb(71, 63, 151)'},
    {name: 'Mechanics', nextClass: 'Today, 8:45 AM', id: 2, join: false, color: 'rgb(21, 02, 180)' },
    {name: 'Physics', nextClass: 'Today, 8:45 AM', id: 3, join: false, color: 'rgb(71, 63, 151)' },
    {name: 'Chemistry', nextClass: 'Today, 8:45 AM', id: 4, join: false, color: 'rgb(50, 80, 255)' },
    {name: 'Computer Science', nextClass: 'Today, 8:45 AM', id: 5, join: true, color: 'rgb(71, 63, 151)' },
    {name: 'Biology', nextClass: 'Today, 8:45 AM', id: 6 , join: false, color: 'rgb(71, 63, 151)'}
];


export const Notifications = [
    { title : 'Pabel commented on Trigonometry homework', time:'4h', read:true, type: 'Teacher', id: 1 },
    { title : 'Trigonometry homework marked', time:'5h', read:false, type: 'Class', id: 2 },
    { title : 'Mock exam starts from 1st August', time:'6h', read:false, type: 'School', id: 3 },
]