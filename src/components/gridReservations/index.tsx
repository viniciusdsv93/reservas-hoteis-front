import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateReservationContext } from "../../contexts/updateReservationContext";
import { Guest, ReservationType } from "../../types/ReservationType";
import GuestsModal from "../guestsModal";
import * as S from "./styled";
import "./swalStyle.css";

type propTypes = {
	reservationsList: ReservationType[];
};

const GridReservations = ({ reservationsList }: propTypes) => {
	const { reservationToBeUpdated, setReservationToBeUpdated } = useContext(
		updateReservationContext
	);

	const navigate = useNavigate();
	const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
	const [currGuests, setCurrGuests] = useState<Guest[]>([]);

	return (
		<S.Grid>
			<table>
				<thead>
					<tr>
						<th>Reserva</th>
						<th>Apartamento</th>
						<th>Check-In</th>
						<th>Check-Out</th>
						<th>Status</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{reservationsList.map((reservation: ReservationType) => {
						return (
							<tr key={reservation.numeroReserva}>
								<td>{reservation.numeroReserva}</td>
								<td>{reservation.apartamento}</td>
								<td>{reservation.dataCheckIn.substring(0, 10)}</td>
								<td>{reservation.dataCheckOut.substring(0, 10)}</td>
								<td>{String(reservation.status)}</td>
								{reservation.hospedes ? (
									<td>
										<S.UpdateButton
											onClick={() => {
												setReservationToBeUpdated(reservation);
												navigate("/updateReservation");
											}}>
											Alterar
										</S.UpdateButton>
									</td>
								) : null}
								{reservation.hospedes ? (
									<td>
										<S.GuestsButton
											onClick={() => {
												console.log("reservation", reservation);
												if (reservation.hospedes) {
													setCurrGuests(reservation.hospedes);
													setIsGuestsModalOpen(true);
												}
											}}>
											Ver Hóspedes
										</S.GuestsButton>
									</td>
								) : null}
							</tr>
						);
					})}
				</tbody>
			</table>
			{isGuestsModalOpen ? (
				<GuestsModal
					setIsGuestsModalOpen={setIsGuestsModalOpen}
					currGuests={currGuests}></GuestsModal>
			) : null}
		</S.Grid>
	);
};

export default GridReservations;
