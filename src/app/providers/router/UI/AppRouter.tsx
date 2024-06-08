import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Suspense fallback="">
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    path={path}
                    key={path}
                    element={
                        <div className="page-wrapper">{element}</div>
                    }
                />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;