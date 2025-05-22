import {useEffect, useState} from "react";
import {useSearchParamsListener} from "@/shared/hooks";
import {
    LIMIT_SEARCH_PARAM_DEFAULT,
    LIMIT_SEARCH_PARAM_NAME,
    SKIP_SEARCH_PARAM_DEFAULT,
    SKIP_SEARCH_PARAM_NAME
} from "@/shared/ui/PaginationBar";
import {ClassroomDetailType, getClassroomDetail} from "@/entities/Classroom";
import {getTasksList, TaskListType} from "@/entities/Task";


type PropsType = [number]

export function useClassroomDetail(...args: PropsType) {
    const [id] = args
    const [classroom, setClassroom] = useState<ClassroomDetailType | undefined | null>(undefined)
    const [list, setList] = useState<TaskListType | undefined | null>(undefined)
    const {getSearchParams} = useSearchParamsListener()

    useEffect(() => {
        const limit = Number(getSearchParams(LIMIT_SEARCH_PARAM_NAME) || LIMIT_SEARCH_PARAM_DEFAULT)
        const skip = Number(getSearchParams(SKIP_SEARCH_PARAM_NAME) || SKIP_SEARCH_PARAM_DEFAULT)

        getClassroomDetail(id).then(setClassroom)
        getTasksList({classroomId: id, skip, limit}).then(setList)
    }, [getSearchParams(LIMIT_SEARCH_PARAM_NAME), getSearchParams(SKIP_SEARCH_PARAM_NAME)]);

    return {
        classroom,
        list,
    }
}