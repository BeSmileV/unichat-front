import {usePathname} from "next/navigation";
import {ROUTES_CONFIG} from "@/features/Routing";

type PageType = 'students' | 'teachers' | 'institutes' | 'departments' | 'groups' | 'invites' | undefined
type ReturnType = {pageType: PageType, url?: string | undefined}

export function useAdminHeader(): ReturnType {
    const pathname = usePathname()

    if (pathname) {
        if (pathname.startsWith(ROUTES_CONFIG.ADMIN_STUDENT)) {
            return {pageType:'students', url: undefined}
        }
        if (pathname.startsWith(ROUTES_CONFIG.ADMIN_TEACHER)) {
            return {pageType:'teachers', url: undefined}
        }
        if (pathname.startsWith(ROUTES_CONFIG.ADMIN_INSTITUTE)) {
            return {pageType:'institutes', url: ROUTES_CONFIG.ADMIN_INSTITUTE_CREATE}
        }
        if (pathname.startsWith(ROUTES_CONFIG.ADMIN_DEPARTMENT)) {
            return {pageType:'departments', url: ROUTES_CONFIG.ADMIN_DEPARTMENT_CREATE}
        }
        if (pathname.startsWith(ROUTES_CONFIG.ADMIN_GROUPS)) {
            return {pageType:'groups', url: ROUTES_CONFIG.ADMIN_GROUPS_CREATE}
        }
        if (pathname.startsWith(ROUTES_CONFIG.ADMIN_INVITES)) {
            return {pageType:'invites', url: undefined}
        }
    }
    return {pageType: undefined}
}