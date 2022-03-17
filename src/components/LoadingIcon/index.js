import PropTypes from 'prop-types';
import Loading from 'assets/images/Loading.gif';

function LoadingIcon({ className }) {
  return <img src={Loading} alt="button-loading" className={className} />;
}

LoadingIcon.defaultProps = {
  className: 'w-12 h-12 text-center my-8 mx-auto',
};

LoadingIcon.propTypes = {
  className: PropTypes.string,
};

export default LoadingIcon;
