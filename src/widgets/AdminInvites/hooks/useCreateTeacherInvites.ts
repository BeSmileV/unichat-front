import {useRef, useState} from "react";
import {invite, InviteTeacherRequestBodyType} from "@/entities/Auth";
import {
    REGISTRATION_INVITE_ID_PARAM_NAME,
    REGISTRATION_TYPE,
    REGISTRATION_TYPE_PARAM_NAME
} from "@/features/Registration";
import {ROUTES_CONFIG} from "@/features/Routing";

export function useCreateTeacherInvites() {
    const formDataRef = useRef<InviteTeacherRequestBodyType | undefined>(undefined);
    const [inviteUrl, setInviteUrl] = useState<string | undefined>(undefined);

    const onChangeFormData = (data: InviteTeacherRequestBodyType) => {
        formDataRef.current = {...data, role: 'TEACHER'};
    }

    const onSend = async () => {
        const formData = formDataRef.current
        if (formData) {
            const response = await invite({
                invite_body: formData,
                register_url: process.env.NEXT_PUBLIC_NEXT_JS_URL
                    + ROUTES_CONFIG.REGISTRATION_PAGE
                    + `/?${REGISTRATION_TYPE_PARAM_NAME}=${REGISTRATION_TYPE.TEACHER}&${REGISTRATION_INVITE_ID_PARAM_NAME}=`
            })
            if (response) {
                setInviteUrl(response)
            }
        }
    }

    const onCopy = () => {
        if (inviteUrl) {
            navigator.clipboard.writeText(inviteUrl)
        }
    }

    return {
        inviteUrl,
        onCopy,
        onSend,
        onChangeFormData,
    }
}