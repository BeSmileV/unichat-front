'use client'

import {useEffect, useRef, useState} from "react";
import {
    deleteInstitute,
    getInstituteDetail,
    InstituteDetailType,
    InstitutePatchType,
    patchInstitute
} from "@/entities/Institute";
import {useRouter} from "next/navigation";
import {ROUTES_CONFIG} from "@/features/Routing";

type PropsType = [number]

export function useDetailAdminInstitute(...args: PropsType) {
    const [id] = args
    const router = useRouter()
    const [data, setData] = useState<InstituteDetailType | null | undefined>(undefined)
    const formDataRef = useRef<InstitutePatchType | undefined>(undefined);

    useEffect(() => {
        getInstituteDetail(id).then(setData)
    }, []);

    const onChangeFormData = (data: InstitutePatchType) => {
        formDataRef.current = data
    }

    const onUpdate = async () => {
        const formData = formDataRef.current;
        if (formData) {
            const response = await patchInstitute({id, data: formData});
        }
    }

    const onDelete = async () => {
        const response = await deleteInstitute(id);
        if (response) {
            router.replace(ROUTES_CONFIG.ADMIN_INSTITUTE);
        }
    }

    return {
        data,
        onUpdate,
        onDelete,
        onChangeFormData,
    }
}