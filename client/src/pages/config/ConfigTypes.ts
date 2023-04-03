export interface ConfigI {
    config: { fields: FieldI[]|[] };
}

export interface FieldI {
    id: number;
    name: string;
    placeHolder: string;
    required: boolean;
    additional: boolean;
    saved?: boolean;
    editMode?: boolean;
}

export enum FIELD_KEY {
    name = 'name',
    placeHolder = 'placeHolder'
}
