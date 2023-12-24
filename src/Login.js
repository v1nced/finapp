import './Login.scss'
import { useState } from 'react'


function Login(){

	const [isCreated, setCreated] = useState(true)


	return(
		<>
			<div className="login">
				<div className="login__wrapper">
					<div className="login__box">
						{isCreated ? 
								(<form className="login__form">
									<h2>Вход</h2>
									<input type="text" placeholder="Адрес электронной почты" />
									<input type="text" placeholder="Пароль" />
									<div>
										<span onClick={()=>{setCreated(!isCreated)}}>Создать аккаунт</span>
										<button>Далее</button>
									</div>
								</form>) : 
								(<form className="login__form">
									<h2>Создайте аккаунт</h2>
									<input type="text" placeholder="Адрес электронной почты" />
									<input type="text" placeholder="Пароль" />
									<input type="text" placeholder="Потвердите пароль" />
									<div>
										<span onClick={()=>{setCreated(!isCreated)}}>Уже есть аккаунт?</span>
										<button>Далее</button>
									</div>
								</form>)
						}
							
					</div>
				</div>
			</div>
		</>
	)
}

export default Login