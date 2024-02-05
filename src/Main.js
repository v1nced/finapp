import { createContext, useContext, useRef, useState } from "react"
import "./Main.scss"
import Modal from "./Modal"
import AccountTable from "./AccountTable"
import { useEffect } from "react"
import DatePicker from "react-datepicker"
import { format } from 'date-fns'
import Balance from "./Balance"
import { MainContext, MainProvider } from "./MainContext"
import axios from "axios"


function Main(){

	const [modalActive, setModalActive] = useState(false)
	const [isExpense, setIsExpense] = useState(false)
	const [price, setPrice] = useState()
	const [category, setCategory] = useState()
	const priceRef = useRef(price)
	const	[recordType, setRecordType] = useState()
	const {balan, edit, between} = useContext(MainContext)
	const [balance, setBalance] = balan
	const [editMode, setEditMode] = edit
	const [spaceBetweenNum] = between
//	const setBalance = useContext(MainContext)
//	const setEditMode = useContext(MainContext)
//	const editMode = useContext(MainContext)
//	const spaceBetweenNum = useContext(MainContext)
	const [startDate, setStartDate] = useState(new Date());
	

	const [list,setList] = useState([])

	
/* function spaceBetweenNum(int){
	return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
} */


useEffect(()=>{
	axios.get("https://65bf2a40dcfcce42a6f33c3b.mockapi.io/api/records")
	.then(res=>{ console.log(res.data[0]["tables"])
	}).catch(err=>{
		console.log(err)
	})
	
},[])


function deleteRecord(id, price, isExpense){

	price = parseInt(price)
	//console.log(price)
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

			
			//console.log(format(startDate, "dd.MM.yy" ))

			const updateList = [...list,{"price":price,"category":category,"isExpense":isExpense, "date":format(startDate, "dd.MM.yy" ), "id":list.length}]

			setList(updateList)

			console.log(list)

			const groups = list.reduce((groups, item) => {
				const group = (groups[item.date] || []);
				group.push(item);
				groups[item.date] = group;
				return groups;
			}, {});
			//console.log(groups)


		/* setList(list.concat(<AccountTable category={category} price={spaceBetweenNum(price)} type={isExpense} key={list.length} id={list.length} deleteRecord={(id)=>{deleteRecord(id)}}/>))
		} */
	}
	
	}

	useEffect(()=>{
		addToTable()
	},[price])


	return(
		<>
			<div className="main">
				<div className="container">
					<div className="main__wrapper">
						<div className="main__balance">
							<h2>Мои счета</h2>
							<div className="main__balance-item">
								<Balance spaceBetweenNum={spaceBetweenNum}
								></Balance>
								
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
									{
										list.map((data,i)=>{
										//console.log(list)
										return (
										<AccountTable 
											category={data.category} 
											price={data.price}
											spaceBetweenNum={spaceBetweenNum} 
											isExpense={data.isExpense} 
											key={i} 
											startDate={data.date}
											id={data.id}
											deleteRecord={(id, price, isExpense)=>{deleteRecord(id, price, isExpense)}}	
										/>)
									})
									}
									
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