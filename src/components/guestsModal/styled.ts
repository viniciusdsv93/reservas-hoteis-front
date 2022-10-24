import styled from "styled-components";

export const GuestsModal = styled.div`
	position: absolute;
	top: 50%;
	right: 50%;
	transform: translate(50%, -50%);
	border-radius: 10px;
	box-shadow: 10px 10px 100px hsl(212deg 49% 36% / 30%);
	padding: 30px;
	width: auto;
	min-width: 200px;
	background-color: #f8f8f8;
	display: flex;
	flex-direction: column;
	gap: 20px;
	transition: all ease 0.5;
`;

export const GuestElement = styled.div`
	color: black;
	font-weight: 600;
`;

export const CloseButton = styled.button`
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
