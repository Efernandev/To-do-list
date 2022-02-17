import styled, { keyframes } from "styled-components";
type ContainerProps = {
	done:boolean;
}
export const Container = styled.div(({ done }: ContainerProps) => (
`
	display: flex;
	background-color: #20212c;
	padding: 20px 30px;
	border-radius: 10px;
	margin: 10px;
	align-items: center;
	label {
		color:${done ? 'tomato' : '#ccc'};
		text-decoration: ${done ? 'line-through' : 'initial'};
		flex:1;
	}
	input{
		width: 25px;
		height: 25px;
		margin-right: 10px;
	}
	@media (max-width:350px) {
		margin:20px;
	}
	svg{
		fill:tomato;
		cursor:pointer;
	}
`
));
