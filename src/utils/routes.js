import Index from '../pages/Index';
import GamePage from '../pages/GamePage';
import Account from '../pages/Account';
import ContentMain from '../components/ContentMain/ContentMain';


export const publicRoutes = [
    {
        name: GamePage,
        path: '/games/:id'
    },
    {
        name: ContentMain,
        path: '/home'
    }
];
export const privateRoutes = [
    
    {
        name: Account,
        path: '/account'
    }
];