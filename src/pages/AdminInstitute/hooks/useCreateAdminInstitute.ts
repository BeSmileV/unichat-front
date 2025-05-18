import {useRef} from "react";
import {useRouter} from "next/navigation";
import {CreateInstituteType, postInstitute} from "@/entities/Institute";
import {ROUTES_CONFIG} from "@/features/Routing";

export function useCreateAdminInstitute() {
    const router = useRouter()
    const formDataRef = useRef<CreateInstituteType | undefined>(undefined);

    const onChangeFormData = (newFormData: CreateInstituteType) => {
        formDataRef.current = newFormData;
    }

    const onSend = async () => {
        const formData = formDataRef.current;
        if (formData) {
            const response = await postInstitute(formData);
            if (response) {
                router.push(ROUTES_CONFIG.ADMIN_INSTITUTE);
            }
        }
    }

    return {
        onSend,
        onChangeFormData,
    }
}