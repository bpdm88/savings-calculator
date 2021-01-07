const FormField = ({ label, value, type, handleChange, placeholder }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                value={value}
                type={type}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormField;
