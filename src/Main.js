import { useState } from "react"
import "./Main.scss"
import Modal from "./Modal"

function Main(){

	const [modalActive, setModalActive] = useState(false)


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
								<button>Доход</button>
								<button onClick={()=>{setModalActive(true)}}>Расход</button>
							</div>
							<div className="main__accounting-table">
								<div className="main__accounting-table-item">
									<span>Еда</span>
									<span>20 000 тг</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal modalActive={modalActive} setModalActive={setModalActive}/>
		</>
	)
}

export default Main