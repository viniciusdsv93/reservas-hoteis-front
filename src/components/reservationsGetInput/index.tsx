import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import swal from "sweetalert";
import * as Yup from "yup";
import { api } from "../../services/api/api";
import { getSingleReservationType } from "../../types/GetSingleReservationType";
import { ReservationType } from "../../types/ReservationType";
import * as S from "./styled";

const getReservationSchema = Yup.object().shape({
	reservationNumber: Yup.string().required("Por favor, insira o número da reserva"),
});

type propTypes = {
	setReservationsList: React.Dispatch<React.SetStateAction<ReservationType[]>>;
};

const ReservationsGetInput = ({ setReservationsList }: propTypes) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<getSingleReservationType>({
		resolver: yupResolver(getReservationSchema),
	});

	const getSingleReservationData: SubmitHandler<getSingleReservationType> = async (
		values
	) => {
		console.log("reservas", values);
		try {
			const response = await api.get(
				`/buscarReservaHospede/${values.reservationNumber}`
			);
			console.log("get single hotel", response);
			if (response.status === 200) {
				const arrayReservations = [];
				arrayReservations.push(response.data);
				setReservationsList(arrayReservations);
			}
		} catch (error: any) {
			if (error.response.status === 404) {
				swal("Reserva não localizada");
			} else {
				swal("Ocorreu um erro com a requisição");
			}
		}
	};

	const getListOfReservations = async () => {
		const response = await api.get("/buscarReservaHospede");
		setReservationsList(response.data);
	};

	return (
		<S.InputsField>
			<p>
				Insira o número da reserva caso queira ver os dados de apenas uma reserva:
			</p>
			<S.Form action="" onSubmit={handleSubmit(getSingleReservationData)}>
				<S.InputField>
					<S.InputTitle>Reserva:</S.InputTitle>
					<S.Input
						placeholder="Digite o número da reserva..."
						type="text"
						maxLength={14}
						id="reservationNumber"
						{...register("reservationNumber")}
					/>
				</S.InputField>
				{errors.reservationNumber && (
					<S.InputErrorMessage>
						{errors.reservationNumber.message}
					</S.InputErrorMessage>
				)}
				<S.ButtonsField>
					<S.FormSubmit type="submit" value="Buscar uma Reserva" />
					<S.FormSubmit
						type="button"
						value="Listar todas as Reservas"
						onClick={() => getListOfReservations()}
					/>
				</S.ButtonsField>
			</S.Form>
		</S.InputsField>
	);
};

export default ReservationsGetInput;
