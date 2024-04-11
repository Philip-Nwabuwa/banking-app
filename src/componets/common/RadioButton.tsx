'use client'

interface RadioButtonProps {
  id: string
  value: string
  checked: boolean
  onRadioButtonChange: (value: string) => void
  label: string
  description: string
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  value,
  checked,
  onRadioButtonChange,
  label,
  description,
}) => {
  const handleChange = () => {
    onRadioButtonChange(value)
  }
  return (
    <div className="col-lg-6">
      <input
        type="radio"
        className="btn-check"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10"
      >
        <i className={`ki-outline ki-${id} fs-3x me-5`}></i>
        <span className="d-block fw-semibold text-start">
          <span className="text-gray-900 fw-bold d-block fs-4 mb-2">
            {label}
          </span>
          <span className="text-muted fw-semibold fs-6">{description}</span>
        </span>
      </label>
    </div>
  )
}

export default RadioButton
