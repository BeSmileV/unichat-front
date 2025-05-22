import {useEffect, useState} from "react";
import {useSearchParamsListener} from "@/shared/hooks";
import {
    LIMIT_SEARCH_PARAM_DEFAULT,
    LIMIT_SEARCH_PARAM_NAME,
    SKIP_SEARCH_PARAM_DEFAULT,
    SKIP_SEARCH_PARAM_NAME
} from "@/shared/ui/PaginationBar";
import {ClassroomListType, getClassroomsList} from "@/entities/Classroom";

export function useClassrooms() {
    const [list, setList] = useState<ClassroomListType | undefined | null>(undefined)
    const {getSearchParams} = useSearchParamsListener()

    useEffect(() => {
        const limit = Number(getSearchParams(LIMIT_SEARCH_PARAM_NAME) || LIMIT_SEARCH_PARAM_DEFAULT)
        const skip = Number(getSearchParams(SKIP_SEARCH_PARAM_NAME) || SKIP_SEARCH_PARAM_DEFAULT)
        getClassroomsList({skip, limit}).then(setList)
    }, [getSearchParams(LIMIT_SEARCH_PARAM_NAME), getSearchParams(SKIP_SEARCH_PARAM_NAME)]);

    return {
        list,
    }
}