import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const SideBar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  return (
    <div>SideBar</div>
  )
}

export default SideBar