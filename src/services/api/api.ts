import axios from "axios";

export const api = axios.create({
	baseURL: "https://reservas-hotel-api.herokuapp.com/",
});
