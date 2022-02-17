import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import * as Co from "./App.styles"
import { Item } from "./types/Item"
import { ListItem } from "./components/Listitem";
import { AddArea } from "./components/AddArea"

const App = () => {
	const [list, setList] = useState<Item[]>([]);

	const handleAddTask = (taskName: string) => {
		let newList = [...list];
		newList.push({
			id:list.length+1,
			name:taskName,
			done:false
		});
		setList(newList);
	}

	// Função feita para tarefinha de casa.
	const handleTaskChange = (id:number, done:boolean) => {
		let newList = [...list];
		for(let i in newList) {
			if (newList[i].id === id) {
				newList[i].done = done;
			}
		}
		setList(newList)
	}
	const clean = (id:number) => {
		let newList = [...list];
		for (let i in newList){
			if (newList[i].id === id) {
				var index = newList.indexOf(newList[i]);
				newList.splice(index, 1)
			}
		}
		setList(newList)
	}

	return <div className="App">
		<GlobalStyle />
		<Co.Container>
			<Co.Area>
				<Co.Header>To do List</Co.Header>
				<Co.Paragraph>add your tasks here so you don't forget them, you can either mark it as completed or delete it too</Co.Paragraph>
				<AddArea onEnter={handleAddTask}/>

				{list.map((item,index) =>(
					<ListItem key={index} item={item} onChange={handleTaskChange} onClick={clean}/>
				))}
			</Co.Area>
		</Co.Container>
	</div>;

}

export default App;
