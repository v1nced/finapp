import "./Modal.scss"


function Modal({modalActive, setModalActive}){


	return(
		<>
			<div className={modalActive ? "modal active" : "modal"} onClick={()=>{setModalActive(false)}}>
				<div className="modal__content" onClick={e => e.stopPropagation()}>
					<h2>Расход</h2>
					<input type="text" />
					<h3>Категории</h3>
					<ul>
						<li>Кафе и рестораны</li>
						<li>Транспорт</li>
						<li>Жилье</li>
						<li>Продукты</li>
						<li>Здоровье</li>
					</ul>
					<button>Сохранить</button>
					<button onClick={()=>{setModalActive(false)}}>Отмена</button>
				</div>
			</div>
		</>
	)
}

export default Modal