export type PostType = {
    id: number
    message: string
}

export type ProfileTitleType = {
    aboutMe: string
    biography: string
    contact: string
    work: string
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large: string
}

export type ProfileDataType = {
    usedId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type ProfileType = {
    status: string
    isOwner: boolean
    title: ProfileTitleType
    data: ProfileDataType | object
}

export type UsersType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: PhotosType
}

export type NamesType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type navDataType = {
    id: number
    link: string
    text: string
}