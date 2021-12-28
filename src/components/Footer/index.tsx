import styles from './styles.module.scss'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub, FaTwitter, FaRegMoon } from 'react-icons/fa'
import { ArrowIcon } from '../ArrowIcon'

function Footer () {
  return (
    <footer className={styles.container}>
      <div className={styles.categoryMenu}>
        <ul className={styles.category}>
          <li className={styles.categoryTitle}>
            Frameworks
          </li>

          <li className={styles.categoryItem}>Next.js</li>
          <li className={styles.categoryItem}>Create React App</li>
          <li className={styles.categoryItem}>Gatsby</li>
          <li className={styles.categoryItem}>Nuxt.js</li>
          <li className={styles.categoryItem}>Vue</li>
          <li className={styles.categoryItem}>Angular</li>
          <li className={styles.categoryItem}>More Frameworks</li>
        </ul>

        <ul className={styles.category}>
          <li className={styles.categoryTitle}>
            Resources
          </li>

          <li className={styles.categoryItem}>Documentation</li>
          <li className={styles.categoryItem}>Experts</li>
          <li className={styles.categoryItem}>Customers</li>
          <li className={styles.categoryItem}>Guides</li>
          <li className={styles.categoryItem}>Support</li>
          <li className={styles.categoryItem}>API Reference</li>
          <li className={styles.categoryItem}>OSS</li>
          <li className={styles.categoryItem}>Command-Line</li>
          <li className={styles.categoryItem}>Integrations</li>
        </ul>

        <ul className={styles.category}>
          <li className={styles.categoryTitle}>
            Company
          </li>

          <li className={styles.categoryItem}>Home</li>
          <li className={styles.categoryItem}>Blog</li>
          <li className={styles.categoryItem}>Changelog</li>
          <li className={styles.categoryItem}>About</li>
          <li className={styles.categoryItem}>Careers</li>
          <li className={styles.categoryItem}>Pricing</li>
          <li className={styles.categoryItem}>Enterprise</li>
          <li className={styles.categoryItem}>Security</li>
          <li className={styles.categoryItem}>
            Next.js Conf
            {' '}
            <FiExternalLink size="12"/>
          </li>
          <li className={styles.categoryItem}>Partners</li>
          <li className={styles.categoryItem}>Contact Us</li>
        </ul>

        <ul className={styles.category}>
          <li className={styles.categoryTitle}>
            Legal
          </li>

          <li className={styles.categoryItem}>Privacy Policy</li>
          <li className={styles.categoryItem}>Terms of Service</li>
          <li className={styles.categoryItem}>Trademark Policy</li>
          <li className={styles.categoryItem}>Inactivity Policy</li>
          <li className={styles.categoryItem}>DMCA Policy</li>
          <li className={styles.categoryItem}>DPA</li>
          <li className={styles.categoryItem}>SLA</li>
        </ul>
      </div>

      <div className={styles.bottomPanel}>
        {/* basically it's the same Vercel logo from the site */}
        <svg className={styles.logo} height="20" viewBox="0 0 283 64" fill="var(--color-8)">
          <path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z">
          </path>
        </svg>

        <div className={styles.bottomInfoPanel}>
          <p className={styles.subText}>Copyright © 2021 Vercel Inc. All rights reserved.</p>

          <div className={styles.redirectGroupButtons}>
            <FaGithub size="20" />
            {' '}
            <div className={styles.divider}></div>
            {' '}
            <FaTwitter size="20" />
          </div>

          <div className={styles.statusReport}>
            Status:{' '}
            <div className={styles.status}>
              All systems norm...
            </div>
          </div>
          
          <div className={styles.selectContainer}>
            <FaRegMoon size="12" className={styles.selectPrefix} />

            <select className={styles.themeSelect}>
              <option value="system">System</option>
              <option selected value="dark"> Dark</option>
              <option value="light">Light</option>
            </select>
            <ArrowIcon id={styles.arrowMenuIcon} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }