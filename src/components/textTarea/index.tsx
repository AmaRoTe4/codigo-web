import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styles from './styles.module.css'

interface Props {
    value: string;
    setValue: Dispatch<SetStateAction<string>>
    placeholder?: string;
}

export default function TextTarea({ value, setValue , placeholder}: Props) {
    const textareaRef = useRef(null);

    useEffect(() => {
        handleResize();
    }, [value]);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    const handleResize = () => {
        const textarea:any = textareaRef.current;
        if (textarea === null) return;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    return (
        <textarea
            placeholder={placeholder}
            ref={textareaRef}
            value={value}
            className={styles.TextTarea}
            disabled={false}
            onChange={handleChange}
            onInput={handleResize}
        />
    )
}