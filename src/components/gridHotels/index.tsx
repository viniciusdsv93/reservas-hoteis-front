import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styled";
import Button from "../button";
import swal from "sweetalert";
import "./swalStyle.css";
import { HotelType } from "../../types/HotelType";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { updateHotelContext } from "../../contexts/updateHotelContext";

type propTypes = {
	hotelsList: HotelType[];
};

const GridHotels = ({ hotelsList }: propTypes) => {
	const navigate = useNavigate();
	const { hotelToBeUpdated, setHotelToBeUpdated } = useContext(updateHotelContext);

	return (
		<S.Grid>
			<table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>CNPJ</th>
						<th>País</th>
						<th>Estado</th>
						<th>Cidade</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{hotelsList.map((hotel: HotelType) => {
						const { id, nome, cnpj, pais, estado, cidade } = hotel;
						return (
							<tr key={id}>
								<td>{nome}</td>
								<td>{cnpj}</td>
								<td>{pais}</td>
								<td>{estado}</td>
								<td>{cidade}</td>
								<td>
									<S.UpdateButton
										onClick={() => {
											setHotelToBeUpdated(hotel);
											navigate("/updateHotel");
										}}>
										Alterar
									</S.UpdateButton>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</S.Grid>
	);
};

export default GridHotels;
