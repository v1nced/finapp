import React,{useState} from "react"

export const MainContext = React.createContext()

export function MainProvider({ children }){
	const [editMode, setEditMode] = useState(false)
	const [balance, setBalance] = useState(500000)

	function spaceBetweenNum(int){
	return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

	return(<MainContext.Provider value={{edit:[editMode, setEditMode], balan:[balance, setBalance], between:[spaceBetweenNum]}}>
					{children}
					</MainContext.Provider>
				)

}