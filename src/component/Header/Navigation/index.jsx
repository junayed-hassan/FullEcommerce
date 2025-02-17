import { Button } from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Navigation() {
    return (
        <nav>
            <div className="container flex items-center justify-end">
                <div className="col_1 w-[30%]">
                    <Button className="!text-black gap-2"><MenuOpenIcon/> Shop By Categories</Button>
                </div>
                <div className="col_2 w-[70%]">
                
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
