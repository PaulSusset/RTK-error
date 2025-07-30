import { BaseVariant } from 'notistack'

export interface AuthorityBase {
  nom: string
  uuid: string
  type: string
}

export type CreationDataAdmin = {
  outcome: OutcomeOptions
  outcome_uuid?: string
  tech_user: string
  last_modified: string
}

export type CreationDataBase = {
  demandeur_name: string

  date_demande: string
  uuid: string
  ISBN?: string
}

export type CreationDataCommon = CreationDataBase & CreationDataAdmin

export type OutcomeOptions = keyof typeof outcomeOptions
export const outcomeOptions = {
  pending: { label: 'En attente', variant: 'default' },
  rejected: { label: 'Rejetée', variant: 'default' },
  linked: { label: 'Liée', variant: 'success' },
  created: { label: 'Créée', variant: 'success' },
} satisfies {
  [key: string]: { label: string; variant: BaseVariant }
}

export interface TechData {
  creationDate: string //tech_crea
  lastModified: string //tech_modif
  techUser: string //tech_user
}
