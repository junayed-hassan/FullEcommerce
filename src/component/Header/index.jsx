import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import CompareIcon from '@mui/icons-material/Compare';
import { red } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";

const color = red[500];

function Header() {
    return (
        <header>
            <div className='top-strip py-2 border-y-1 border-gray-200'>
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

            <div className="header py-4 border-b-1 border-gray-200">
                <div className="container flex items-center justify-between">
                    <div className="w-[25%]">
                        <Link to={"/"}> <img src="/logo.jpg" alt="" /></Link>
                    </div>
                    <div className="w-[45%]">
                        <Search />
                    </div>
                    <div className="w-[30%] flex items-center pl-7">
                        <ul className="flex items-center justify-end w-full gap-3">
                            <li className="">
                                <Link className="hover:text-red-500 transition-all text-[15px] font-medium" to="/login">Login</Link> |  &nbsp;
                                <Link className="hover:text-red-500 transition-all text-[15px] font-medium" to="/register">Register</Link>
                            </li>
                            <li>
                                <Tooltip placement="top" title="Compare">
                                    <Badge badgeContent={4} color="primary">
                                        <CompareIcon color="action" />
                                    </Badge>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip placement="top" title="Wishlist" >
                                    <Badge badgeContent={4} color="primary">
                                        <HeartBrokenIcon color="action" />
                                    </Badge>
                                </Tooltip>

                            </li>
                            <li>
                                <Tooltip placement="top" title="Cart" >
                                    <Badge badgeContent={4} color="primary">
                                        <ShoppingCartIcon color="action" />
                                    </Badge>
                                </Tooltip>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Navigation />
        </header>
    )
};

export default Header;
