import { Routes, Route } from "react-router-dom";
import { HotelsCreateScreen } from "../pages/hotelCreateScreen";
import { HotelsListScreen } from "../pages/hotelsListScreen";
import { HotelUpdateScreen } from "../pages/hotelUpdateScreen";
import { ReservationCreateScreen } from "../pages/reservationCreateScreen";
import { ReservationsListScreen } from "../pages/reservationsListScreen";
import { ReservationUpdateScreen } from "../pages/reservationUpdateScreen";

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HotelsListScreen />} />
			<Route path="/createHotel" element={<HotelsCreateScreen />} />
			<Route path="/updateHotel" element={<HotelUpdateScreen />} />
			<Route path="/listReservations" element={<ReservationsListScreen />} />
			<Route path="/createReservation" element={<ReservationCreateScreen />} />
			<Route path="/updateReservation" element={<ReservationUpdateScreen />} />
		</Routes>
	);
};
