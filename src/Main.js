import { useRef, useState } from "react"
import "./Main.scss"
import Modal from "./Modal"
import AccountTable from "./AccountTable"
import { useEffect } from "react"
import DatePicker from "react-datepicker"

function Main(){

	const [modalActive, setModalActive] = useState(false)
	const [isExpense, setIsExpense] = useState(false)
	const [price, setPrice] = useState()
	const [category, setCategory] = useState()
	const priceRef = useRef(price)
	const	[recordType, setRecordType] = useState()
	const [balance, setBalance] = useState(500000)
	const [startDate, setStartDate] = useState(new Date());
	const [editMode, setEditMode] = useState(false)

	const [list,setList] = useState([])


function spaceBetweenNum(int){
	return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

function deleteRecord(id, price, isExpense){

	price = parseInt(price)
	console.log(price)
	setList(list.filter(item=>item.id !== id))

	setBalance(isExpense ? balance+price : balance-price)

}



	function addToTable(){
		if(price >= 0){

			if(isExpense){
				//console.log(typeof(price))
				setBalance(balance-price)
			}else{
				//console.log(typeof(price))
				setBalance(balance+price)
			}
			
			console.log(startDate)

			const updateList = [...list,{"price":price,"category":category,"isExpense":isExpense, "date":startDate, "id":list.length}]

			setList(updateList)

			//console.log(list)



		/* setList(list.concat(<AccountTable category={category} price={spaceBetweenNum(price)} type={isExpense} key={list.length} id={list.length} deleteRecord={(id)=>{deleteRecord(id)}}/>))
		} */
	}
	
	}

	useEffect(()=>{
		addToTable()
	},[category])


	return(
		<>
			<div className="main">
				<div className="container">
					<div className="main__wrapper">
						<div className="main__balance">
							<h2>Мои счета</h2>
							<div className="main__balance-item">
								<span>Карта</span>
								{editMode ? "" : <span>{spaceBetweenNum(balance)} тг.</span>}
								{editMode ? (<input placeholder={spaceBetweenNum(balance)} onChange={(e)=>(setBalance(parseInt(e.target.value)))}/>): ""}
								<button onClick={()=>{
									setEditMode(!editMode)
								}}>{editMode ? "save" : "edit"}</button>
							</div>
						</div>
						<div className="main__accounting">
							<div className="main__accounting-options">
								<button
									onClick={()=>{setModalActive(true)
																setIsExpense(false)}
													}
								>Доход</button>
								<button 
									onClick={()=>{setModalActive(true)
																setIsExpense(true)}
													}
								>Расход</button>
							</div>
							<div className="main__accounting-table">
								<div className="main__accounting-table-item">
									{list.map((data,i)=>{
										console.log(list)
										return (
										<AccountTable 
											category={data.category} 
											price={data.price}
											spaceBetweenNum={spaceBetweenNum} 
											isExpense={data.isExpense} 
											key={i} 
											startDate={startDate}
											id={data.id}
											deleteRecord={(id, price, isExpense)=>{deleteRecord(id, price, isExpense)}}	
										/>)
									})}
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal 
				modalActive={modalActive} 
				setModalActive={setModalActive} 
				isExpense={isExpense} 
				price={price} 
				setPrice={setPrice} 
				category={category} 
				setCategory={setCategory} 
				recordType={recordType} 
				setRecordType={setRecordType}
				setStartDate={setStartDate}
				startDate={startDate}
				/>
			</>
	)
}

export default Main