import * as S from "./styled";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";
import { Guest } from "../../types/ReservationType";

type propTypes = {
	currGuests: Guest[];
	setIsGuestsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const GuestsModal = ({ setIsGuestsModalOpen, currGuests }: propTypes) => {
	return (
		<S.GuestsModal>
			{currGuests.map((guest, index) => {
				return (
					<S.GuestElement>{`${index + 1}: ${guest.nome} ${
						guest.sobrenome
					}`}</S.GuestElement>
				);
			})}
			<S.CloseButton onClick={() => setIsGuestsModalOpen(false)}>
				Fechar
			</S.CloseButton>
		</S.GuestsModal>
	);
};

export default GuestsModal;
