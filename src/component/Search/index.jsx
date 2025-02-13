import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="w-full h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input type="text" placeholder="Search for products..." className="w-full h-[35px] focus:outline-none bg-transparent p-2 text-[15px] placeholder-[#1f1f1f]" />
      <Button className="!absolute top-[8px] right-[7px] !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black" ><FaSearch className='text-[#4e4e4e] text-[22px]' /></Button>
    </div>
  )
}

export default Search;
