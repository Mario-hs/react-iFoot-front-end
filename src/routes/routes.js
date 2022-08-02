import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../screen/Home'
import { Layout } from '../screen/Layout'
import { ContainerCenter } from '../containers/ContainerCenter'
import { ContainerGrid } from '../containers/ContainerGrid'
import { Login } from '../forms/Login'
import { Register } from '../forms/Register'
import history from './history'


export const Router = () => {
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                {/* </Route> */}
                <Route path='/' element={<Layout />} >
                    <Route path='/profile_other_user' element={<ContainerCenter user={'otherUser'} />} />
                    <Route path='/profile_user' element={<ContainerCenter user={'User'} />} />
                    <Route path='/peladas' element={<ContainerGrid type={'peladas'} />} />
                    <Route path='/arenas' element={<ContainerGrid type={'arenas'} />} />
                    <Route path='/explorar' element={<ContainerGrid type={'explorar'} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}