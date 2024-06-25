import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { PageNotFound } from 'pages/PageNotFound';
import { NewsPage } from 'pages/NewsPage';
import { SearchPage } from 'pages/SearchPage';
import { PetPage } from 'pages/PetPage';

export enum AppRoutes {
    MAIN = 'main',
    NEWS = 'news',
    SEARCH = 'search',
    PETS = 'pet',
    PAGE_NOT_FOUND = 'page_not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NEWS]: '/news',
    [AppRoutes.SEARCH]: '/search',
    [AppRoutes.PETS]: '/pet/:id',
    [AppRoutes.PAGE_NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.NEWS]: {
        path: RoutePath.news,
        element: <NewsPage />,
    },
    [AppRoutes.SEARCH]: {
        path: RoutePath.search,
        element: <SearchPage />,
    },
    [AppRoutes.PETS]: {
        path: RoutePath.pet,
        element: <PetPage />,
    },
    [AppRoutes.PAGE_NOT_FOUND]: {
        path: RoutePath.page_not_found,
        element: <PageNotFound />,
    },
};