import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

export default App;
