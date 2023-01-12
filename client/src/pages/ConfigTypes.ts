export interface ConfigTypesI {
    path: string;
}

export interface ConfigI {
    config: { fields: FieldI[]|[] };
}

export interface FieldI {
    name: string;
    placeHolder: string;
    required: string;
    disabled: string;
    additional: string;
    saved: string;
}
