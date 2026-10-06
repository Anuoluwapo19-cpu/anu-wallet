import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import AuthProvider from '../context/AuthProvider';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

export default App;
