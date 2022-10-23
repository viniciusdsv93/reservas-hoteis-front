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

const newHotelSchema = Yup.object().shape({
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

const HotelsCreateInputs = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<HotelType>({
		resolver: yupResolver(newHotelSchema),
	});

	const handleInsertNewHotel: SubmitHandler<HotelType> = async (values) => {
		console.log("values", values);

		try {
			const response = await api.post("/cadastrarHotel", {
				name: values.nome,
				CNPJ: values.cnpj,
				country: values.pais,
				state: values.estado,
				city: values.cidade,
			});
			swal(`Hotel cadastrado com sucesso com o ID: ${response.data.id}`);
		} catch (error: any) {
			if (error.response.data.why === "hotel-já-cadastrado") {
				swal("Erro: Hotel já cadastrado com este CNPJ");
			} else {
				swal("Erro: Não foi possível cadastrar o Hotel");
			}
		}
	};

	return (
		<>
			<Link to={"/"}>
				<Button content="Listar Hotéis" onClickHandler={() => {}} />
			</Link>
			<p>Por favor, insira aqui os dados do hotel a ser cadastrado:</p>
			<S.Form action="" onSubmit={handleSubmit(handleInsertNewHotel)}>
				<S.InputField>
					<S.InputTitle>Nome:</S.InputTitle>
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
					<S.FormSubmit type="submit" value="Cadastrar novo hotel" />
				</S.ButtonsField>
			</S.Form>
		</>
	);
};

export default HotelsCreateInputs;
