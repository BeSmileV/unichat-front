import {sendRequest} from "@/shared/api";
import {RegistrationStudentRequestType} from "../types";

export async function registerStudent(data: RegistrationStudentRequestType): Promise<boolean> {
    try {
        const url = process.env.NEXT_PUBLIC_BACKEND_API + '/auth/register_student'
        const response = await sendRequest({url, type: 'POST', data});
        return !!response?.ok
    } catch (e) {
        console.warn('registerUniversity()', e);
        return false;
    }
}