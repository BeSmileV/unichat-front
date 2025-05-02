export type PaginationBarPropsType = {
    numPage: number,
    getCurPage: () => number,
    changePage: (page: number) => void,
    nextPage: () => void,
    prevPage: () => void,
    loadMore: () => void,
    canLoadMore: () => boolean,
    loadMoreButton?: boolean,
}