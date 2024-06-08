import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { PageNotFound } from 'pages/PageNotFound';

export enum AppRoutes {
    MAIN = 'main',
    // must be last
    PAGE_NOT_FOUND = 'page_not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    // must be last
    [AppRoutes.PAGE_NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,

    },
    // must be last
    [AppRoutes.PAGE_NOT_FOUND]: {
        path: RoutePath.page_not_found,
        element: <PageNotFound />,
    },
};