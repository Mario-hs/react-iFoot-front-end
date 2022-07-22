import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../screen/Home'
import { Layout } from '../screen/Layout'
import { ContainerCenter } from '../components/ContainerCenter'
import { ContainerLeft } from "../components/ContainerLeft";
import { ContainerRightTop } from "../components/ContainerRightTop";
import { ContainerRightBottom } from "../components/ContainerRightBottom";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Layout />} >
                    {/* <Route path='/peladas' element={ } /> */}
                    <Route path='/profile_other_user' element={<ContainerCenter user={'otherUser'} />} />
                    <Route path='/profile_user' element={<ContainerCenter user={'User'} />} />
                    <Route path='/peladas' element={
                        <div className="outlet">
                            <ContainerLeft />
                            <ContainerRightTop />
                            <ContainerRightBottom />
                        </div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}