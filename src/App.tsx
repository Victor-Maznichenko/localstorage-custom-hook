import useLocalStorage from "./hooks/useLocalStorage";

import "./assets/styles/App.css";
import { ChangeEvent, useState } from "react";

function App() {
	const [value, setValue] = useState("");
	const [userName, setLocalStorageItem, removeLocalStorageItem] = useLocalStorage({
		key: "userName",
		value: "victor",
	});

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setValue(target.value);
	};

	return (
		<>
			<h1>Localstorage hook</h1>
			<div>userName: {userName}</div>
			<div className="flex-block">
				<input
					type="text"
					name="setValue"
					value={value}
					placeholder="Введите значение"
					onChange={handleChange}
				/>

				<button type="button" onClick={() => setLocalStorageItem(value)}>
					Установить значение
				</button>

				<button type="button" onClick={() => removeLocalStorageItem()}>
					Удалить значение
				</button>
			</div>
		</>
	);
}

export default App;
