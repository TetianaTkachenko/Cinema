import { Link, NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) => {
    return (
        <div className={style.flexBox}>
            <div className={style.header}>
                <Link to='/movies'
                    className={style.logo}>
                    React Cinema
                </Link>
                <NavLink
                    to='/movies'
                    className={({ isActive }) =>
                    (isActive
                        ? style.selected
                        : style.unselected)
                    }
                >
                    Movies
                </NavLink>
                <NavLink
                    to='/trending'
                    className={({ isActive }) =>
                    (isActive
                        ? style.selected
                        : style.unselected)
                    }
                >
                    Trending
                </NavLink>
                <NavLink
                    to='/persons'
                    className={({ isActive }) =>
                    (isActive
                        ? style.selected
                        : style.unselected)
                    }
                >
                    Persons
                </NavLink>
            </div>
        </div>
    )
}
export default Header;
