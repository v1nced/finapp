import { useContext } from "react"
import { MainContext } from "./MainContext"

function Balance() {

		const {balan, edit, between} = useContext(MainContext)
	const [balance, setBalance] = balan
	const [editMode, setEditMode] = edit
		const [spaceBetweenNum] = between
//const {editMode, setEditMode, balance, setBalance} = useContext

/* 	const balance = useContext(MainContext)
	const setBalance = useContext(MainContext)
	const editMode = useContext(MainContext)
	const setEditMode = useContext(MainContext) */
	//const spaceBetweenNum = useContext(MainContext)

	return(<>
		<span>Карта</span>
								{editMode ? "" : <span>{spaceBetweenNum(balance)} тг.</span>}
								{editMode ? (<input placeholder={spaceBetweenNum(balance)} onChange={(e)=>(setBalance(parseInt(e.target.value)))}/>): ""}
								<button onClick={()=>{
									setEditMode(!editMode)
								}}>{editMode ? "save" : "edit"}</button>
	</>)
}

export default Balance