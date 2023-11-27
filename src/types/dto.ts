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
  name: string
  username: string
  registered_date: string
  body_weight: number
  body_height: number
}

export interface videoHistoryDTO {
  video_title: string
  video_thumnail: string
  video_url: string
}
export interface ContentDTO {
  content_id: number
  thumbnail_url: string
  video_title: string
  video_url: string
  video_type: string
  body_part: string
  program_title: string
  schedule_title: string
  History: []
}

export interface JournalCreateDTO {
  journal_rating: number | null
  journal_note: string | null
  journal_weight: number | null
}

export interface JournalDTO {
  journal_id: string
  journal_note: string
  journal_rating: number
  journal_weight: number
  updated_at: string
  date_add: string
  userId: string
}

export interface HistoryCreateDTO {
  contentId: number
}
