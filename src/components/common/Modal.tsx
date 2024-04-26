import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string
  buttonText: string
  submitStyle?: string
  submitText?: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  buttonText,
  children,
  onSubmit,
  submitText,
  submitStyle,
}) => {
  return (
    <>
      {isOpen && (
        <div className="modal-backdrop" style={{ display: 'block' }}>
          <form
            onSubmit={onSubmit}
            className="modal"
            tabIndex={-1}
            role="dialog"
            style={{ display: 'block' }}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
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
                    className="btn btn-secondary"
                    onClick={onClose}
                  >
                    {buttonText}
                  </button>
                  <button type="submit" className={submitStyle}>
                    {submitText}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Modal
