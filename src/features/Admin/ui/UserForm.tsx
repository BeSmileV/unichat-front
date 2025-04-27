import {FormBuilder} from "indicator-ui";
import {userSchema} from "@/features/Admin/schemes";

export function UserForm() {
    return <FormBuilder schema={userSchema()}/>
}