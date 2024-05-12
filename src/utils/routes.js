import Account from '../pages/Account';
import ContentMain from '../components/ContentMain/ContentMain';
import AddStaff from '../pages/AddStaff';
import Dishes from '../pages/Dishes';
import DishPage from '../pages/DishPage';
import DishStopList from '../pages/DishStopList';
import Orders from '../pages/Orders';
import CreateDish from '../pages/CreateDish';
import NotFoundPage from '../pages/NotFoundPage';


export const publicRoutes = [
    {
        name: NotFoundPage,
        path: "*"
    }
];
export const privateRoutes = [
    
    {
        name: Account,
        path: '/staff'
    },
    {
        name: Orders,
        path: '/orders'
    },
    {
        name: DishPage,
        path: '/dish/:id'
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
    },
    {
        name: DishStopList,
        path: '/stoplist'
    }
];