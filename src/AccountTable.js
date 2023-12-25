function AccountTable({category, price, type, id, deleteRecord}){
	return(<div id={id}>
		<span>{category}</span>
		<span>{type ? "-" : "+"}{price} тг.</span>
		<button onClick={(e)=>{deleteRecord(id)}}>X</button>
	</div>)
}

export default AccountTable