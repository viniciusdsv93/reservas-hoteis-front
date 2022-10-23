import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import GridReservations from "../../components/gridReservations";
import ReservationsGetInput from "../../components/reservationsGetInput";
import { ReservationType } from "../../types/ReservationType";
import * as S from "./styled";

export const ReservationsListScreen = () => {
	const [reservationsList, setReservationsList] = useState<ReservationType[]>([]);

	return (
		<S.Container>
			<Link to={"/createReservation"}>
				<Button content="Cadastrar Reserva" onClickHandler={() => {}} />
			</Link>
			<ReservationsGetInput setReservationsList={setReservationsList} />
			<GridReservations reservationsList={reservationsList} />
			<Link to={"/"}>
				<Button content="Listagem de Hotéis" onClickHandler={() => {}} />
			</Link>
		</S.Container>
	);
};
