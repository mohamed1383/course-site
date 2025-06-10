import MainComponent from '../pages/main-page'
import ProductDetailPage from '../pages/product-detail-page'
import LoginPageWrapper from '../pages/login-sign-in/login-page'
import EmailLogin from '../components/login-sign-in/email-login'
import EmailSignIn from '../components/login-sign-in/email-sign-in'
import PhoneLogin from '../components/login-sign-in/phone-login'
import PhoneSignIn from '../components/login-sign-in/phone-sign-in'
import UserInformationPage from '../pages/user-information-page'
import ShopingCartPage from '../pages/shoping-card/shoping-cart-page'
import ProductPage from '../pages/products-page/product-page'

let pageRoutes = [
    {path: '/', element: <MainComponent></MainComponent>},
    {path: '/course' , element: <ProductDetailPage></ProductDetailPage>},
    {path: '/user-info' , element: <UserInformationPage></UserInformationPage>},
    {path: '/shoping-cart' , element: <ShopingCartPage></ShopingCartPage>},
    {path: '/product-page' , element: <ProductPage></ProductPage>},
    {path: '/login-page', element: <LoginPageWrapper></LoginPageWrapper> , children: [
        {path: 'email-login' , element : <EmailLogin></EmailLogin>},
        {path: 'email-sign-in' , element: <EmailSignIn></EmailSignIn>},
        {path: 'phone-login' , element: <PhoneLogin></PhoneLogin>},
        {path: 'phone-sign-in' , element: <PhoneSignIn></PhoneSignIn>}
    ]}
]

export default pageRoutes