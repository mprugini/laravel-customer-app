import Users from './components/Users';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Users
        },
        {
            path: '/user/:id',
            name: 'User',
            props: true,
            component: EditUser
        },
        {
            path: '/add',
            component: AddUser
        }
    ]
}
