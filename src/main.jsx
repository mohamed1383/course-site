import { createRoot } from 'react-dom/client'
import App from './app'
import './fonts.css'
import './style.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </QueryClientProvider>
)
