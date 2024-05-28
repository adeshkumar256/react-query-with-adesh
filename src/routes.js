import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UsersRQPage from './components/UsersRQ.page';
import PollingUsersPage from './components/PollingUsers.page';
import FetchingOnClickPage from './components/FetchingOnClick.page';
import CustomQueryHookPage from './components/CustomQueryHook.page';
import QueryByIdPage from './components/QueryById.page';
import DependentQueriesPage from './components/DependentQueries.page';
import PaginatedQueriesPage from './components/PaginatedQueries.page';
import HomePage from './components/Home.page';
import UsersPage from './components/Users.page';

export default function SitesRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/users' element={<UsersPage />} />
      <Route path='/usersrq' element={<UsersRQPage />} />
      <Route path='/polling' element={<PollingUsersPage />} />
      <Route path='/fetchonclick' element={<FetchingOnClickPage />} />
      <Route path='/custom-query-hook' element={<CustomQueryHookPage />} />
      <Route path='/paginated-query' element={<PaginatedQueriesPage userId={1} />} />
      <Route path='/dependent-query' element={<DependentQueriesPage userId={1} />} />
      <Route path='/users/:id' element={<QueryByIdPage />} />
    </Routes>
  )
}
