
const Input = ({ type, className, placeholder, value, readOnly, onChange }) => {
    return (
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            value={value}
            readOnly={readOnly}
            onChange={onChange}
           
        />
    );
};

export default Input;