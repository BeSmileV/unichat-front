'use client'

import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {deleteGroup, getGroupDetail, GroupPatchType, patchGroup} from "@/entities/Group";
import {ROUTES_CONFIG} from "@/features/Routing";
import {DepartmentSelectPropsType} from "@/features/Admin";

type PropsType = [number]

export function useDetailAdminGroup(...args: PropsType) {
    const [id] = args
    const router = useRouter()
    const [data, setData] = useState<GroupPatchType | null | undefined>(undefined)
    const formDataRef = useRef<GroupPatchType | undefined>(undefined);
    const [instituteOptions, setInstituteOptions] = useState<DepartmentSelectPropsType['instituteOptions'] | undefined>(undefined)
    const [instituteValue, setInstituteValue] = useState<DepartmentSelectPropsType['instituteValue'] | undefined>(undefined)
    const [departmentOptions, setDepartmentOptions] = useState<DepartmentSelectPropsType['options'] | undefined>(undefined)

    useEffect(() => {
        const getData = async () => {
            const response = await getGroupDetail(id)
            if (response) {
                setInstituteOptions([{
                    value: response.department.institute.id,
                    label: response.department.institute.name
                }])
                setInstituteValue(response.department.institute.id)
                setDepartmentOptions([{value: response.department.id, label: response.department.name}])
                setData({...response, department_id: response.department.id})
            } else {
                setData(null)
            }
        }
        getData()
    }, []);

    const onChangeFormData = (data: GroupPatchType) => {
        formDataRef.current = data
    }

    const onUpdate = async () => {
        const formData = formDataRef.current;
        if (formData) {
            const response = await patchGroup({id, data: formData});
        }
    }

    const onDelete = async () => {
        const response = await deleteGroup(id);
        if (response) {
            router.replace(ROUTES_CONFIG.ADMIN_GROUPS);
        }
    }

    return {
        data,
        instituteValue,
        instituteOptions,
        departmentOptions,
        onUpdate,
        onDelete,
        onChangeFormData,
    }
}