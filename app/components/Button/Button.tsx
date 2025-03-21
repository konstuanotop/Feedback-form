import styles from './Button.module.scss'

interface ButtonProps {
    type: 'submit' | 'reset' | 'button' | undefined;
    name: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, name, onClick }) => {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick}
        >{name}</button>
    )
}

export default Button;