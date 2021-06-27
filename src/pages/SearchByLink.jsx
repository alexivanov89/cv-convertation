import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import api from '../utils/api';

function SearchByLink(props) {
    const [resume, setResume] = useState(null);

    const addResumeHandler = async (alternate_url) => {
        try {
            const response = await api.get(`/resume/${alternate_url}`);
            //Пример: alternate_url = "https://hh.ru/resume/12345678901234567890123456789012abcdef"
            if (response.statusText === 'OK') {
                setResume(response.data);
                props.history.push('/convertation');
            } else {
                alert(`Что-то пошло не так...`);
            }
        } catch (error) {
            console.error('Could not fetch.', error.message);

            alert(`Резюме с таким id не существует или недоступно.`);
        }
    };

    console.log(resume);

    return (
        <>
            <SearchForm
                props={props}
                message='Введите ссылку'
                title='https://hh.ru'
                addResumeHandler={addResumeHandler}
            />
        </>
    );
}

export default SearchByLink;
