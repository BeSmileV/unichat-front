import {SelectFieldPropsType} from "indicator-ui";
import {LIMIT_SEARCH_PARAM_DEFAULT, SKIP_SEARCH_PARAM_DEFAULT} from "@/shared/ui";
import {getInstituteList} from "@/entities/Institute";
import {InstituteSelectValueType} from "../types";
import {useRef} from "react";

export function useInstituteSelectField() {
    const firstPaginateRef = useRef(false);

    const pagination: SelectFieldPropsType<InstituteSelectValueType>['pagination'] = async (optionsCount, searchString) => {
        const response = await getInstituteList({
            skip: firstPaginateRef.current ? optionsCount : SKIP_SEARCH_PARAM_DEFAULT,
            limit: LIMIT_SEARCH_PARAM_DEFAULT,
            filters: {name__ilike: searchString}
        })
        firstPaginateRef.current = true;
        return response?.data.map(item => ({value: item.id, label: item.name}))
    }

    const searching: SelectFieldPropsType<InstituteSelectValueType>['searching'] = async (searchString, _) => {
        const response = await getInstituteList({
            skip: SKIP_SEARCH_PARAM_DEFAULT,
            limit: LIMIT_SEARCH_PARAM_DEFAULT,
            filters: {name__ilike: searchString}
        })
        return response?.data.map(item => ({value: item.id, label: item.name}))
    }

    return {
        searching,
        pagination,
    }
}