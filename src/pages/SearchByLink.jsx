import React from 'react';
import { useDispatch } from 'react-redux';
import { setdisableConvertation, setResume, setValueTab } from '../store/actions';
import SearchForm from '../components/SearchForm';
import api from '../utils/api';

function SearchByLink(props) {
    const dispatch = useDispatch();

    const addResumeHandler = async (alternate_url) => {
        try {
            const response = await api.get(`/resume/${alternate_url}`);
            //Пример: alternate_url = "https://hh.ru/resume/12345678901234567890123456789012abcdef"
            if (response.statusText === 'OK') {
                dispatch(setResume(response.data));
                props.history.push('/convertation');
                dispatch(setValueTab(2));
                dispatch(setdisableConvertation(false));
            } else {
                alert(`Что-то пошло не так...`);
            }
        } catch (error) {
            alert(`Резюме с такой ссылкой не существует или не доступно.`);
        }
    };

    return (
        <>
            <SearchForm message='Введите ссылку' title='https://hh.ru' addResumeHandler={addResumeHandler} />
        </>
    );
}

export default SearchByLink;
