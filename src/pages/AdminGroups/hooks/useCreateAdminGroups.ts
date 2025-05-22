import {useRef} from "react";
import {useRouter} from "next/navigation";
import {GroupPostType, postGroup} from "@/entities/Group";
import {ROUTES_CONFIG} from "@/features/Routing";

export function useCreateAdminGroups() {
    const router = useRouter()
    const formDataRef = useRef<GroupPostType | undefined>(undefined);

    const onChangeFormData = (newFormData: GroupPostType) => {
        formDataRef.current = newFormData;
    }

    const onSend = async () => {
        const formData = formDataRef.current;
        if (formData) {
            const response = await postGroup(formData);
            if (response) {
                router.push(ROUTES_CONFIG.ADMIN_GROUPS_DETAIL_SLUG + response);
            }
        }
    }

    return {
        onSend,
        onChangeFormData,
    }
}