import { useStore } from "effector-react"
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom"
import { $AuthUser } from "../store/AuthStore"
import { AdminAbout } from "./AdminAbout"
import { AdminPanelMembers } from "./AdminPanel"
import { AdminReview } from "./AdminReview"
import { AuthPage } from "./Auth"
import { NotFoundPage } from "./Error"
import { Main } from "./MainPage"
import { RecoveryPage } from "./Recovery"
export const RoutesNavigation = () =>{
    const authStore = useStore($AuthUser)
    return(
        <Router>
            <Routes>
                <Route path='*' element={<AuthPage/>}/>
                <Route path='recovery' element={<RecoveryPage/>}/>
                <Route path='main' element={authStore ? <Main/> : <Navigate to='/auth' replace/>}/>
                <Route path='admin/*' element={<NotFoundPage/>}/>
                <Route path='admin/members' element={authStore ? <AdminPanelMembers/> : <Navigate to='/auth' replace/>}/>
                <Route path='admin/review' element={authStore ? <AdminReview/> : <Navigate to='/auth' replace/>}/>
                <Route path='admin/about' element={authStore ? <AdminAbout/> : <Navigate to='/auth' replace/>}/>
            </Routes>
        </Router>
    )
}