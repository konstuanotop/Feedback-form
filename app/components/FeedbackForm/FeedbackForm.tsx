import { useRef, useState } from "react"
import InputField from "../InputField/InputField"
import styles from './FeedbackForm.module.scss'
import SelectField from "../SelectField/SelectField";
import FileUpload from "../FileUpload/FileUpload";
import TextAreaField from "../TextAreaField/TextAreaField";
import Button from "../Button/Button";


const FeedbackForm: React.FC = () => {

    interface OptionsType { value: string, label: string }

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        category: '',
        message: '',
        image: null as File | null,
    });

    const fileInputRef = useRef<HTMLInputElement>(null)

    const options: OptionsType[] = [
        { value: 'support', label: 'Поддержка' },
        { value: 'status', label: 'Статус обращения' },
        { value: 'other', label: 'Другое' }
    ]

    const validate = () => {
        const newErrors: { [key: string]: string } = {}

        const allowedTypes = ['image/jpeg', 'image/png'];
        const allowedExtensions = ['jpg', 'jpeg', 'png'];

        if (!formData.email) {
            newErrors.email = 'Необходим email';
        }

        if (!formData.firstName && !formData.lastName) {
            newErrors.firstname = 'Фамилия или Имя обязательны для ввода'
            newErrors.lastName = 'Фамилия или Имя обязательны для ввода'
        }

        if (!formData.category) {
            newErrors.category = 'Категория обязательная для ввода'
        }

        if (formData.message.length < 10) {
            newErrors.message = 'Сообщение должно быть не менее 10 символов'
        }

        if (formData.image) {
            const file = formData.image as File;
            const fileExtension = file.name.split('.').pop()?.toLowerCase() ?? '';

            if (file.size > 2 * 1024 * 1024) {
                newErrors.image = 'Размер файла должен быть менее 2 МБ';
            }
            if (!allowedTypes.includes(file.type) || !allowedExtensions.includes(fileExtension)) {
                newErrors.image = 'Разрешены только JPEG и PNG форматы';
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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setFormData({ ...formData, image: file });
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            category: '',
            message: '',
            image: null as File | null,
        })
        setErrors({});

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h1>FeedbackForm</h1>
            <InputField
                id='firstName'
                name='Имя'
                type="text"
                value={formData.firstName}
                autocomplete="given-name"
                onChange={handleChange}
                onBlur={() => { }}
                error={errors.firstName}
            />
            <InputField
                id='lastName'
                name="Фамилия"
                type="text"
                value={formData.lastName}
                autocomplete="family-name"
                onChange={handleChange}
                onBlur={() => { }}
                error={errors.lastName}
            />

            <InputField
                id="email"
                name="Email"
                type="email"
                value={formData.email}
                autocomplete="email"
                onChange={handleChange}
                onBlur={() => { }}
                error={errors.email}
            />

            <SelectField
                id='category'
                name="Категория"
                value={formData.category}
                onChange={handleChange}
                onBlur={() => { }}
                options={options}
                error={errors.category}
            />

            <TextAreaField
                id="message"
                name="Сообщение"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => { }}
                error={errors.message}
            />

            <FileUpload
                id="image"
                name="Избражение"
                type="file"
                onChange={handleFileChange}
                onBlur={() => { }}
                error={errors.image}
                ref={fileInputRef}
            />
            <div className={styles.buttonsContainer}>
                <Button
                    type="submit"
                    name="Отправить"
                />

                <Button
                    type="button"
                    name='Очистить форму'
                    onClick={handleReset}
                />
            </div>
        </form>

    )
}

export default FeedbackForm