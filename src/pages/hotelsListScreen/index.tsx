import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import GridHotels from "../../components/gridHotels";
import HotelsGetInput from "../../components/hotelsGetInput";
import { HotelType } from "../../types/HotelType";
import * as S from "./styled";

export const HotelsListScreen = () => {
	const [hotelsList, setHotelsList] = useState<HotelType[]>([]);

	return (
		<S.Container>
			<Link to={"/createHotel"}>
				<Button content="Cadastrar Hotel" onClickHandler={() => {}} />
			</Link>
			<HotelsGetInput setHotelsList={setHotelsList} />
			<GridHotels hotelsList={hotelsList} />
			<Link to={"/listReservations"}>
				<Button content="Listagem de Reservas" onClickHandler={() => {}} />
			</Link>
		</S.Container>
	);
};
