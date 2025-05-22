import {useRef} from "react";
import {useRouter} from "next/navigation";
import {InstituteType, postInstitute} from "@/entities/Institute";
import {ROUTES_CONFIG} from "@/features/Routing";
import {DepartmentPostType, postDepartment} from "@/entities/Department";

export function useCreateAdminDepartment() {
    const router = useRouter()
    const formDataRef = useRef<DepartmentPostType | undefined>(undefined);

    const onChangeFormData = (newFormData: DepartmentPostType) => {
        formDataRef.current = newFormData;
    }

    const onSend = async () => {
        const formData = formDataRef.current;
        if (formData) {
            const response = await postDepartment(formData);
            if (response !== null) {
                router.push(ROUTES_CONFIG.ADMIN_DEPARTMENT_DETAIL_SLUG + response);
            }
        }
    }

    return {
        onSend,
        onChangeFormData,
    }
}