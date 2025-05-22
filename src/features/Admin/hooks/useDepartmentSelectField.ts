import {useEffect, useState} from "react";
import {SelectFieldOptionsType, SelectFieldPropsType} from "indicator-ui";
import {LIMIT_SEARCH_PARAM_DEFAULT, SKIP_SEARCH_PARAM_DEFAULT} from "@/shared/ui";
import {getDepartmentList} from "@/entities/Department";
import {DepartmentSelectPropsType, DepartmentSelectValueType} from "../types";

type PropsType = {
    instituteValue?: DepartmentSelectPropsType['instituteValue'],
    initDepartmentOptions?: DepartmentSelectPropsType['options'],
    onChangeInstituteId?: DepartmentSelectPropsType['onChangeInstituteId'],
}

export function useDepartmentSelectField({instituteValue, initDepartmentOptions, onChangeInstituteId}: PropsType) {
    const [instituteId, setInstituteId] = useState<DepartmentSelectPropsType['instituteValue'] | undefined>(instituteValue)
    const [departmentOptions, setDepartmentOptions] = useState<SelectFieldOptionsType<DepartmentSelectValueType> | undefined>(initDepartmentOptions)

    const getOptions = async (skip: number, searchString?: string | undefined) => {
        const response = await getDepartmentList({
            skip: skip,
            limit: LIMIT_SEARCH_PARAM_DEFAULT,
            filters: {name__ilike: searchString, institute_id: instituteId}
        })
        return response?.data.map(item => ({value: item.id, label: item.name}))
    }

    const pagination: SelectFieldPropsType<DepartmentSelectValueType>['pagination'] = async (optionsCount, searchString) => {
        return getOptions(optionsCount, searchString)
    }

    const searching: SelectFieldPropsType<DepartmentSelectValueType>['searching'] = async (searchString, _) => {
        return getOptions(SKIP_SEARCH_PARAM_DEFAULT, searchString)
    }

    useEffect(() => {
        const getData = async () => {
            const response = await getOptions(SKIP_SEARCH_PARAM_DEFAULT)
            setDepartmentOptions(response)
        }
        getData()
    }, [instituteId]);

    const handleChangeInstituteId: DepartmentSelectPropsType['onChangeInstituteId'] = (value) => {
        setInstituteId(value)
        onChangeInstituteId?.(value)
    }


    return {
        searching,
        pagination,
        instituteId,
        handleChangeInstituteId,
        departmentOptions,
    }
}