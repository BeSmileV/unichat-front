import {ADMIN_ROUTES} from './admin'
import {AUTH_ROUTES} from "./auth";


export const ROUTES_CONFIG = {
    ...ADMIN_ROUTES,
    ...AUTH_ROUTES,
}