export interface LoginDTO {
  username: string
  password: string
}

export interface RegisterDTO {
  name: string
  username: string
  password: string
  body_height: number | null
  body_weight: number | null
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

export interface videoHistoryDTO {
  video_title: string
  video_thumnail: string
  video_url: string
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
