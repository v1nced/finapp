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
	const	[recordType, setRecordType] = useState()
	const [balance, setBalance] = useState(500000)

	const [list,setList] = useState([])


function spaceBetweenNum(int){
	return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

function deleteRecord(id){
	console.log(id)
	setList(list.filter(item=>item.id !== id))
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

			const updateList = [...list,{"price":price,"category":category,"isExpense":isExpense, "id":list.length}]

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
								<span>{spaceBetweenNum(balance)} тг.</span>
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
									{list.map((data,i)=>{
										console.log(list)
										return (
										<AccountTable 
											category={data.category} 
											price={spaceBetweenNum(data.price)} 
											type={data.isExpense} 
											key={i} 
											id={data.id}
											deleteRecord={(id)=>{deleteRecord(id)}}	
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
				setRecordType={setRecordType}/>
			</>
	)
}

export default Main