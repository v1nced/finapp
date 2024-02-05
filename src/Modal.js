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
const refDate = useRef()

function DateChoose(){
	const [date, setDate] = useState(new Date())
	refDate.current = date
	return <DatePicker dateFormat="P" selected={date} onChange={(date)=>{
				setDate(date)
				refDate.current = date
				}}/>
}
	

function CategoryButton(props) {
	

	const handleClick = (e) =>{
		refCategory.current = e.target.textContent
	}

	return(
		<button onClick={handleClick}>{props.children}</button>
	)
}

function saveChanges(){
	if (!refCategory.current){
		alert("Choose Category")
	}
	else if(!refPrice.current){
		alert("Set Price")
	}
	else{
	setCategory(refCategory.current)
	setPrice(parseInt(refPrice.current))
	setStartDate(refDate.current)
	setModalActive(false)

	}
	
	
}

function ModalAccount({title, children}){
	refCategory.current = null
	refPrice.current = null
	
	return(<>
		<h2>{title}</h2>
			<input type="tel" pattern="^-?[0-9]\d*\.?\d*$" onChange={(e)=>{refPrice.current = e.target.value}}/>
			<DateChoose ></DateChoose>
			<h3>Категории</h3>
			<ul>
				{children}
			</ul>
			<button onClick={saveChanges}>Сохранить</button>
			<button onClick={()=>{setModalActive(false)}}>Отмена</button>
	</>)
}

	return(
		<>
			<div className={modalActive ? "modal active" : "modal"} onClick={()=>{setModalActive(false)}}>
				<div className="modal__content" onClick={e => e.stopPropagation()}>
					{isExpense ?
					<ModalAccount title="Расход">
						<CategoryButton>Кафе и рестораны</CategoryButton>
						<CategoryButton>Транспорт</CategoryButton>
						<CategoryButton>Жилье</CategoryButton>
						<CategoryButton>Продукты</CategoryButton>
						<CategoryButton>Здоровье</CategoryButton>
					</ModalAccount>
					: 
					<ModalAccount title="Доход">
						<CategoryButton>Зарплата</CategoryButton>
						<CategoryButton>Депозит</CategoryButton>
						<CategoryButton>Премия</CategoryButton>
						<CategoryButton>Подарок</CategoryButton>
						<CategoryButton>Прибыль от продажи</CategoryButton>
					</ModalAccount>					
					}

				</div>
			</div>
		</>
	)
}

export default Modal