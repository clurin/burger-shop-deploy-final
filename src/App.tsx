import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AppHeader from './features/UI-components/AppHeader/AppHeader';
import DesignerPage from './pages/DesignerPage';
import ProfilePage from './pages/ProfilePage';
import OrderListPage from './pages/OrderListPage';
import RegistrationPage from './pages/RegistrationPage';
import LogInPage from './pages/LogInPage';
import InfoModal from './features/Ingredients/components/modal/InfoModal';
import ResetPasswordForm from './pages/ResetPasswordForm';
import PrivateOverlay from './utils/private/PrivateOverlay';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path='/designer' element={<DesignerPage />} />
        <Route path="/" element={<Navigate to="/designer" replace />} />
        <Route path='/orderlist' element={
          <PrivateOverlay>
            <OrderListPage />
          </PrivateOverlay>
        } />
        <Route path='/profile' element={
          <PrivateOverlay>
            <ProfilePage />
          </PrivateOverlay>
        } />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/reset_password/:reset_token?' element={<ResetPasswordForm />} />
      </Routes>
      <InfoModal />
    </div>
  );
}

export default App;
