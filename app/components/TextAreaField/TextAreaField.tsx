import styles from './TextAreaField.module.scss'


interface TextAreaFieldProps {
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    error?: string;
}


const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, name, value, onChange, onBlur, error }) => {

    return (
        <div className={styles.textAreaField}>
            <label id={id}>{name}</label>
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <div className={styles.error}>{error}</div>}
        </div>
    )
}

export default TextAreaField;