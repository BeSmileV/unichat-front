'use client'

import {PaginationBar} from 'indicator-ui'
import {useSearchParamsListener} from "@/shared/hooks";
import {LIMIT_SEARCH_PARAM_NAME, PAGINATION_STEP, SKIP_SEARCH_PARAM_NAME} from "../config";

export function PaginationComponent({
                                        totalCount,
                                        limitName = LIMIT_SEARCH_PARAM_NAME,
                                        skipName = SKIP_SEARCH_PARAM_NAME,
                                        paginationStep = PAGINATION_STEP,
                                        loadMoreButton = true
                                    }:
                                        {
                                            /**
                                             * Количество элементов.
                                             * */
                                            totalCount: number,
                                            limitName?: string,
                                            skipName?: string,
                                            paginationStep?: number,
                                            loadMoreButton?: boolean,
                                        }) {
    const {getSearchParams, setSearchParams} = useSearchParamsListener()

    const getCurPage = () => {
        const limit = Number(getSearchParams(limitName)) || paginationStep
        const skip = Number(getSearchParams(skipName)) || 0
        const sum = skip + limit
        return Math.ceil((sum > totalCount ? totalCount : sum) / paginationStep)
    }

    const changePage = (page: number) => {
        const limitPage = Math.ceil(totalCount / paginationStep)
        if (page <= limitPage && page > 0) {
            const limit = paginationStep
            const skip = (page - 1) * paginationStep
            setSearchParams({
                [limitName]: String(limit),
                [skipName]: String(skip)
            })
        }
    }

    const nextPage = () => {
        const curPage = getCurPage()
        changePage(curPage + 1)
    }

    const prevPage = () => {
        const curPage = getCurPage()
        changePage(curPage - 1)
    }

    const loadMore = () => {
        const limitPage = Math.ceil(totalCount / paginationStep)
        const curPage = getCurPage()

        if (curPage < limitPage && curPage > 0) {
            const limit = paginationStep * (curPage + 1)
            setSearchParams({[limitName]: String(limit)})
        }
    }

    const canLoadMore = () => {
        const limitPage = Math.ceil(totalCount / paginationStep)
        const curPage = getCurPage()
        return curPage < limitPage
    }

    const getNumPages = () => {
        return Math.ceil(totalCount / paginationStep)
    }

    return <PaginationBar numPage={getNumPages()}
                          getCurPage={getCurPage}
                          changePage={changePage}
                          nextPage={nextPage}
                          prevPage={prevPage}
                          loadMore={loadMore}
                          loadMoreButton={loadMoreButton}
                          canLoadMore={canLoadMore}/>
}