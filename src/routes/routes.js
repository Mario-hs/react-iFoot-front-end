import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../screen/Home'
import { Layout } from '../screen/Layout'
import { ContainerCenter } from '../components/ContainerCenter'
import { ContainerGrid } from '../components/ContainerGrid'


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Layout />} >
                    {/* <Route path='/peladas' element={ } /> */}
                    <Route path='/profile_other_user' element={<ContainerCenter user={'otherUser'} />} />
                    <Route path='/profile_user' element={<ContainerCenter user={'User'} />} />
                    <Route path='/peladas' element={<ContainerGrid />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}