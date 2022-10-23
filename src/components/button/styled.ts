import styled from "styled-components";

export const Button = styled.button`
	padding: 5px 10px;
	max-width: 250px;
	min-width: 150px;
	color: #fff;
	font-family: "Poppins", sans-serif;
	background-color: #005ee2;
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
	font-weight: bold;
	font-size: 14px;
	cursor: pointer;

	@media (max-width: 768px) {
		font-size: 14px;
		min-width: 200px;
	}

	&:hover {
		opacity: 0.7;
	}
`;
