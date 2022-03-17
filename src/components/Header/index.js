import { useScreen } from 'shared-hooks/useScreen';
import HeaderLeft from './HeaderLeft';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';

export default function Header() {
  const screen = useScreen();
  return (
    <div className="shadow border:(bottom) border-blue-gray-200">
      <div className="container mx-auto h-16 lg:h-20 flex items-center <lg:justify-between">
        <HeaderLeft />
        {!screen.isMobile && <HeaderCenter />}
        {screen.isMobile && <HeaderRight />}
      </div>
    </div>
  );
}
