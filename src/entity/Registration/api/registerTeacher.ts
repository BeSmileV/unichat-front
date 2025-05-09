import {sendRequest} from "@/shared/api";
import {RegistrationTeacherRequestType} from "../types";

export async function registerTeacher(data: RegistrationTeacherRequestType): Promise<boolean> {
    try {
        const url = process.env.NEXT_PUBLIC_BACKEND_API + '/auth/register_teacher'
        const response = await sendRequest({url, type: 'POST', data});
        return !!response?.ok
    } catch (e) {
        console.warn('registerUniversity()', e);
        return false;
    }
}