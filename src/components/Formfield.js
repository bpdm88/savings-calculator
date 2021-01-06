const FormField = ({ label, value, type, handleChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input value={value} type={type} onChange={handleChange} />
        </div>
    );
};

export default FormField;
