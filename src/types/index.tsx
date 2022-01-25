// сбор данных авторизации.
export type AuthDataType = {
  email: string | null
  password: string | null
};


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

export interface FilterType {
  term: string
  friends: null | boolean
}

export interface UserType {
  name: string
  id: number
  photos: {
    small: string | null,
    large: string | null
  }
  status: string | null
  followed: boolean
}


// Music
export interface CommentType {
  username: string;
  text: string;
  trackId: number;
}

export interface TrackType {
  comments: CommentType[] | null
  _id: number | null
  name: string | null
  artist: string | null
  listens: number | null
  audio: string | null
  picture: string | null
  time: number | null
}
