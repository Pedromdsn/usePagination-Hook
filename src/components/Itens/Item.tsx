interface ItemProps {
	element: User
}

const Item = ({ element }: ItemProps) => {
	return (
		<div className="item" key={element.uid}>
			<img
				src={`https://avatars.dicebear.com/api/big-smile/${element.first_name}.svg`}
				alt={`${element.username} profile`}
				className="item__img"
			/>
			<div className="item__info">
				<p className="name">
					{element.first_name} {element.last_name} <span className="username">(@{element.username})</span>
				</p>
				<p className="job">{element.employment.title}</p>
				<p
					className={`status ${
						element.subscription.status.toLowerCase() === "active"
							? "success"
							: element.subscription.status.toLowerCase() === "blocked"
							? "danger"
							: "warn"
					}`}>
					{element.subscription.status}
				</p>
			</div>
		</div>
	)
}

export default Item
