import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../screen/Home'
import { Layout } from '../screen/Layout'
import { ContainerCenter } from '../containers/ContainerCenter'
import { ContainerGrid } from '../containers/ContainerGrid'
import { Login } from '../forms/Login'
import { Register } from '../forms/Register'
import history from './history'
import auth from '../context/auth'
import { useEffect, useState } from 'react'


export const Router = () => {
    let typeUser = auth.getTypeUser()

    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                {typeUser === 'jogador'
                    ? <Route path='/' element={<Layout type={typeUser} />} >
                        <Route path='/profile_other_user' element={<ContainerCenter user={'otherUser'} />} />
                        <Route path='/profile_user' element={<ContainerCenter user={'User'} />} />
                        <Route path='/peladas' element={<ContainerGrid type={'peladas'} />} />
                        <Route path='/arenas' element={<ContainerGrid type={'arenas'} />} />
                        <Route path='/explorar' element={<ContainerGrid type={'explorar'} />} />
                    </Route>
                    : <Route path='/' element={<Layout type={typeUser} />} >
                        <Route path='/profile_espaco' element={<ContainerCenter user={'espaco'} />} />
                        <Route path='/espaco' element={<ContainerGrid type={'espaco'} />} />
                    </Route>
                }

            </Routes>
        </BrowserRouter>
    )
}