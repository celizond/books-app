import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-2 rounded'>
            <NavLink className='navbar-brand' to={'/'} >Book App</NavLink>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to={'/'} >Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to={'/about'} >About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to={'/login'} >Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
