import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Form from '../components/Form/Form';
import Detail from '../pages/Detail/Detail';
import Search from '../pages/Pencarian/Pencarian';

export default function MainRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Form />} />
                <Route path='/search' element={<Search />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </>
    )
}
