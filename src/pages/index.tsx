import Attribution from "@/components//plugins/richjava-my-plugin/shared/attribution/attribution";
import { Intro } from "@/components//plugins/richjava-my-plugin/shared/intro/intro";
import Links from "@/components//plugins/richjava-my-plugin/shared/links/links";
import Link from "next/link";
import styles from "../styles//plugins/richjava-my-plugin/Home.module.css";

/**
 * This plugin does not use any sections on the home page, so this
 * page will not be included in the plugin import.
 * @see https://builtjs.com/docs/plugins/home-page
 */
export default function HomePage() {
  return (
    <div className={styles.main}>
      <Intro type="plugin" content={{ global: null }} />
      <div className="container">
        <h2>Pages</h2>
        <ul>
          <li>
            <Link href="/hello-plugin">Hello Plugin</Link>
          </li>
        </ul>
      </div>
      <Links />
      <Attribution />
    </div>
  );
}
