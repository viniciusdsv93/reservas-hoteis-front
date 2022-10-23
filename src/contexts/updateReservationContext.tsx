import { createContext, ReactNode, useState } from "react";
import { ReservationType } from "../types/ReservationType";

type UpdateReservationContextProviderProps = {
	children: ReactNode;
};

type updateReservationContextType = {
	reservationToBeUpdated: ReservationType;
	setReservationToBeUpdated: (reservation: ReservationType) => void;
};

const initialValueReservation = {
	reservationToBeUpdated: {
		numeroReserva: "",
		apartamento: "",
		dataCheckIn: "",
		dataCheckOut: "",
		status: 0,
	},
	setReservationToBeUpdated: () => {},
};

export const updateReservationContext = createContext<updateReservationContextType>(
	initialValueReservation
);

export const UpdateReservationContextProvider = ({
	children,
}: UpdateReservationContextProviderProps) => {
	const [reservationToBeUpdated, setReservationToBeUpdated] = useState<ReservationType>(
		initialValueReservation.reservationToBeUpdated
	);

	return (
		<updateReservationContext.Provider
			value={{
				reservationToBeUpdated: reservationToBeUpdated,
				setReservationToBeUpdated: setReservationToBeUpdated,
			}}>
			{children}
		</updateReservationContext.Provider>
	);
};
