import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className='top-strip py-2 border-t-1 border-b-1 border-[#0001]'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col-1 w-[50%]'>
                            <p className='text-sm font-medium'>Get up to 50% off new season styles. limited time only</p>
                        </div>

                        <div className='col-2 flex items-center justify-end'>
                            <ul>
                                <li>
                                    <Link to="login"></Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
