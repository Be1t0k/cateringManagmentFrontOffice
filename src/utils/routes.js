import Index from '../pages/Index';
import GamePage from '../pages/GamePage';
import Account from '../pages/Account';
import ContentMain from '../components/ContentMain/ContentMain';
import AddStaff from '../pages/AddStaff';
import Dishes from '../pages/Dishes';


export const publicRoutes = [
    {
        name: GamePage,
        path: '/games/:id'
    },
    {
        name: ContentMain,
        path: '/home'
    },
    {
        name: AddStaff,
        path: '/addstaff'
    },
    {
        name: Dishes,
        path: '/dishes'
    }
];
export const privateRoutes = [
    
    {
        name: Account,
        path: '/staff'
    }
];