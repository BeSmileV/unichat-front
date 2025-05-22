import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useSearchParamsListener} from "@/shared/hooks";
import {
    LIMIT_SEARCH_PARAM_DEFAULT,
    LIMIT_SEARCH_PARAM_NAME,
    SKIP_SEARCH_PARAM_DEFAULT,
    SKIP_SEARCH_PARAM_NAME,
    TableBodyType,
    TableHeaderType
} from "@/shared/ui";
import {ROUTES_CONFIG} from "@/features/Routing";
import {DepartmentsListType, getDepartmentList} from "@/entities/Department";

export function useListAdminDepartment() {
    const router = useRouter()
    const [data, setData] = useState<DepartmentsListType | null | undefined>(undefined)
    const {setSearchParams, getSearchParams} = useSearchParamsListener()

    useEffect(() => {
        const getData = async () => {
            const skip = Number(getSearchParams(SKIP_SEARCH_PARAM_NAME) || SKIP_SEARCH_PARAM_DEFAULT)
            const limit = Number(getSearchParams(LIMIT_SEARCH_PARAM_NAME) || LIMIT_SEARCH_PARAM_DEFAULT)
            const response = await getDepartmentList({skip, limit})
            setData(response)
        }
        getData()
    }, [getSearchParams(SKIP_SEARCH_PARAM_NAME), getSearchParams(LIMIT_SEARCH_PARAM_NAME)]);


    const header: TableHeaderType = [
        {type: 'description', label: 'id'},
        {type: 'description', label: 'Название'},
        {type: 'description', label: 'Институт'},
    ]

    const body: TableBodyType | undefined = data?.data?.map(item => {
        return [
            {type: 'field', label: item.id},
            {type: 'field', label: item.name},
            {type: 'field', label: item.institute.name}
        ]
    })

    const onClickRow = (idx: number) => {
        const id = data?.data[idx]?.id
        if (id !== undefined) {
            router.push(ROUTES_CONFIG.ADMIN_DEPARTMENT_DETAIL_SLUG + `${id}`)
        }
    }

    return {
        data,
        header,
        body,
        onClickRow,
    }
}