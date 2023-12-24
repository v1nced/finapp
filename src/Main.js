import { useRef, useState } from "react"
import "./Main.scss"
import Modal from "./Modal"
import AccountTable from "./AccountTable"
import { useEffect } from "react"

function Main(){

	const [modalActive, setModalActive] = useState(false)
	const [isExpense, setIsExpense] = useState(false)
	const [price, setPrice] = useState()
	const [category, setCategory] = useState()
	const priceRef = useRef(price)

	const [list,setList] = useState([])

	function addToTable(){
		if(price){
		setList(list.concat(<AccountTable category={category} price={price} key={list.length} />))
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
								<span>500 000 тг.</span>
							</div>
						</div>
						<div className="main__accounting">
							<div className="main__accounting-options">
								<button
								onClick={()=>{setModalActive(true)
								setIsExpense(false)
								}}>Доход</button>
								<button onClick={()=>{setModalActive(true)
								setIsExpense(true)}}>Расход</button>
							</div>
							<div className="main__accounting-table">
								<div className="main__accounting-table-item">
									<AccountTable category={"Кафе и рестораны"} price={"20 000 тг."}/>
									{list}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal modalActive={modalActive} setModalActive={setModalActive} isExpense={isExpense} price={price} setPrice={setPrice} category={category} setCategory={setCategory} addToTable={addToTable}/>
		</>
	)
}

export default Main