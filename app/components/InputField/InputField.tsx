import styles from "./InputField.module.scss"

interface InputFieldProps {
    id: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({id, name, type, value, onChange, onBlur, error}) => {



    return (
        <div className={styles.inputField}>
            <label htmlFor={id}>{name}</label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <div className={styles.error}>{error}</div>}
        </div>
    )

}

export default InputField;