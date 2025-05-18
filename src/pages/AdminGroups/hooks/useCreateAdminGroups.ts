import {useRef} from "react";
import {useRouter} from "next/navigation";
import {CreateGroupType, postGroup} from "@/entities/Group";
import {ROUTES_CONFIG} from "@/features/Routing";

export function useCreateAdminGroups() {
    const router = useRouter()
    const formDataRef = useRef<CreateGroupType | undefined>(undefined);

    const onChangeFormData = (newFormData: CreateGroupType) => {
        formDataRef.current = newFormData;
    }

    const onSend = async () => {
        const formData = formDataRef.current;
        if (formData) {
            const response = await postGroup(formData);
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