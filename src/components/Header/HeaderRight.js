import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'shared-hooks/useOnClickOutside';
import HeaderItems from './HeaderItems';

export default function HeaderRight() {
  const menuRef = useRef(null);
  const [isMobileMenu, setMobileMenu] = useState(false);

  const onMobileMenu = (isShow) => {
    if (!isShow) {
      menuRef.current.className = `${menuRef.current.className} animate-hide-right-left -right-full`;
      setTimeout(() => {
        setMobileMenu(isShow);
      }, 210);
    } else setMobileMenu(isShow);
  };

  useOnClickOutside(menuRef, () => {
    onMobileMenu(false);
  });

  return (
    <>
      <div
        onClick={() => onMobileMenu(!isMobileMenu)}
        className="flex items-center justify-center cursor-pointer hover:bg-blue-gray-200 p-2 rounded-xl"
      >
        <HiMenu className="text-gray-600 w-8 h-8" />
      </div>
      {isMobileMenu && (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-opacity-40 bg-black">
          <div
            ref={menuRef}
            className="absolute animate-show-right-left top-0 right-0 h-screen w-2/3 bg-white shadow px-8"
          >
            <div className="mt-6 mb-4 flex justify-end">
              <IoClose
                onClick={() => onMobileMenu(false)}
                className="w-12 h-12 p-2 hover:bg-blue-gray-200 rounded-xl cursor"
              />
            </div>
            <div>
              <HeaderItems />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
