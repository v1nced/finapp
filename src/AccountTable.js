
function AccountTable({category, price, isExpense, id, deleteRecord, spaceBetweenNum, startDate}){

	

	return(<div id={id}>
		<span>{category}</span>
		<span>{isExpense ? "-" : "+"}{spaceBetweenNum(price)} тг.</span>
		<span>{startDate}</span>
		<button onClick={(e)=>{deleteRecord(id, price, isExpense)}}>X</button>
	</div>)
}

export default AccountTable

