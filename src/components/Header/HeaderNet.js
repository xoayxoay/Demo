import { useRef, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { IoCaretDown, IoEllipse } from 'react-icons/io5';
import { useOnClickOutside } from 'shared-hooks/useOnClickOutside';
import { useScreen } from 'shared-hooks/useScreen';
import { APP_NAME_EXPLORER, NODE_ENV } from 'config';
import routes from 'containers/App/routes';

export default function HeaderLeft() {
  const screen = useScreen();
  const netRef = useRef(null);
  const [isNetDropdown, setNetDropdown] = useState(false);

  useOnClickOutside(netRef, () => {
    setNetDropdown(false);
  });

  const onNetDropdown = () => {
    setNetDropdown(!isNetDropdown);
  };

  return !screen.isMobile ? (
    <div className="relative">
      <div
        ref={netRef}
        onClick={onNetDropdown}
        className={classNames(
          'relative flex items-center lg:hover:cursor-pointer justify-center hover:bg-blue-gray-200 rounded-lg py-3 px-3 text-base font-500',
          {
            'outline-solid-sky-200': isNetDropdown,
          },
        )}
      >
        <IoCaretDown className="text-lg text-gray-800" />
      </div>
      {isNetDropdown && (
        <div className="z-10 animate-show absolute top-14 -right-6  bg-white min-w-max p-2 shadow rounded-lg border border-blue-gray-200">
          <div className="lg:hover:bg-blue-gray-100 px-4 py-2 rounded-lg flex items-center">
            <IoEllipse className="text-sm" />
            <Link
              to={routes.HOME}
              className="flex items-center ml-4 text-gray-700 font-500"
            >
              {`${APP_NAME_EXPLORER} ${
                NODE_ENV === 'production' ? 'Testnet' : 'Betanet'
              }`}
            </Link>
          </div>
        </div>
      )}
    </div>
  ) : (
    ''
  );
}
