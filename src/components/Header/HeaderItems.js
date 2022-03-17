import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { useScreen } from 'shared-hooks/useScreen';
import { windowScroll } from 'utils';
import dataItems from './data/items';

export default function HeaderItems() {
  const { pathname } = useLocation();
  const screen = useScreen();
  const items = dataItems({ screen });

  const scroll = (lid) => {
    windowScroll(lid);
  };

  return (
    <div className="flex items-center justify-center list-none <sm:flex-col <sm:justify-start <sm:items-start <sm:w-full">
      {items.map((item) => {
        const isActive = pathname === item.route;
        return (
          item.isShow && (
            <div
              className={classNames(
                'px-3 py-2 <md:my-2 md:mx-3 font-medium text-gray-700 relative cursor-pointer transition-colors hover:text-primary hover:bg-blue-gray-200 rounded-lg <sm:w-full',
                {
                  '!text-primary bg-blue-gray-200': isActive,
                },
              )}
              key={item.label}
              {...(item.lid ? { onClick: () => scroll(item.lid) } : {})}
            >
              {item.route ? (
                <Link to={item.route}>{item.label}</Link>
              ) : (
                <a href={item.link}>{item.label}</a>
              )}
            </div>
          )
        );
      })}
    </div>
  );
}
