import styles from "./page.module.css";
import Link from "next/link";

export const dynamic = 'force-static';
export const revalidate = 60
export default function Home() {
  return (
    <main className={styles.main}>
     <div>This is a page. Go to <Link style={{color: "blue"}} href="/example-redirect">Example redirect</Link> Check network, redirection will remove ?rsc query params</div>

    </main>
  );
}
