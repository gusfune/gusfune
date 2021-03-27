import { useState, ReactNode, PropsWithoutRef } from "react"
import { FormProvider, useForm, UseFormOptions } from "react-hook-form"
import Alert from "./Alert"
import * as z from "zod"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  schema?: S
  onSubmit: (values: z.infer<S>) => Promise<void | OnSubmitResult>
  initialValues?: UseFormOptions<z.infer<S>>["defaultValues"]
}

interface OnSubmitResult {
  FORM_ERROR?: string
  [prop: string]: any
}

export const FORM_ERROR = "FORM_ERROR"

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  const ctx = useForm<z.infer<S>>({
    mode: "onBlur",
    resolver: async (values) => {
      try {
        if (schema) {
          schema.parse(values)
        }
        return { values, errors: {} }
      } catch (error) {
        return { values: {}, errors: error.formErrors?.fieldErrors }
      }
    },
    defaultValues: initialValues,
  })
  const [formError, setFormError] = useState<string | null>(null)

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <FormProvider {...ctx}>
          <form
            onSubmit={ctx.handleSubmit(async (values) => {
              const result = (await onSubmit(values)) || {}
              for (const [key, value] of Object.entries(result)) {
                if (key === FORM_ERROR) {
                  setFormError(value)
                } else {
                  ctx.setError(key as any, {
                    type: "submit",
                    message: value,
                  })
                }
              }
            })}
            className="space-y-6 form"
            {...props}
          >
            {/* Form fields supplied as children are rendered here */}
            {children}

            {formError && <Alert message={formError} />}

            {submitText && (
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={ctx.formState.isSubmitting}
              >
                {submitText}
              </button>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default Form
