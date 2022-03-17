import PropTypes from 'prop-types';
import classNames from 'classnames';
import BackgroundImage from 'assets/images/Background.jpg';
import BackgroundMobileImage from 'assets/images/BackgroundMobile.jpg';
import { useScreen } from 'shared-hooks/useScreen';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Layout({ children, spacing, isShowBackground }) {
  const screen = useScreen();
  return (
    <div>
      <Header />
      <div
        className={classNames('bg-center', {
          'bg-contain': screen.isMobile,
          'bg-cover': !screen.isMobile,
        })}
        style={{
          backgroundImage: isShowBackground
            ? `url("${
                screen.isMobile ? BackgroundMobileImage : BackgroundImage
              }")`
            : '',
        }}
      >
        <div
          className={classNames('container mx-auto relative', {
            'ph-1': spacing,
            'pv-1': spacing,
          })}
        >
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.bool,
  isShowBackground: PropTypes.bool,
};
