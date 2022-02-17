import { useState, KeyboardEvent } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import * as C from "./style"
type Props ={
	onEnter: (taskName:string) => void;
}
export const AddArea = ({ onEnter }: Props) => {
	const [inputText, setInputText] = useState('');
	const handleKeyUp = (e:KeyboardEvent) => {
		if (e.code == "Enter" && inputText !== '') {
			onEnter(inputText);
			setInputText('');
		}
	}
	return (
		<C.Container>
			<FiPlusSquare className='image'/>
			<input
				type="text"
				placeholder="Add a task "
				value={inputText}
				onChange={ e => setInputText(e.target.value)}
				onKeyUp={handleKeyUp}
			/>
		</C.Container >
	);
}