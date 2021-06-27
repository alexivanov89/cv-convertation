import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import api from '../utils/api';

function SearchByID(props) {
    const [resume, setResume] = useState(null);

    const addResumeHandler = async (resume_id) => {
        try {
            const response = await api.get(`/resumes/${resume_id}`);
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
            <SearchForm props={props} message='Введите id' title='id' addResumeHandler={addResumeHandler} />
        </>
    );
}

export default SearchByID;
