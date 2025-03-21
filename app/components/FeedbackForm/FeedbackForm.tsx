import { useState } from "react"
import InputField from "../InputField/InputField"
import styles from './FeedbackForm.module.scss'
import SelectField from "../SelectField/SelectField";


const FeedbackForm: React.FC = () => {

    interface OptionsType { value: string, label: string }

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        category: '',
        message: '',
        image: null,
    });

    const options: OptionsType[] = [
        { value: 'support', label: 'Поддержка' },
        { value: 'status', label: 'Статус обращения' },
        { value: 'other', label: 'Другое' }
    ]

    const validate = () => {
        const newErrors: { [key: string]: string } = {}

        if (!formData.email) {
            newErrors.email = 'Необходим email';
        }

        if (!formData.firstName && !formData.lastName) {
            newErrors.firstname = 'Фамилия или имя обязательны для ввода'
            newErrors.lastNmae = 'Фамилия или имя обязательны для ввода'
        }

        if (!formData.category) {
            newErrors.category = 'Категория обязательная для ввода'
        }

        if (formData.message.length < 10) {
            newErrors.message = 'Сообщение должно быть не менее 10 символов'
        }

        if (formData.image) {
            const file = formData.image as File;
            if (file.size > 2 * 1024 * 1024) {
                newErrors.image = 'Размер файла должен быть менее 2 МБ'
            }
            if (!['image/jpeg', 'image/png'].includes(file.type)) {
                newErrors.image = 'Разрешены только JPEG и PNG форматы'
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }

    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validate()) {
            const json = JSON.stringify(formData, null, 2);
            console.log(json);
            alert('Форма успешно отправлена')
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h1>FeedbackForm</h1>
            <InputField
                id='firstName'
                name='First Name'
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={() => { }}
                error={errors.firstName}
            />
            <InputField
                id='lastName'
                name="Last Name"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={() => { }}
                error={errors.lastName}
            />

            <InputField
                id="email"
                name="Email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => { }}
                error={errors.email}
            />

            <SelectField
                id='category'
                name="Category"
                value={formData.category}
                onChange={handleChange}
                onBlur={() => { }}
                options={options}
                error={errors.category}
            />

        </form>

    )
}

export default FeedbackForm