import { Link } from 'react-router-dom';
import { APP_NAME, APP_TYPE } from 'config';
import routes from 'containers/App/routes';
import LogoImage from 'assets/images/Logo.png';
import HeaderNet from './HeaderNet';

export default function HeaderLeft() {
  return (
    <div className="mr-5 lg:mr-20">
      <div className="flex items-center">
        <Link to={routes.HOME} className="flex items-center">
          <img
            src={LogoImage}
            className="w-14 h-14 lg:w-16 lg:h-16 object-cover mr-1"
            alt="logo"
          />
          <div className="flex items-end mr-3">
            <h5 className="text-gray-700 font-medium text-xl lg:text-2xl">
              {APP_NAME}
            </h5>
          </div>
        </Link>
        <div className="bg-gray-200 rounded-lg py-1 px-3 text-xs font-500 mr-3">
          {APP_TYPE}
        </div>
        <HeaderNet />
      </div>
    </div>
  );
}
