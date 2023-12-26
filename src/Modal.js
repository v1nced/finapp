import "./Modal.scss"
import { useRef, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru)
setDefaultLocale('ru');

function Modal({modalActive,setModalActive,isExpense, price, setPrice, category, setCategory, recordType, setRecordType, startDate, setStartDate}){

//const [category, setCategory] = useState()
//const [price, setPrice] = useState()
const refPrice = useRef()
const refCategory = useRef()


	

function CategoryButton(props) {
	

	const handleClick = (e) =>{
		refCategory.current = e.target.textContent
	}

	return(
		<button onClick={handleClick}>{props.children}</button>
	)
}

function saveChanges(){
	setCategory(refCategory.current)
	setPrice(parseInt(refPrice.current))
	setModalActive(false)
	//console.log(price,category)
	
}



function ModalExpenses(){
	

	return(
		<>
			<h2>Расход</h2>
			<input type="text" onChange={(e)=>{refPrice.current = e.target.value}} />
			<DatePicker dateFormat="P" selected={startDate} onChange={(date)=>{console.log(date)
				setStartDate(date)}}/>
			<h3>Категории</h3>
			<ul>
				<CategoryButton>Кафе и рестораны</CategoryButton>
				<CategoryButton>Транспорт</CategoryButton>
				<CategoryButton>Жилье</CategoryButton>
				<CategoryButton>Продукты</CategoryButton>
				<CategoryButton>Здоровье</CategoryButton>
			</ul>
			<button onClick={saveChanges}>Сохранить</button>
			<button onClick={()=>{setModalActive(false)}}>Отмена</button>
		</>
	)
}

function ModalIncomes(){
	return(
			<>
			<h2>Доход</h2>
			<input type="tel" pattern="^-?[0-9]\d*\.?\d*$" onChange={(e)=>{refPrice.current = e.target.value}}/>
			<DatePicker dateFormat="P" selected={startDate} onChange={(date)=>{setStartDate(date)}}/>
			<h3>Категории</h3>
			<ul>
				<CategoryButton>Зарплата</CategoryButton>
				<CategoryButton>Депозит</CategoryButton>
				<CategoryButton>Премия</CategoryButton>
				<CategoryButton>Подарок</CategoryButton>
				<CategoryButton>Прибыль от продажи</CategoryButton>
			</ul>
			<button onClick={saveChanges}>Сохранить</button>
			<button onClick={()=>{setModalActive(false)}}>Отмена</button>
		</>
	)
}





	


	return(
		<>
			<div className={modalActive ? "modal active" : "modal"} onClick={()=>{setModalActive(false)}}>
				<div className="modal__content" onClick={e => e.stopPropagation()}>
					{isExpense ? <ModalExpenses/> : <ModalIncomes/>}
					
				</div>
			</div>
		</>
	)
}

export default Modal