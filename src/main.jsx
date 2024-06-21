import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import RoutesPage from './routes/RoutesPage'
import './styles/index.scss'

if (typeof global === 'undefined') {
	window.global = window
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<QueryClientProvider client={queryClient}>
		<React.StrictMode>
			<RoutesPage />
		</React.StrictMode>
	</QueryClientProvider>
)

// TODO: изменить отправку Email --- (providers) !!!!!
// TODO: маска для поля Cleave.js
// TODO: Gallery
