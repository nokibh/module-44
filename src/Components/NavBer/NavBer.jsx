import { useState } from 'react';
import Link from '../Link/Link';
import { BsFillMenuButtonFill } from 'react-icons/bs';
import { MdRestaurantMenu } from 'react-icons/md';
const NavBer = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '*', name: 'NotFound' },
  ];

  return (
    <nav>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <MdRestaurantMenu className="text-2xl"></MdRestaurantMenu>
        ) : (
          <BsFillMenuButtonFill className="text-2xl "></BsFillMenuButtonFill>
        )}
      </div>
      <ul className="md:flex">
        {routes.map(route => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBer;
