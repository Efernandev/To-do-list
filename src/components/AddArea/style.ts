import styled, { keyframes } from "styled-components";

const FadeAnimation = keyframes`
	from {
		transform:scale(0.7);
	}
	to {
		transform:scale(1);
	}
`;

export const Container = styled.div`
	border:1px solid #555;
	border-radius: 4px;
	padding: 10px;
	margin:20px auto;
	display: flex;
	width: 400px;
	align-items: center;
	animation: ${FadeAnimation} 2s;
	&:focus-within{
			border: 2px solid tomato;
	}
	.image{
		margin-right: 10px;
		color:tomato;
	}
	input{
		border: none;
		background: transparent;
		color: white;
		font-size: 18px;
		flex:1;
		width: 100%;
		&::placeholder{
			color:#777;
			padding:0 2px;
		}
	}

`;
