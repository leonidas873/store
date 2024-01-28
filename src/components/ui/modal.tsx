/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/function-component-definition */
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { twMerge } from 'tailwind-merge';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  closeButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  closeButton = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300); // Timeout duration should match the CSS transition
  };

  const modalContent = (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 overflow-auto flex items-center justify-center ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={twMerge(
          clsx(
            'bg-white p-8 m-4 max-w-lg w-full rounded-lg shadow-lg transition-transform duration-300',
            className,
          ),
        )}
        style={{
          transform: isAnimating ? 'translateY(0)' : 'translateY(-100vh)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {closeButton && (
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{title}</span>
            <button
              type="button"
              onClick={handleClose}
              className="focus:outline-none"
            >
              X
            </button>
          </div>
        )}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );

  return isOpen || isAnimating
    ? ReactDOM.createPortal(
        modalContent,
        document.getElementById('modal-root')!,
      )
    : null;
};

export default Modal;
