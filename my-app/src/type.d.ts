import { ReactComponentElement } from "react";

export interface AppPropsTypes {
  // FormPropsTypes: {},
  // BedPropsTypes: {},
  // TitlePropsTypes: {},
  Title:ReactComponentElement | undefined,
  Bed:ReactComponentElement | undefined,
  Form:ReactComponentElement | undefined,
}


export interface FormPropsTypes {

}

export interface BedPropsTypes {

}

export interface TitlePropsTypes {

}

export interface FieldPropsTypes {
  value: React.HTMLInputTypeAttribute,
  type: React.HTMLInputTypeAttribute | undefined,
  name: string,
  placeholder: string | undefined,
  manageChange(any, name): void,
}
