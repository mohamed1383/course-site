import MainComponent from '../pages/main-page'
import ProductDetailPage from '../pages/product-detail-page'
import LoginPageWrapper from '../pages/login-sign-in/login-page'
import EmailLogin from '../components/login-sign-in/email-login'
import EmailSignIn from '../components/login-sign-in/email-sign-in'
import PhoneLogin from '../components/login-sign-in/phone-login'
import PhoneSignIn from '../components/login-sign-in/phone-sign-in'

let pageRoutes = [
    {path: '/', element: <MainComponent></MainComponent>},
    {path: '/course' , element: <ProductDetailPage></ProductDetailPage>},
    {path: '/login-page', element: <LoginPageWrapper></LoginPageWrapper> , children: [
        {path: 'email-login' , element : <EmailLogin></EmailLogin>},
        {path: 'email-sign-in' , element: <EmailSignIn></EmailSignIn>},
        {path: 'phone-login' , element: <PhoneLogin></PhoneLogin>},
        {path: 'phone-sign-in' , element: <PhoneSignIn></PhoneSignIn>}
    ]}
]

export default pageRoutes