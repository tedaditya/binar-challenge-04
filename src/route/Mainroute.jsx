import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormSearch from '../components/Form/FormSearch';
import Detail from '../pages/Detail/Detail';
import Search from '../pages/Pencarian/Pencarian';

export default function MainRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<FormSearch />} />
                <Route path='/search' element={<Search />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </>
    )
}
