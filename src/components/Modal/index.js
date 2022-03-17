import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { BiX } from 'react-icons/bi';
import classNames from 'classnames';

const Modal = (props) => {
  const [mounted, setMounted] = useState(false);

  const {
    children,
    isVisible,
    onBackdropClick,
    size,
    position,
    headerText,
    onClickClose,
    containerClass,
    headerPosition,
  } = props;

  useEffect(() => {
    setMounted(true);

    return () => {
      onBackdropClick();
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      return true;
    }

    document.body.style.overflow = 'unset';
  }, [isVisible]);

  return (
    mounted &&
    ReactDOM.createPortal(
      isVisible && (
        <>
          <div
            className={classNames(
              'fixed left-0 right-0 w-150 mx-auto my-auto h-auto max-h-95vh bg-white rounded-lg z-97 <sm:(w-11/12) flex flex-col shadow',
              {
                'w-110': size === 'sm',
                'w-180': size === 'lg',
                'top-5 <sm:top-5': position === 'top',
                'top-1/4 <sm:translate-y-1/2': position === 'center',
              },
            )}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: {
                duration: 0.2,
              },
            }}
          >
            {headerText ? (
              <div
                className={classNames('px-4 py-3 border-b border-gray-500', {
                  'text-center': headerPosition === 'center',
                })}
              >
                <h5 className="text-white text-lg font-semibold">
                  {headerText}
                </h5>
              </div>
            ) : (
              <></>
            )}
            <div
              className={classNames(
                'px-4 py-4 overflow-x-hidden overflow-y-auto no-scrollbar flex-1',
                containerClass,
              )}
            >
              {children}
            </div>
            <button
              type="button"
              className="w-7.5 h-7.5 rounded-full bg-blue-gray-200 border-none shadow-none absolute right-3 top-2.5 flex items-center justify-center cursor-pointer transition hover:bg-gray-200 focus:outline-none"
              onClick={onClickClose}
            >
              <BiX className="w-6 h-6" />
            </button>
          </div>
          <div
            className="fixed left-0 top-0 w-full h-screen z-96 bg-black bg-opacity-50"
            onClick={onBackdropClick}
            id="modal-overlay"
          />
        </>
      ),
      document.getElementById('root-portal'),
    )
  );
};

Modal.defaultProps = {
  size: 'md',
  position: 'center',
  headerPosition: 'left',
  headerText: null,
  onBackdropClick: () => {},
  containerClass: '',
};

Modal.propTypes = {
  children: PropTypes.any,
  // disableClickOutsideBackdrop: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  position: PropTypes.oneOf(['top', 'center', 'bottom']),
  headerText: PropTypes.string,
  headerPosition: PropTypes.oneOf(['left', 'center']),
  onBackdropClick: PropTypes.func,
  onClickClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  containerClass: PropTypes.string,
};

export default Modal;
