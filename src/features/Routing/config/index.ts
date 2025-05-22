import {ADMIN_ROUTES} from './admin'
import {AUTH_ROUTES} from "./auth";
import {CLASSROOMS_ROUTES} from "./classrooms";
import {TASKS_ROUTES} from "./tasks";

export const ROUTES_CONFIG = {
    ...ADMIN_ROUTES,
    ...AUTH_ROUTES,
    ...CLASSROOMS_ROUTES,
    ...TASKS_ROUTES,
}