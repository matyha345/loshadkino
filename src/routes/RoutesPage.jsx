import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesPageData } from './routesPageData'
import NotFound from '../components/page/not-found/NotFound'

const RoutesPage = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routesPageData.map(route => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesPage
