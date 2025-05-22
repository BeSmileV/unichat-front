'use client'

import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import {deleteDepartment, DepartmentPatchType, getDepartmentDetail, patchDepartment} from "@/entities/Department";
import {ROUTES_CONFIG} from "@/features/Routing";
import {InstituteSelectPropsType} from "@/features/Admin";

type PropsType = [number]

export function useDetailAdminDepartment(...args: PropsType) {
    const [id] = args
    const router = useRouter()
    const [data, setData] = useState<DepartmentPatchType | null | undefined>(undefined)
    const formDataRef = useRef<DepartmentPatchType | undefined>(undefined);
    const [instituteOptions, setInstituteOptions] = useState<InstituteSelectPropsType['options'] | undefined>(undefined)

    useEffect(() => {
        const getData = async () => {
            const response = await getDepartmentDetail(id)
            if (!response) setData(response)

            if (response) {
                setInstituteOptions([{value: response.institute.id, label: response.institute.name}])
            }
            setData({...response, institute_id: response?.institute.id})
        }
        getData()
    }, []);

    const onChangeFormData = (data: DepartmentPatchType) => {
        formDataRef.current = data
    }

    const onUpdate = async () => {
        const formData = formDataRef.current;
        if (formData) {
            const response = await patchDepartment({id, data: formData});
        }
    }

    const onDelete = async () => {
        const response = await deleteDepartment(id);
        if (response) {
            router.replace(ROUTES_CONFIG.ADMIN_DEPARTMENT);
        }
    }

    return {
        data,
        instituteOptions,
        onUpdate,
        onDelete,
        onChangeFormData,
    }
}