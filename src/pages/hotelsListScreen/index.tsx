import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import * as Yup from "yup";
import Button from "../../components/button";
import GridHotels from "../../components/gridHotels";
import HotelsCreateInputs from "../../components/hotelsCreateInputs";
import HotelsGetInput from "../../components/hotelsGetInput";
import { api } from "../../services/api/api";
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
