function AccountTable({category, price, type}){
	return(<div>
		<span>{category}</span>
		<span>{type ? "+" : "-"}{price}</span>
	</div>)
}

export default AccountTable