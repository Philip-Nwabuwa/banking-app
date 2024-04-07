"use client";

interface SubmitButtonProps {
  isSubmitting: boolean;
  disabled: boolean;
  text: string;
  className?: string;
  onClick?: (data: any) => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  disabled,
  text,
  className,
  ...props
}) => {
  return (
    <button
      type="submit"
      {...props}
      className="btn btn-primary"
      disabled={disabled || isSubmitting}
    >
      {isSubmitting ? (
        <>
          Please wait...
          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export default SubmitButton;
