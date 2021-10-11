import { useContext } from "react"
import { PaginationContext } from "../../context/PaginationContext"
import { PeopleContext } from "../../context/PeopleContext"

const Itens = () => {
	const { firstContentIndex, lastContentIndex } = useContext(PaginationContext)
	const { people } = useContext(PeopleContext)
	return (
		<div className="items">
			{people.slice(firstContentIndex, lastContentIndex).map((el: any) => (
				<div className="item" key={el.uid}>
					<img
						src={`https://avatars.dicebear.com/api/big-smile/${el.first_name}.svg`}
						alt={`${el.username} profile`}
						className="item__img"
					/>
					<div className="item__info">
						<p className="name">
							{el.first_name} {el.last_name} <span className="username">(@{el.username})</span>
						</p>
						<p className="job">{el.employment.title}</p>
						<p
							className={`status ${
								el.subscription.status.toLowerCase() === "active"
									? "success"
									: el.subscription.status.toLowerCase() === "blocked"
									? "danger"
									: "warn"
							}`}>
							{el.subscription.status}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Itens
