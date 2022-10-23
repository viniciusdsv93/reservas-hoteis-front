import axios from "axios";
import * as S from "./styled";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import swal from "sweetalert";
import Button from "../button";
import { HotelType } from "../../types/HotelType";
import { api } from "../../services/api/api";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { updateHotelContext } from "../../contexts/updateHotelContext";

const updateHotelSchema = Yup.object().shape({
	nome: Yup.string()
		.required("Por favor, insira um nome.")
		.min(3, "O nome deve conter ao menos 3 caracteres"),
	cnpj: Yup.string()
		.required("Por favor, insira o CNPJ.")
		.min(14, "O CNPJ deve conter 14 caracteres, sem pontos, traços ou barras"),
	pais: Yup.string().required("Por favor, insira o país"),
	estado: Yup.string().required("Por favor, insira o estado"),
	cidade: Yup.string().required("Por favor, insira a cidade"),
});

const HotelUpdateInputs = () => {
	const { hotelToBeUpdated, setHotelToBeUpdated } = useContext(updateHotelContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<HotelType>({
		resolver: yupResolver(updateHotelSchema),
		defaultValues: {
			nome: hotelToBeUpdated.nome || "",
			cnpj: hotelToBeUpdated.cnpj || "",
			pais: hotelToBeUpdated.pais || "",
			estado: hotelToBeUpdated.estado || "",
			cidade: hotelToBeUpdated.cidade || "",
		},
	});

	const handleUpdateHotel: SubmitHandler<HotelType> = async (values) => {
		console.log("values", values);

		try {
			const response = await api.put("/atualizarHotel", {
				name: values.nome,
				CNPJ: values.cnpj,
				country: values.pais,
				state: values.estado,
				city: values.cidade,
			});
			console.log("response", response);
			swal("Hotel atualizado com sucesso");
		} catch (error: any) {
			console.log("error", error);
			if (error.response.data.why === "hotel-não-localizado") {
				swal("Erro: Hotel não localizado");
			} else {
				swal("Erro: Não foi possível atualizar o Hotel");
			}
		}
	};

	return (
		<>
			<Link to={"/"}>
				<Button content="Listar Hotéis" onClickHandler={() => {}} />
			</Link>
			<p>Por favor, altere os dados do hotel:</p>
			<S.Form action="" onSubmit={handleSubmit(handleUpdateHotel)}>
				<S.InputField>
					<S.InputTitle
						onClick={() => console.log("hotelToBeUpdated", hotelToBeUpdated)}>
						Nome:
					</S.InputTitle>
					<S.Input
						placeholder="Digite o nome..."
						type="text"
						maxLength={100}
						id="nome"
						{...register("nome")}
					/>
				</S.InputField>
				{errors.nome && (
					<S.InputErrorMessage>{errors.nome.message}</S.InputErrorMessage>
				)}
				<S.InputField>
					<S.InputTitle>CNPJ:</S.InputTitle>
					<S.Input
						placeholder="Digite o CNPJ..."
						type="text"
						maxLength={14}
						id="cnpj"
						{...register("cnpj")}
					/>
				</S.InputField>
				{errors.cnpj && (
					<S.InputErrorMessage>{errors.cnpj.message}</S.InputErrorMessage>
				)}
				<S.InputField>
					<S.InputTitle>País:</S.InputTitle>
					<S.Input
						placeholder="Digite o país..."
						type="text"
						maxLength={100}
						id="pais"
						{...register("pais")}
					/>
				</S.InputField>
				{errors.pais && (
					<S.InputErrorMessage>{errors.pais.message}</S.InputErrorMessage>
				)}
				<S.InputField>
					<S.InputTitle>Estado:</S.InputTitle>
					<S.Input
						placeholder="Digite o estado..."
						type="text"
						maxLength={100}
						id="estado"
						{...register("estado")}
					/>
				</S.InputField>
				{errors.estado && (
					<S.InputErrorMessage>{errors.estado.message}</S.InputErrorMessage>
				)}
				<S.InputField>
					<S.InputTitle>Cidade:</S.InputTitle>
					<S.Input
						placeholder="Digite a cidade..."
						type="text"
						maxLength={100}
						id="cidade"
						{...register("cidade")}
					/>
				</S.InputField>
				{errors.cidade && (
					<S.InputErrorMessage>{errors.cidade.message}</S.InputErrorMessage>
				)}

				<S.ButtonsField>
					<S.FormSubmit type="submit" value="Atualizar hotel" />
				</S.ButtonsField>
			</S.Form>
		</>
	);
};

export default HotelUpdateInputs;
