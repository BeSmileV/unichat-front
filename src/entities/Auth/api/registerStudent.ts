import {sendRequest} from "@/shared/api";
import {RegistrationQueryType, RegistrationStudentRequestType} from "../types";

export async function registerStudent(query: RegistrationQueryType, data: RegistrationStudentRequestType): Promise<boolean> {
    try {
        const url = process.env.NEXT_PUBLIC_BACKEND_API + `/auth/register_student?invite_id=${query.invite_id}`
        const response = await sendRequest({url, type: 'POST', data, dropJWT: true});
        return !!response?.ok
    } catch (e) {
        console.warn('registerUniversity()', e);
        return false;
    }
}