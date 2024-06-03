import React ,{useState , useContext} from 'react'
import './header.css';
import navListData from '../data/navListData';
import NavListItem from './NavListItem';
import { useLocation , Link ,useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { auth } from '../firebase.js'; 
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
  const [open , setOpen] = useState(false);
  const [navList , setNavList] = useState(navListData);
  const location = useLocation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { setSelectedCar , likedCars } = useContext(AppContext);

  const handleToggleMenu =()=> {
    setOpen(!open);
  };

  const handleNavOnclick = id =>{
    const newNavList = navList.map(nav =>{
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return  nav;
    });
    setNavList(newNavList);
  };
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setSelectedCar(null);  // Reset any selected car on logout
      navigate('/login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const handleNavigateToLikedCars = () => {
    navigate('/liked-cars');
  };
  
  return (
    <header>
        <Link 
          to="/"
          className="logo" 
          style={location.pathname === "/" 
          ? {color : '#000000'} 
          : {color :'#ffffff'}
        }> {/* title color variation*/}
          CZ-CarHub
        </Link>
        <div>
          <div className="like" onClick={handleNavigateToLikedCars}>
            <i className="bi bi-heart-fill"></i>
            <span className='likeNumbers'>{likedCars.length}</span>
          </div>
          <a href="#" className="menu" onClick={handleToggleMenu}>
            {open ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
          </a>
        </div>
        <ul className={`nav ${open ? 'active': undefined}`}>{/*conditional classname dial l menu appearance  */}
          {navList.map(nav => {
            if (nav.authRequired && !user) return null; // Skip if auth is required and user is not logged in
            if (!nav.authRequired && user && (nav.name === 'Login' || nav.name === 'Register')) return null; // Skip if user is logged in and link is for login or register
  
            if (nav.name === 'Logout') {
              return (
                <li key={nav._id}>
                  <button className="nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              );
            }
  
            return <NavListItem key={nav._id} nav={nav} navOnclick={handleNavOnclick} />;
  
          })}
        </ul>
    </header>
  )
}

export default Header