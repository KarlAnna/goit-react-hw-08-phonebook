import { NavLink, Outlet } from "react-router-dom"
import { Suspense } from "react"

export const Navigation = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='register'>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to='login'>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='contacts'>Contacts</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    )
}