import styled from "styled-components";

export const Grid = styled.div`
	border-radius: 10px;
	box-shadow: 0px 5px 20px hsl(212deg 49% 36% / 30%);
	padding: 16px;
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	border-top: 10px solid hsl(212, 86%, 64%);
	overflow: auto;

	table {
		min-width: max-content;

		@media (max-width: 768px) {
			font-size: 14px;
		}
	}

	th {
		text-align: start;
		min-width: fit-content;
	}

	tr {
		vertical-align: middle;
	}

	td {
		padding-right: 20px;
	}
`;

export const DeleteButton = styled.button`
	padding: 5px 10px;
	color: #fff;
	font-family: "Poppins", sans-serif;
	background-color: hsl(0, 78%, 62%);
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

export const UpdateButton = styled.button`
	padding: 5px 10px;
	color: #fff;
	font-family: "Poppins", sans-serif;
	background-color: hsl(34, 97%, 64%);
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

export const ModalAlteracao = styled.div`
	position: absolute;
	top: 50%;
	right: 50%;
	transform: translate(50%, -50%);
	border-radius: 10px;
	box-shadow: 0px 5px 20px hsl(212deg 49% 36% / 30%);
	padding: 16px;
	width: auto;
	background-color: #e9e9e9;
	display: flex;
	flex-direction: column;
	gap: 20px;
	transition: all ease 0.5;
`;

export const InputModal = styled.input`
	border-radius: 5px;
	border: 1px solid black;
	width: 300px;
	padding: 5px 15px;
	font-size: 16px;
`;

export const CancelButton = styled.button`
	padding: 5px 10px;
	color: #fff;
	font-family: "Poppins", sans-serif;
	background-color: #fa1b1b;
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

export const FormModal = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const FormModalSubmit = styled.input`
	padding: 5px 10px;
	color: #fff;
	font-family: "Poppins", sans-serif;
	background-color: #70fa1b;
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;
