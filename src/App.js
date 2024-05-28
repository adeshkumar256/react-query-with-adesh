import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'bootstrap/dist/css/bootstrap.min.css';
import SitesRoutes from './routes';
import Header from './components/common/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/common/Footer';

function App() {
  const queryClient = new QueryClient()
  return (

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Container style={{ overflow: 'auto', padding: '1rem' }}>
          <SitesRoutes />
        </Container>
        <Footer />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
