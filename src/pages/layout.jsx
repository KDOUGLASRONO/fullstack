import {Link, Outlet} from 'react-router-dom'

function Layout(){


    return(
        <>
            <nav className="flex justify-between text-2xl py-8 px-4 bg-violet-400 text-white">
                <Link to="/">RHONPESA || Dashboard</Link>
                <Link to="/about">Our story</Link>
                <Link to="/members">Members</Link>
            </nav>
            <Outlet/>
        </>
    )
}
export default Layout;