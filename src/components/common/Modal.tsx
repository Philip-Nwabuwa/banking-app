import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  buttonText: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  buttonText,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <div className="modal-backdrop" style={{ display: 'block' }}>
          <div
            className="modal"
            tabIndex={-1}
            role="dialog"
            style={{ display: 'block' }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={onClose}
                  ></button>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onClose}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
