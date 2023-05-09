import {Link, Outlet} from 'react-router-dom'

function Layout(){


    return(
        <>
            <nav className="flex justify-between text-2xl py-8 px-4 bg-slate-400">
                <Link to="/">RHONPESA || Dashboard</Link>
                <Link to="/about">Our story</Link>
                <Link to="/members">Members</Link>
            </nav>
            <Outlet/>
        </>
    )
}
export default Layout;