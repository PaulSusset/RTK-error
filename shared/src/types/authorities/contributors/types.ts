import { TechData } from '../types'

export interface Contributor {
  identification: ContrIdentification
  name: ContrName
  other: ContrOtherInfo
  administration: ContrAdministration
}

export interface ContrIdentification {
  uuid: string
  type: string
  idBTLF: string
  otherIds: ContrOtherIds[]
  source: 'ELECTRE' | 'BTLF'
}

export interface ContrName extends ContrNameFormat {
  variants: ContrNameFormat[]
}

export interface ContrNameFormat {
  lastName: string
  firstName: string
  title?: string
  particle?: string
  suffix?: string
}

export interface ContrNameVariant extends ContrNameFormat {
  startDate?: string
  endDate?: string
}

export interface ContrOtherInfo {
  dates: ContrDate[]
  places: ContrPlace[]
  languages: ContrLanguage[]
  gender?: string
  awards: ContrAwards[]
  pseudonyms: ContrPseudonym[]
}

export interface ContrAdministration extends TechData {
  isniStatus: string
}

export interface ContrDate {
  type: string
  date: string
}

export interface ContrPlace {
  type: string
  name?: string
  territory: string
  territoryCode: string
}

export interface ContrAwards {
  award: string
  year: string
}

export interface ContrLanguage {
  language: string
}
export interface ContrPseudonym {
  pseudonym: string
}

export interface ContrOtherIds {
  type: string
  id: string
}

export interface CollLevel {
  level: string
}
