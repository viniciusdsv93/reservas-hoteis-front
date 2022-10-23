import { GlobalCSS } from "./style/global";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer";
import { MainRoutes } from "./routes/routes";
import { UpdateContextProvider } from "./contexts/updateHotelContext";
import { UpdateReservationContextProvider } from "./contexts/updateReservationContext";

function App() {
	return (
		<main>
			<UpdateReservationContextProvider>
				<UpdateContextProvider>
					<GlobalCSS />
					<BrowserRouter>
						<MainRoutes />
						<Footer />
					</BrowserRouter>
				</UpdateContextProvider>
			</UpdateReservationContextProvider>
		</main>
	);
}

export default App;
