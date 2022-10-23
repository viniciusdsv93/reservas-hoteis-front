import { createContext, ReactNode, useState } from "react";
import { HotelType } from "../types/HotelType";

type UpdateHotelContextProviderProps = {
	children: ReactNode;
};

type updateHotelContextType = {
	hotelToBeUpdated: HotelType;
	setHotelToBeUpdated: (hotel: HotelType) => void;
};

const initialValue = {
	hotelToBeUpdated: {
		nome: "",
		cnpj: "",
		pais: "",
		estado: "",
		cidade: "",
	},
	setHotelToBeUpdated: () => {},
};

export const updateHotelContext = createContext<updateHotelContextType>(initialValue);

export const UpdateContextProvider = ({ children }: UpdateHotelContextProviderProps) => {
	const [hotelToBeUpdated, setHotelToBeUpdated] = useState(
		initialValue.hotelToBeUpdated
	);

	return (
		<updateHotelContext.Provider value={{ hotelToBeUpdated, setHotelToBeUpdated }}>
			{children}
		</updateHotelContext.Provider>
	);
};
