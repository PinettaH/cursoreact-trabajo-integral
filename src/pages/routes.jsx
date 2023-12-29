import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./layouts/NotFound";
import Dashboard from "./dashboard/Dashboard";
import Cursos from "./cursos/Cursos";
import { FetchCursos } from "./fetchCursos/fetchCursos";
import { Maps } from "../components/Maps";

const Routes = () => {
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: '', element: <Dashboard /> },
                { path: 'cursos', element: <Cursos /> },
                { path: 'fetchCursos', element: <FetchCursos /> },

            ]
        },
        { path: '/404', element: <NotFound /> },
        { path: '/maps', element: <Maps /> },
        { path: '*', element: <Navigate to="404" replace /> }
    ])
}

export default Routes;