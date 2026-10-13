import  { useContext, useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaUser } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import { IoLogOut } from 'react-icons/io5';
import { RiUserAddFill } from 'react-icons/ri';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import { TbLogout, TbLogout2 } from 'react-icons/tb';
import { AuthContext } from '../Context/AuthContext';


export default function SideBar() {
  let {userData}:any=useContext(AuthContext) 
let[collapsed,setCollapsed]=useState(false)

let toggleColapse=()=>{
  setCollapsed(!collapsed)
}




  // let[collapsed,setCollapsed]=useState(false)

  // let toggleColapse=()=>{
  //   setCollapsed(!collapsed)
  // }
  return (
    <div className='vh-100 sideBar_container'>
      <Sidebar collapsed={collapsed} className='vh-100' >
        {collapsed? <TbLogout size={25} className='ms-2' onClick={toggleColapse} /> : <TbLogout2 size={25} className='ms-2' onClick={toggleColapse} />}
        
        <div className='text-center'>
          <img src={userData?.image} alt="" className='w-50 rounded-circle my-3' />
           <h5 className='fw-bold'>{userData?.firstName}</h5>
           <h6 className='text-warning'>Admin</h6>
        </div>
        <Menu >
          <MenuItem icon={<IoIosHome />} component={<Link to="/dashbourd" />}> Home</MenuItem>
          <MenuItem icon={<FaUser />} component={<Link to="/dashbourd/users" />}> Users </MenuItem>
          <MenuItem icon={<RiUserAddFill />} component={<Link to="/dashbourd/add_user" />}> Add User</MenuItem>
          <MenuItem icon={<CgProfile />} component={<Link to="/dashbourd/profile" />}> Profile</MenuItem>
          <MenuItem icon={<IoLogOut />} > Logout</MenuItem>
        </Menu>
      </Sidebar>;

    </div>
    // <div className='vh-100 sideBar_container  '>
    //   <Sidebar collapsed={collapsed} className='vh-100 '>

    //     {collapsed?<TbLogout size={25} className='ms-2' onClick={toggleColapse}/>:<TbLogout2 size={25} className='ms-2' onClick={toggleColapse}/>}
    //     <div className='text-center'>
    //       <img src={photo} alt="" className='w-50 rounded-circle my-3' />
    //       <h5>Ahmed Sakr</h5>
    //       <h6 className='text-warning'>Admin</h6>
    //     </div>
    //     <Menu

    //     >
    //       <MenuItem icon={<IoIosHome />} component={<Link to="/dashbourd" />}> Home</MenuItem>
    //       <MenuItem icon={<FaUser />} component={<Link to="/dashbourd/users" />}> Users </MenuItem>
    //       <MenuItem icon={<RiUserAddFill />} component={<Link to="/dashbourd/add_user" />}> Add User</MenuItem>
    //       <MenuItem icon={<CgProfile />} component={<Link to="/dashbourd/profile" />}> Profile</MenuItem>
    //       <MenuItem icon={<IoLogOut />} > Logout</MenuItem>
    //     </Menu>
    //   </Sidebar>;
    // </div>
  )
}
