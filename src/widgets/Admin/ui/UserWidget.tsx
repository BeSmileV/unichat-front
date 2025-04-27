import {Button} from "indicator-ui";
import {UserForm} from "@/features/Admin";

export function UserWidget() {
    return (
        <div>
            <h1>Данные учетной записи</h1>
            <UserForm/>
            <div>
                <Button size={'large'}
                        hierarchy={'primary'}
                        text={'Сохранить'}/>
            </div>
        </div>
    )
}