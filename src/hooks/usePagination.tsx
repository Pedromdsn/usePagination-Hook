import { useState } from "react"

export interface UsePaginationProps {
	contentPerPage: number
	totalCount: number
}

export interface UsePaginationReturn {
	page: number
	totalPages: number
	setPage: (page: number) => void
	nextPage: () => void
	prevPage: () => void
	firstContentIndex: number
	lastContentIndex: number
}

export type UsePagination = (UsePaginationProps: UsePaginationProps) => UsePaginationReturn

const usePagination: UsePagination = ({ contentPerPage, totalCount }) => {
	const [page, setPage] = useState(1)
	const pageCount = Math.ceil(totalCount / contentPerPage)
	const lastContentIndex = page * contentPerPage
	const firstContentIndex = lastContentIndex - contentPerPage

	enum Direction {
		Down,
		UP,
	}

	const changePage = (direction: Direction) => {
		setPage((state) => {
			if (direction === Direction.UP) {
				if (state === pageCount) return state
				return state + 1
			}
			if (state === 1) return state
			return state - 1
		})
	}

	const setPageSAFE = (num: number) => {
		if (num > pageCount) return setPage(pageCount)
		if (num < 1) return setPage(1)
		return setPage(num)
	}

	return {
		totalPages: pageCount,
		nextPage: () => changePage(Direction.UP),
		prevPage: () => changePage(Direction.Down),
		setPage: setPageSAFE,
		firstContentIndex,
		lastContentIndex,
		page,
	}
}

export default usePagination
