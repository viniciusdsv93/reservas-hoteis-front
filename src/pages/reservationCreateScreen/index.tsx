import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import * as Yup from "yup";
import GridHotels from "../../components/gridHotels";
import HotelsCreateInputs from "../../components/hotelsCreateInputs";
import HotelsGetInput from "../../components/hotelsGetInput";
import ReservationsCreateInputs from "../../components/reservationCreateInputs";
import { api } from "../../services/api/api";
import { HotelType } from "../../types/HotelType";
import * as S from "./styled";

export const ReservationCreateScreen = () => {
	return (
		<S.Container>
			<ReservationsCreateInputs />
		</S.Container>
	);
};
