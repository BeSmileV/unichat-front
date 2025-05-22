export type InstituteType = {
    id: number,
    name: string,
    university: {
        id: number,
        name: string
    }
}
export type InstitutePostType = Omit<InstituteType, 'id' | 'university'>
export type InstitutePatchType = Partial<InstitutePostType>
export type InstituteDetailType = InstituteType
export type InstitutesListType = {
    total_count: number,
    data: Array<InstituteDetailType>
}
export type InstitutesListFiltersType = {
    name__ilike?: string,
    university_id?: number,
    order_by?: `${'-' | ''}${keyof Omit<InstituteType, 'university'>}`
}