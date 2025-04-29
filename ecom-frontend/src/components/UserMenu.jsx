import React from "react";
import { MdLogout } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import BackDrop from "./BackDrop";
import { logOutUser } from "../store/actions";


const UserMenu = () => {
   
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const { user } = useSelector((state) => state.auth);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOutHandler = () => {
    dispatch(logOutUser(navigate));
  }  

  return (
    <div>
      <div className="sm:border-[1px] sm:border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition duration-150 text-slate-700"
        onClick={handleClick}
      >
        <Avatar alt="Menu" />
      </div>
      <Menu
        sx={{ width:"400px" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: {width : 160 },
        }}
      >
        <Link to={"/profile"}>
            <MenuItem className="flex gap-2"  
                onClick={handleClose}>
                    <BiUser className='text-xl' />
                    <span className="font-bold text-[16px] mt-1 truncate">
                        {user?.username}
                    </span>
            </MenuItem>
        </Link>
        <Link to={"/profile/orders"}>
            <MenuItem className="flex gap-2"  
                onClick={handleClose}>
                   <FaShoppingCart size={25} className='text-xl' />
                    <span className="font-semibold ">
                       Order
                    </span>
            </MenuItem>
        </Link>
       
            <MenuItem className="flex gap-2 "  
                onClick = { logOutHandler } >
                    <div className="font-semibold w-full flex gap-2 items-center bg-button-gradient px-4 py-1 text-white rounded-sm">
                        <MdLogout size={20} className='text-xl' />
                         <span className="font-semibold ">
                          Logout
                         </span>
                    </div>
            </MenuItem>
      </Menu>

      {open && <BackDrop />}

    </div>
  );
}

export default UserMenu;
