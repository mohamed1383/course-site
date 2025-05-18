import MainComponent from '../pages/main-page'
import ProductDetailPage from '../pages/product-detail-page'
import LoginPage from '../pages/login-sign-in/login'
import SignIn from '../pages/login-sign-in/sign-in'

let pageRoutes = [
    {path: '/', element: <MainComponent></MainComponent>},
    {path: '/course' , element: <ProductDetailPage></ProductDetailPage>},
    {path: 'login' , element: <LoginPage></LoginPage>},
    {path: 'sign-in' , element: <SignIn></SignIn>}
]

export default pageRoutes