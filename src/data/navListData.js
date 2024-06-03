
const navListData = [
    {
        _id: 1,
        Link: '/',
        name: 'home',
        active: true,
    },
    {
        _id: 2,
        Link: '/vehicles',
        name: 'Vehicles',
        active: false,
    },
    {
        _id: 3,
        Link: '/MotoSport',
        name: 'MotoSport',
        active: false,
    },
    {
        _id: 4,
        Link: '/profile',
        name: 'Profile',
        authRequired: true
    },
    {
        _id: 5,
        Link: '/login',
        name: 'Login',
        authRequired: false
    },
    {
        _id: 6,
        Link: '/register',
        name: 'Register',
        authRequired: false
    },
    {
        _id: 7,
        Link: '/logout',
        name: 'Logout',
        authRequired: true
    }

    
];
    
export default navListData;