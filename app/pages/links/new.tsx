import { Link as BlitzLink, useRouter, useMutation, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import createLink from "app/links/mutations/createLink"
import { LinkForm, FORM_ERROR } from "app/links/components/LinkForm"

const NewLinkPage: BlitzPage = () => {
  const router = useRouter()
  const [createLinkMutation] = useMutation(createLink)

  return (
    <div>
      <h1>Create New Link</h1>

      <LinkForm
        submitText="Create Link"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateLink}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const link = await createLinkMutation(values)
            router.push(`/links/${link.id}`)
          } catch (error) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <BlitzLink href="/links">
          <a>Links</a>
        </BlitzLink>
      </p>
    </div>
  )
}

NewLinkPage.authenticate = true
NewLinkPage.getLayout = (page) => <Layout title={"Create New Link"}>{page}</Layout>

export default NewLinkPage
