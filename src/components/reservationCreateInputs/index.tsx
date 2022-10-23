import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import * as Yup from "yup";
import { api } from "../../services/api/api";
import { ReservationType } from "../../types/ReservationType";
import Button from "../button";
import * as S from "./styled";

const newReservationSchema = Yup.object().shape({
	idHotel: Yup.string().required("Insira o ID de um hotel"),
	numeroReserva: Yup.string().required("Insira o número da reserva"),
	apartamento: Yup.string().required("Insira o número do apartamento"),
	dataCheckIn: Yup.string().required("Insira a data de check-in"),
	dataCheckOut: Yup.string().required("Insira a data de check-out"),
	status: Yup.string().required("Insira o número do status"),
	numHospedes: Yup.number()
		.required("Digite o número de hóspedes")
		.min(1, "Deve haver pelo menos um hóspede"),
	hospedes: Yup.array().of(
		Yup.object().shape({
			nome: Yup.string().required("Insira o nome do hóspede"),
			sobrenome: Yup.string().required("Insira o sobrenome do hóspede"),
		})
	),
});

const ReservationsCreateInputs = () => {
	const [numTotalHospedes, setNumTotalHospedes] = useState(0);

	const arrayRender = new Array();
	for (let i = 0; i < numTotalHospedes; i++) {
		arrayRender.push(i);
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ReservationType>({
		resolver: yupResolver(newReservationSchema),
	});

	const handleInsertNewReservation: SubmitHandler<ReservationType> = async (values) => {
		console.log("values", values);

		const formattedGuests = values.hospedes?.map((guest) => {
			return {
				name: guest.nome,
				lastName: guest.sobrenome,
			};
		});

		try {
			const response = await api.post("/cadastrarReservaHospede", {
				id_hotel: values.idHotel,
				reservationNumber: values.numeroReserva,
				apartment: values.apartamento,
				checkInDate: values.dataCheckIn,
				checkOutDate: values.dataCheckOut,
				status: values.status,
				guests: formattedGuests,
			});
			swal(`Reserva cadastrada com sucesso com o ID: ${response.data.id}`);
		} catch (error: any) {
			swal("Erro: Não foi possível cadastrar a Reserva");
		}
	};

	return (
		<>
			<Link to={"/listReservations"}>
				<Button content="Listar Reservas" onClickHandler={() => {}} />
			</Link>
			<p>Por favor, insira aqui os dados da reserva a ser cadastrada:</p>
			<S.Form action="" onSubmit={handleSubmit(handleInsertNewReservation)}>
				<S.InputField>
					<S.InputTitle>ID Hotel:</S.InputTitle>
					<S.Input
						placeholder="Digite o ID do Hotel..."
						type="text"
						maxLength={100}
						id="id_hotel"
						{...register("idHotel")}
					/>
				</S.InputField>
				{errors.idHotel && (
					<S.InputErrorMessage>{errors.idHotel.message}</S.InputErrorMessage>
				)}
				<S.InputField>
					<S.InputTitle>Reserva:</S.InputTitle>
					<S.Input
						placeholder="Digite o Número da Reserva..."
						type="text"
						maxLength={14}
						id="numeroReserva"
						{...register("numeroReserva")}
					/>
				</S.InputField>
				{errors.numeroReserva && (
					<S.InputErrorMessage>
						{errors.numeroReserva.message}
					</S.InputErrorMessage>
				)}
				<S.InputField>
					<S.InputTitle>Apartamento:</S.InputTitle>
					<S.Input
						placeholder="Digite o Apartamento..."
						type="text"
						maxLength={100}
						id="apartamento"
						{...register("apartamento")}
					/>
				</S.InputField>
				{errors.apartamento && (
					<S.InputErrorMessage>
						{errors.apartamento.message}
					</S.InputErrorMessage>
				)}
				<S.InputField>
					<S.InputTitle>Check-in:</S.InputTitle>
					<S.Input
						placeholder="Digite a data de check-in..."
						type="date"
						maxLength={100}
						id="dataCheckIn"
						{...register("dataCheckIn")}
					/>
				</S.InputField>
				{errors.dataCheckIn && (
					<S.InputErrorMessage>
						{errors.dataCheckIn.message}
					</S.InputErrorMessage>
				)}
				<S.InputField>
					<S.InputTitle>Check-out:</S.InputTitle>
					<S.Input
						placeholder="Digite a data de check-out..."
						type="date"
						maxLength={100}
						id="dataCheckOut"
						{...register("dataCheckOut")}
					/>
				</S.InputField>
				{errors.dataCheckOut && (
					<S.InputErrorMessage>
						{errors.dataCheckOut.message}
					</S.InputErrorMessage>
				)}
				<S.InputField>
					<S.InputTitle>Status:</S.InputTitle>
					<S.Input
						placeholder="Digite o número do status..."
						type="text"
						maxLength={100}
						id="status"
						{...register("status")}
					/>
				</S.InputField>
				{errors.status && (
					<S.InputErrorMessage>{errors.status.message}</S.InputErrorMessage>
				)}
				<S.InputField>
					<S.InputTitle>Número de Hóspedes:</S.InputTitle>
					<S.Input
						placeholder="Digite o número de hóspedes..."
						type="number"
						maxLength={100}
						min={0}
						id="numHospedes"
						defaultValue={0}
						{...register("numHospedes")}
						onChange={(e) => setNumTotalHospedes(Number(e.target.value))}
						onClick={() => console.log("arrayRender", arrayRender)}
					/>
				</S.InputField>
				{errors.numHospedes && (
					<S.InputErrorMessage>
						{errors.numHospedes.message}
					</S.InputErrorMessage>
				)}
				{numTotalHospedes > 0
					? arrayRender.map((item) => {
							return (
								<React.Fragment key={item}>
									<S.InputField>
										<S.InputTitle>Nome:</S.InputTitle>
										<S.Input
											placeholder="Digite o nome..."
											type="text"
											maxLength={100}
											// @ts-ignore
											{...register(`hospedes[${item}].nome`)}
										/>
									</S.InputField>
									<S.InputField>
										<S.InputTitle>Sobrenome:</S.InputTitle>
										<S.Input
											placeholder="Digite o sobrenome..."
											type="text"
											maxLength={100}
											// @ts-ignore
											{...register(`hospedes[${item}].sobrenome`)}
										/>
									</S.InputField>
								</React.Fragment>
							);
					  })
					: null}

				<S.ButtonsField>
					<S.FormSubmit type="submit" value="Cadastrar nova Reserva" />
				</S.ButtonsField>
			</S.Form>
		</>
	);
};

export default ReservationsCreateInputs;
