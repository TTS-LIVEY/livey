export interface LoginDTO {
  username: string
  password: string
}

export interface RegisterDTO {
  username: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}

export interface userDataDTO {
  id: string
  username: string
  name: string
  register_date: string
}

export interface ContentDTO {
  id: number
  videoTitle: string
  videoUrl: string
  thumbnailUrl: string
}

export interface ContentsDTO {
  data: ContentDTO[]
}
