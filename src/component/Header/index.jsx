import { Link } from "react-router-dom";
import Search from "../Search";

function Header() {
    return (
        <header>
            <div className='top-strip py-2 border-y-1 border-gray-250'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col-1 w-[50%]'>
                            <p className='text-xs font-medium'>Get up to 50% off new season styles. limited time only</p>
                        </div>

                        <div className='col-2 flex items-center justify-end'>
                            <ul className="flex items-center gap-3">
                                <li className="">
                                    <Link to="/help-center" className="text-sm font-medium hover:text-rose-400 transition">Help Center</Link>
                                </li>
                                <li className="">
                                    <Link to="/order-tracking" className="text-sm font-medium hover:text-rose-400 transition">Order Tracking</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="header py-3">
                <div className="container flex items-center justify-between">
                    <div className="w-[25%]">
                        <Link to={"/"}> <img src="/logo.jpg" alt="" /></Link>
                    </div>
                    <div className="w-[45%]">
                        <Search/>
                    </div>
                    <div className="w-[30%]">ok</div>
                </div>
            </div>

        </header>
    )
};

export default Header;
