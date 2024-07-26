import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import Sidebar from './PatientSidebar';


const Hamburger2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="md:hidden absolute z-50 p-4 text-2xl right-5 text-blue-200"  onClick={() => setOpen(!open)}>
        {open ? <MdClose /> : <MdMenu />}
      </div>
      <nav className="hidden md:flex">
        <Sidebar  />
           </nav>
      <nav className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
        <Sidebar  />
          </nav>
    </div>
  );
};
export default Hamburger2;
