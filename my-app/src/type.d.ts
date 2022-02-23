
export interface AppPropsTypes {

}


export interface FormPropsTypes {
weight1: React.HTMLInputTypeAttribute,
weight2: React.HTMLInputTypeAttribute,
height1 : React.HTMLInputTypeAttribute,
height2 : React.HTMLInputTypeAttribute,
bedSize : React.HTMLInputTypeAttribute,
changeField() : void,
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
