import './App.css';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home.page';
import UsersPage from './components/Users.page';
import UserDetailsPage from './components/UserDetails.page';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import UsersRQPage from './components/UsersRQ.page';
import PollingUsersPage from './components/PollingUsers.page';
import FetchingOnClickPage from './components/FetchingOnClick.page';
import CustomQueryHookPage from './components/CustomQueryHook.page';
import { tabs } from './static-data/tabs';

function App() {
  const queryClient = new QueryClient()
  return (

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <nav>
          <ul>
            {
              tabs.map(tab => (
                <li key={tab.label}>
                  <Link to={tab.id}>{tab.label}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/usersrq' element={<UsersRQPage />} />
          <Route path='/polling' element={<PollingUsersPage />} />
          <Route path='/fetchonclick' element={<FetchingOnClickPage />} />
          <Route path='/custom-query-hook' element={<CustomQueryHookPage />} />
          <Route path='/users/:id' element={<UserDetailsPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
