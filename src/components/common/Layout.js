import {Link} from 'react-router-dom'

const Layout = props => {
    return(
    <>
        <nav>
            <div className="nav-wrapper">
                <ul className="right hide-on-med-and-down">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/starships'>Starships</Link></li>
                </ul>
            </div>
        </nav>
        <div>
            {props.children}
        </div>
    </>
    )
}

export default Layout