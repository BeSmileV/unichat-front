export type CreateInstituteType = {
    name: string,
}
export type PatchInstituteType = Partial<CreateInstituteType>
export type InstituteDetailType = CreateInstituteType
export type InstitutesListItemType = CreateInstituteType
export type InstitutesListType = {
    total_count: number,
    list: Array<InstitutesListItemType>
}
