import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='app-wrapper'>
      <div className='app-container'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
