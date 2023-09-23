import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const clearStorage = () => {
      localStorage.clear()
    }
    return (
        <>
            <div className=" px-2 sm:px-4 pt-7 pb-2 dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-16 border-b border-b-black pb-2">
                    <div>
                        <a href="mailto:info@upskillconsultancy.com">info@upskillconsultancy.com</a>
                        <span className="ml-6">(973) 681-8296</span>
                    </div>

                    <div className="flex">
                        <svg className="w-8" data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><g><path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path></g></svg>
                        <button className="mx-2">Log In</button>
                    </div>
                </div>
            </div>
            <nav className=" border-gray-200 px-2 sm:px-4 py-5 dark:bg-gray-800">

                <div className="container flex flex-wrap justify-between items-center mx-16">
                        <Link to="/" className="flex items-center">
                            <img src="https://static.wixstatic.com/media/b6a79c_82948a8628fe4186b288a089253a65d1~mv2.png/v1/fill/w_112,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/only%20logo_edited.png" className="mr-3 h-12 md:h-16" alt="The Portal" />
                            <div>
                                <p>
                                    <span className="text-xl font-bold">UPSKILL CONSULTANCY <br/></span >
                                    <span className="font-bold">Empowering People and Company in Tech</span>
                                </p>
                            </div>
                        </Link>
                    <button type="button"
                        className="hover:bg-gray-100 hover:text-primary inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setToggle(!toggle)}>
                        {toggle ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        )}

                    </button>
                    <div className={`${toggle ? 'block' : 'hidden'} w-full md:block md:w-auto z-20`}>
                        <ul
                            className="flex flex-col mt-4 md:flex-row items-stretch md:items-center md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <Link to="/" className="menu-item">Home</Link>
                                </li>
                            <li>
                                <Link to="/" className="menu-item">Courses</Link>
                            </li>
                            <li>
                                <Link to="/" className="menu-item">Join Training</Link>
                            </li>
                            <li>
                                <Link to="/" className="menu-item">Student Portal</Link>
                            </li>
                            <li>
                                <Link to="/" className="menu-item">Student Portal</Link>
                            </li>
                            <li>
                                <Link to="/" className="menu-item">More</Link>
                            </li>

                            {/*<li>*/}
                            {/*    <Link to="/" className="menu-item">Contact</Link>*/}
                            {/*</li>*/}

                            {/*<li>*/}
                            {/*    <a href="/"*/}
                            {/*        className="block w-full py-1 px-6 rounded bg-white transition border-[1px] border-white  border-solid">*/}
                            {/*        <span className="block text-center text-primary font-semibold lg:text-base">Admin Login</span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {token?
                                <li>
                                    <a href="/" onClick={clearStorage}
                                       className="block w-full py-1 px-6 rounded bg-white transition border-[1px] border-white  border-solid">
                                        <span className="block text-center text-primary font-semibold lg:text-base">Logout</span>
                                    </a>
                                </li>: ""
                            }
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default NavBar