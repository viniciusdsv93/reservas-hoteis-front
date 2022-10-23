import * as S from "./styled";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import swal from "sweetalert";
import { HotelType } from "../../types/HotelType";
import { api } from "../../services/api/api";
import { getSingleHotelType } from "../../types/GetSingleHotelType";

const getHotelSchema = Yup.object().shape({
	cnpj: Yup.string()
		.required("Por favor, insira o CNPJ.")
		.min(14, "O CNPJ deve conter 14 caracteres, sem pontos, traços ou barras"),
});

type propTypes = {
	setHotelsList: React.Dispatch<React.SetStateAction<HotelType[]>>;
};

const HotelsGetInput = ({ setHotelsList }: propTypes) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<getSingleHotelType>({
		resolver: yupResolver(getHotelSchema),
	});

	const getSingleHotelData: SubmitHandler<getSingleHotelType> = async (values) => {
		try {
			const response = await api.get(`/buscarHotel/${values.cnpj}`);
			console.log("get single hotel", response);
			if (response.status === 200) {
				const arrayHotel = [];
				arrayHotel.push(response.data);
				setHotelsList(arrayHotel);
			}
		} catch (error: any) {
			console.log("error", error);
			if (error.response.status === 404) {
				swal("Hotel não localizado");
			} else {
				swal("Ocorreu um erro com a requisição");
			}
		}
	};

	const getListOfHotels = async () => {
		const response = await api.get("/buscarHotel");
		setHotelsList(response.data);
		console.log("get all hotels", response);
	};

	return (
		<S.InputsField>
			<p>Insira o CNPJ caso queira ver os dados de apenas um hotel:</p>
			<S.Form action="" onSubmit={handleSubmit(getSingleHotelData)}>
				<S.InputField>
					<S.InputTitle>CNPJ:</S.InputTitle>
					<S.Input
						placeholder="Digite o cnpj..."
						type="text"
						maxLength={14}
						id="cnpj"
						{...register("cnpj")}
					/>
				</S.InputField>
				{errors.cnpj && (
					<S.InputErrorMessage>{errors.cnpj.message}</S.InputErrorMessage>
				)}
				<S.ButtonsField>
					<S.FormSubmit type="submit" value="Buscar um hotel" />
					<S.FormSubmit
						type="button"
						value="Listar todos os hoteis"
						onClick={() => getListOfHotels()}
					/>
				</S.ButtonsField>
			</S.Form>
		</S.InputsField>
	);
};

export default HotelsGetInput;
