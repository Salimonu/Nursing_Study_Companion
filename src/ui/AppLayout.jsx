import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="min-h-90">
      <Outlet />
    </div>
  );
}

export default AppLayout;
