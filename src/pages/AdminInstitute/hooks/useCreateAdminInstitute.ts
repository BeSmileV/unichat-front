import {useRef} from "react";
import {useRouter} from "next/navigation";
import {InstitutePostType, InstituteType, postInstitute} from "@/entities/Institute";
import {ROUTES_CONFIG} from "@/features/Routing";

export function useCreateAdminInstitute() {
    const router = useRouter()
    const formDataRef = useRef<InstitutePostType | undefined>(undefined);

    const onChangeFormData = (newFormData: InstitutePostType) => {
        formDataRef.current = newFormData;
    }

    const onSend = async () => {
        const formData = formDataRef.current;
        if (formData) {
            const response = await postInstitute(formData);
            if (response !== null) {
                router.push(ROUTES_CONFIG.ADMIN_INSTITUTE_DETAIL_SLUG + response);
            }
        }
    }

    return {
        onSend,
        onChangeFormData,
    }
}