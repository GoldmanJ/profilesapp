import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Note } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NoteUpdateFormInputValues = {
    title?: string;
    message?: string;
    image?: string;
};
export declare type NoteUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteUpdateFormOverridesProps = {
    NoteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoteUpdateFormProps = React.PropsWithChildren<{
    overrides?: NoteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    note?: Note;
    onSubmit?: (fields: NoteUpdateFormInputValues) => NoteUpdateFormInputValues;
    onSuccess?: (fields: NoteUpdateFormInputValues) => void;
    onError?: (fields: NoteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NoteUpdateFormInputValues) => NoteUpdateFormInputValues;
    onValidate?: NoteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NoteUpdateForm(props: NoteUpdateFormProps): React.ReactElement;
