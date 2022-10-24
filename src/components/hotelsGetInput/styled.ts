import styled from "styled-components";

export const InputsField = styled.div`
	border-radius: 10px;
	box-shadow: 0px 5px 20px hsl(212deg 49% 36% / 30%);
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	border-top: 10px solid hsl(180, 62%, 55%);

	p {
		@media (max-width: 550px) {
			font-size: 14px;
		}
	}
`;

export const Input = styled.input`
	border-radius: 3px;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 15%);
	outline: none;
	border: none;
	padding: 5px 15px;
	font-size: 16px;
	font-family: "Poppins", sans-serif;
	flex: 1;
	&::placeholder {
		@media (max-width: 768px) {
			font-size: 14px;
		}
	}
`;

export const InputField = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const InputTitle = styled.p`
	margin-right: 15px;

	@media (max-width: 550px) {
		font-size: 14px;
	}
`;

export const InputErrorMessage = styled.span`
	color: red;
	font-size: 12px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const FormSubmit = styled.input`
	padding: 5px 10px;
	width: 40%;
	max-width: 300px;
	color: #fff;
	font-family: "Poppins", sans-serif;
	background-color: #005ee2;
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
	font-weight: bold;
	font-size: 20px;
	cursor: pointer;

	@media (max-width: 768px) {
		font-size: 14px;
		min-width: 200px;
	}

	&:hover {
		opacity: 0.7;
	}
`;

export const ButtonsField = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;

	@media (max-width: 780px) {
		flex-direction: column;
		gap: 15px;
		align-items: center;
	}
`;
