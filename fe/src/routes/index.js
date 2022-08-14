import { lazy } from 'react';
import Layout from '../layout/User/Layout';
const HomePage = lazy(() => import('../pages/User/HomePage'));

const routes = [
    {
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
            }
        ]
    }
]

export { routes };
