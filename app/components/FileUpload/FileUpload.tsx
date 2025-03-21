import { forwardRef } from 'react';
import styles from './FileUpload.module.scss'


interface FileUploadProps {
    id: string;
    name: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(({ id, name, type, onChange, onBlur, error }, ref) => {

    return (
        <div className={styles.fileUpload}>
            <label htmlFor={id}>{name}</label>
            <input
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
            />
            {error && <div className={styles.error}>{error}</div>}
        </div>
    )
}
)
export default FileUpload;