import React from 'react';
import { useDispatch } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { setdisableConvertation, setResume, setValueTab } from '../store/actions';
import api from '../utils/api';

function SearchByID(props) {
    const dispatch = useDispatch();
    const addResumeHandler = async (resume_id) => {
        try {
            const response = await api.get(`/resumes/${resume_id}`);
            if (response.statusText === 'OK') {
                dispatch(setResume(response.data));
                props.history.push('/convertation');
                dispatch(setValueTab(2));
                dispatch(setdisableConvertation(false));
            } else {
                alert(`Что-то пошло не так...`);
            }
        } catch (error) {
            alert(`Резюме с таким id не существует или не доступно.`);
        }
    };

    return (
        <>
            <SearchForm message='Введите id' title='id' addResumeHandler={addResumeHandler} />
        </>
    );
}

export default SearchByID;
