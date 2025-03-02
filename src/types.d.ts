export interface PropsCard{
  title:string;
  content?:string;
  children?:JSX.Element | JSX.Element[]
}

export interface Tag{
  name:string,
  class:string,
  icon:JSX.Element
}
export interface PropsCardProject {
  title:string,
  description:string,
  link?:string,
  github?:string,
  image:string, 
  className:string, 
  key:string
  tags:Tag[]
}

export type ListProjectsType = PropsCardProject[] 

export interface PropsInfoDataItem {
  text: string
  icon: JSX.Element
  linkType?: string
}

export interface PropsLinkNav {
  name:string
  icon:JSX.Element
 }

 export interface PropsResumeItem {
  id: number;
  fecha: string;
  titulo?: string;
  ubicacion?: string;
  puesto?: string;
  empresa?: string;
  link: string;
}

export interface EmailTemplateProps {
  firstName: string;
}

export interface FormDataProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PropsSection {
  children:JSX.Element | JSX.Element[];
  title:string;
}