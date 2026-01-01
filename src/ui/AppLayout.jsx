import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="min-h-90 flex flex-col justify-center">
      <Outlet />
    </div>
  );
}

export default AppLayout;
