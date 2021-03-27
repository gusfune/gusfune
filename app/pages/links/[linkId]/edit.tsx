import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import getLink from "app/links/queries/getLink"
import updateLink from "app/links/mutations/updateLink"
import { LinkForm, FORM_ERROR } from "app/links/components/LinkForm"

export const EditLink = () => {
  const router = useRouter()
  const linkId = useParam("linkId", "string")
  const [link, { setQueryData }] = useQuery(getLink, { slug: linkId })
  const [updateLinkMutation] = useMutation(updateLink)

  return (
    <>
      <Head>
        <title>Edit Link {link.id}</title>
      </Head>

      <div>
        <h1>Edit Link {link.id}</h1>
        <pre>{JSON.stringify(link)}</pre>

        <LinkForm
          submitText="Update Link"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateLink}
          initialValues={link}
          onSubmit={async (values) => {
            try {
              const updated = await updateLinkMutation({
                id: link.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(`/links/${updated.id}`)
            } catch (error) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

const EditLinkPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditLink />
      </Suspense>

      <p>
        <Link href="/links">
          <a>Links</a>
        </Link>
      </p>
    </div>
  )
}

EditLinkPage.authenticate = true
EditLinkPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditLinkPage
