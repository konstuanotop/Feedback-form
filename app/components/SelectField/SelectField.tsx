import styles from './SelectField.module.scss'

interface SelectFieldProps {
    id: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
    options: { value: string, label: string }[];
    error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ id, name, value, onChange, onBlur, options, error }) => {

    return (

        <div className={styles.selectField}>
            <label htmlFor={id}>{name}</label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            >
                <option value="">Выберите услугу</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <div className={styles.error}>{error}</div>}
        </div>
    )

}

export default SelectField;