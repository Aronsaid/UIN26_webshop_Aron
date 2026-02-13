import {Link, Outlet} from 'react-router-dom'
export default function CategoryLayout({children}) {
    return(
        <>
        <nav className='Category-Layout'>
            <Link to="sko">Sko</Link>
            <Link to="bukse">Bukse</Link>
            <Link to="topp">Topp</Link>
            <Link to="kjole">Kjole</Link>
            <Link to="skjorter">Skjorter</Link>
        </nav>
        {children}
        <Outlet />
        </>
    )
}