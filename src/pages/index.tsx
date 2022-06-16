import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { AdminAbout } from "./AdminAbout"
import { AdminPanelMembers } from "./AdminPanel"
import { AdminReview } from "./AdminReview"
import { AuthPage } from "./Auth"
import { NotFoundPage } from "./Error"
import { RecoveryPage } from "./Recovery"
export const RoutesNavigation = () =>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<AuthPage/>}/>
                <Route path='recovery' element={<RecoveryPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
                <Route path='admin/members' element={<AdminPanelMembers/>}/>
                <Route path='admin/review' element={<AdminReview/>}/>
                <Route path='admin/about' element={<AdminAbout/>}/>
            </Routes>
        </Router>
    )
}