import { Source_Code_Pro, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { cn } from "@/utils"
import { Header } from "@/components/Header"
import { Nav } from "@/components/Nav"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"

const source = Source_Sans_3({ subsets: ["latin"] })
const code = Source_Code_Pro({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={source.className}>
        <div className="grid grid-cols-12 gap-4 relative">
          {/* <aside
            className={cn(
              "col-span-12 p-2 bg-[#fbca3c] text-black relative z-10",
              code.className
            )}
          >
            <p className="text-sm uppercase text-center">
              <a
                href="https://machalliance.org/mach-annual-conference"
                className="no-underline hover:underline"
              >
                Join me for <strong>The Composable Conference</strong> in
                Chicago - Apr 22-24! Click for details
              </a>
            </p>
          </aside> */}
          <div className="static col-span-12 sm:col-span-2 z-0">
            <div
              className={cn(
                "sm:fixed sm:top-8 sm:left-0 sm:w-2/12 w-full text-center flex flex-row sm:flex-col gap-4 justify-between items-center sm:justify-start sm:items-center z-0",
                code.className
              )}
            >
              <Header />
              <Nav />
            </div>
          </div>
          <main className="col-span-12 sm:col-span-10 p-4">{children}</main>
        </div>

        <div className="text-xs text-center my-4">
          <p className="">
            Copyright &copy; 2020-2025 - Gus Fune. All rights reserved
            <br />
            Photography by{" "}
            <a
              href="https://www.juliebee.co.uk/"
              target="_blank"
              className="underline"
            >
              Julie Broadfoot
            </a>{" "}
            © 2025
            <br />
            Source-code for this site is published under MIT license.
            You&apos;re free to use the code, not the content, that&apos;s all
            mine.
          </p>
        </div>
        <Analytics />
        <Script id="ketch-analytics">
          {`
!function(){window.semaphore=window.semaphore||[],window.ketch=function(){window.semaphore.push(arguments)};var e=new URLSearchParams(document.location.search),n=document.createElement("script");n.type="text/javascript", n.src="https://global.ketchcdn.com/web/v2/config/gus_fune/website_smart_tag/boot.js", n.defer=n.async=!0,document.getElementsByTagName("head")[0].appendChild(n)}();
          `}
        </Script>
        <Script id="ph-analytics">
          {`
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_Ec2je8umKb5sqn9WxqTsyWXgpJFhKfSfzOkrbDAszlM',{api_host:'https://eu.i.posthog.com', person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
        })
          `}
        </Script>
      </body>
    </html>
  )
}
