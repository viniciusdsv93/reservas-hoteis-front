import * as S from "./styled";

type propTypes = {
	content: string;
	onClickHandler: () => void;
};

function Button({ content, onClickHandler }: propTypes) {
	return (
		<S.Button type="button" onClick={onClickHandler}>
			{content}
		</S.Button>
	);
}

export default Button;
