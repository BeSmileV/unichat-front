import {sendRequest} from "@/shared/api";
import {RegistrationUniversityRequestType} from "../types";

export async function registerUniversity(data: RegistrationUniversityRequestType): Promise<boolean> {
    try {
        const url = process.env.NEXT_PUBLIC_BACKEND_API + '/auth/register_university'
        const response = await sendRequest({url, type: 'POST', data, dropJWT: true});
        return !!response?.ok
    } catch (e) {
        console.warn('registerUniversity()', e);
        return false;
    }
}