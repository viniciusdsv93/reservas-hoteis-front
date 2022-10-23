export type Guest = {
	id?: string;
	nome: string;
	sobrenome: string;
};

export type ReservationType = {
	idHotel?: string;
	numeroReserva: string;
	apartamento: string;
	dataCheckIn: string;
	dataCheckOut: string;
	status: Number;
	numHospedes?: Number;
	hospedes?: Guest[];
};
