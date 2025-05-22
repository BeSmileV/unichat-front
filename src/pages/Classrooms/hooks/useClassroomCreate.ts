import {useRef} from "react";
import {useRouter} from "next/navigation";
import {ClassroomPostType, postClassroom} from "@/entities/Classroom";
import {ROUTES_CONFIG} from "@/features/Routing";

export function useClassroomCreate() {
    const router = useRouter()
    const formDataRef = useRef<ClassroomPostType | undefined>(undefined);

    const onChangeFormData = (newFormData: ClassroomPostType) => {
        formDataRef.current = newFormData;
    }

    const onSubmit = async () => {
        if (formDataRef.current) {
            const response = await postClassroom(formDataRef.current);
            if (response !== null) {
                router.replace(ROUTES_CONFIG.CLASSROOMS_DETAIL_SLUG_PAGE + response);
            }
        }
    }

    return {
        onChangeFormData,
        onSubmit,
    }
}