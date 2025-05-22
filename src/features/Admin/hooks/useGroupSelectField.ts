import {useEffect, useState} from "react";
import {SelectFieldPropsType} from "indicator-ui";
import {LIMIT_SEARCH_PARAM_DEFAULT, SKIP_SEARCH_PARAM_DEFAULT} from "@/shared/ui";
import {getGroupList} from "@/entities/Group";
import {GroupSelectPropsType, GroupSelectValueType} from "../types";

type PropsType = {
    instituteValue?: GroupSelectPropsType['instituteValue'],
    departmentValue?: GroupSelectPropsType['departmentValue'],
    initGroupOptions?: GroupSelectPropsType['options']
}

export function useGroupSelectField({departmentValue, initGroupOptions, instituteValue}: PropsType) {
    const [instituteId, setInstituteId] = useState<GroupSelectPropsType['instituteValue'] | undefined>(instituteValue)
    const [departmentId, setDepartmentId] = useState<GroupSelectPropsType['departmentValue'] | undefined>(departmentValue)
    const [groupOptions, setGroupOptions] = useState<GroupSelectPropsType['options'] | undefined>(initGroupOptions)

    const getOptions = async (skip: number, searchString?: string | undefined) => {
        const response = await getGroupList({
            skip: skip,
            limit: LIMIT_SEARCH_PARAM_DEFAULT,
            filters: {name__ilike: searchString, department_id: departmentId, institute_id: instituteId}
        })
        return response?.data.map(item => ({value: item.id, label: item.name}))
    }

    const pagination: SelectFieldPropsType<GroupSelectValueType>['pagination'] = async (optionsCount, searchString) => {
        return getOptions(optionsCount, searchString)
    }

    const searching: SelectFieldPropsType<GroupSelectValueType>['searching'] = async (searchString, _) => {
        return getOptions(SKIP_SEARCH_PARAM_DEFAULT, searchString)
    }

    useEffect(() => {
        const getData = async () => {
            const response = await getOptions(SKIP_SEARCH_PARAM_DEFAULT)
            console.log(response)
            setGroupOptions(response)
        }
        getData()
    }, [departmentId, instituteId]);

    return {
        searching,
        pagination,
        departmentId,
        instituteId,
        setInstituteId,
        setDepartmentId,
        groupOptions,
    }
}