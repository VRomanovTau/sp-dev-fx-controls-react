
import { ISPField } from '../../common/SPEntities';
import { ICustomFormattingBodySection } from './ICustomFormatting';
import { IDynamicFieldProps } from './dynamicField/IDynamicFieldProps';
export interface IDynamicFormState {
  fieldCollection: IDynamicFieldProps[];
  /** Validation Formulas set in List Column settings */
  validationFormulas: Record<string, Pick<ISPField, 'ValidationFormula' | 'ValidationMessage'>>;
  /** Field Show / Hide Validation Formulas, set in Edit Form > Edit Columns > Edit Conditional Formula */
  clientValidationFormulas: Record<string, Pick<ISPField, 'ValidationFormula' | 'ValidationMessage'>>;
  /** Tracks fields hidden by ClientValidationFormula */
  hiddenByFormula: string[];
  /** Populated by evaluation of List Column Setting validation. Key is internal field name, value is the configured error message. */
  validationErrors: Record<string, string>;
  customFormatting?: {
    body: ICustomFormattingBodySection[];
  }
  isSaving?: boolean;
  etag?: string;
  isValidationErrorDialogOpen: boolean;
}



