import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Demo Proactiva</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>HOME</p>
          <Link to='/'>
            <li>
              <DashboardIcon className='icon' />
              <span>Panel de Control</span>
            </li>
          </Link>

          <p className='title'>LISTAS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className='icon' />
              <span>Usuarios</span>
            </li>
          </Link>
          <p className='title'>USER</p>
          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <Link to='/login'>
            <li>
              <ExitToAppIcon className='icon' />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
