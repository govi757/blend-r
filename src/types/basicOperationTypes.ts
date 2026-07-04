export type IBasicSection = {
    name: string;
    dataModuleList: string[];
    expressModuleList: { name: string; includedDataModuleList: string[] }[];
    rnModuleList?: {name: string}[];
    reactModuleList?: {name: string}[];
    mongoModuleList?: {name: string}[];
  };
  
  export type IBasicProject = {
    name: string;
    description: string;
    createdAt: string;
    dataModuleList: string[];
    apiModuleList: string[];
    // sectionList: IBasicSection[];
    frontend: IFrontEnd;
  };


  export interface IRNLayout {
    name: string;
    route: string;
    type?: string;
    element?: any;
    params:Array<{name: string,type:string;required: boolean}>;
    children?: Array<{
        element?: string;
        name: string;
        route: string;
        type?: string;
        children?: IRNLayout["children"];
        params:Array<{name: string,type:string;required: boolean}>;
        parentLayout?:string;
    }>;
};
  export interface IRNScreen{
    name: string,
    path: string
}

export interface IRNComponent{
    name: string,
    path: string
}

  export type IFrontEnd = {
    componentList: IRNComponent[];
      screenList: IRNScreen[];
      layout: IRNLayout[];
      roleList?: String[];
  }