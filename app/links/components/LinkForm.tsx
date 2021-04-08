import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import * as z from "zod"
export { FORM_ERROR } from "app/core/components/Form"

export function LinkForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="title" label="Title" placeholder="My nice link" />
      <LabeledTextField name="url" label="URL" placeholder="https://gusfune.com" />
      <LabeledTextField name="slug" label="Slug" placeholder="atoz" />
    </Form>
  )
}
