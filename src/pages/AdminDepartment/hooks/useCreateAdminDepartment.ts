import {useRef} from "react";
import {useRouter} from "next/navigation";
import {CreateDepartmentType, postDepartment} from "@/entities/Department";
import {ROUTES_CONFIG} from "@/features/Routing";

export function useCreateAdminDepartment() {
    const router = useRouter()
    const formDataRef = useRef<CreateDepartmentType | undefined>(undefined);

    const onChangeFormData = (newFormData: CreateDepartmentType) => {
        formDataRef.current = newFormData;
    }

    const onSend = async () => {
        const formData = formDataRef.current;
        if (formData) {
            const response = await postDepartment(formData);
            if (response) {
                router.push(ROUTES_CONFIG.ADMIN_GROUPS);
            }
        }
    }

    return {
        onSend,
        onChangeFormData,
    }
}