import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const NavBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0); 
  const [boxPosition, setBoxPosition] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });  
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);  

  const items = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contect', href: '/contect' },
  ];

  useEffect(() => {
    // Calculate the position and width of the active item to move the border box
    const currentItem = itemsRef.current[activeItem];
    if (currentItem) {
      const { offsetLeft, offsetWidth } = currentItem;
      setBoxPosition({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeItem]);

  return (
    <div className="relative bg-custom-purple h-16 animate-slideDown ">
      <ul className="flex justify-end items-center h-full relative">
        {/* Moving border box */}
        <div
          className="absolute h-12 border-4 border-gray-200 transition-all duration-300 ease-in-out rounded-md"
          style={{ left: `${boxPosition.left}px`, width: `${boxPosition.width}px` }}
        ></div>

        {items.map((item, index) => (
          <li
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el; // Assign the element to the ref array
            }} // No return value
            className={`text-white mx-2 px-4 cursor-pointer h-full flex items-center justify-center relative`}
            onMouseEnter={() => setActiveItem(index)} // Update active item on hover
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
