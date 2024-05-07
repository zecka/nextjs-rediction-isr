import Link from "next/link"
import { permanentRedirect } from "next/navigation"

export const dynamic = 'force-static';
export const revalidate = 60
const Page = async ({ params: { slug } }: {params: {slug: string}}) => {
    if(slug === 'example-redirect'){
        permanentRedirect('/example')
    }
    return <div>This is a page. Go to <Link style={{color: "blue"}} href="/example-redirect">Example redirect</Link> to see redirection issue due to missing ?rsc param</div>
}
export default Page