import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/navBar/NavBar';
import { HomePage } from './components/HomePage';
import { BooksPage } from './components/BooksPage';
import { TasksPage } from './components/TasksPage';

export const App = () => {

    return (
        <>
            <NavBar />
            <hr />

            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/books'} element={<BooksPage />} />
                <Route path={'/tasks'} element={<TasksPage />} />
                <Route path={'/*'} element={<Navigate to={'/books'} />} />
            </Routes>
        </>
    )
}
