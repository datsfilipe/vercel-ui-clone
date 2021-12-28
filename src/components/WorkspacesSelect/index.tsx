import Image from 'next/image'

import { ArrowIcon } from '../ArrowIcon'

import styles from './styles.module.scss'

function WorkspacesSelect () {
  return (
    <div className={styles.container}>
      <svg className={styles.vercelTriangleLogo} height="26" viewBox="0 0 75 65" fill="var(--color-8)"><title>Vercel Logo</title><path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg>
      <div className={styles.divider}></div>

      <div className={styles.userPanel}>
        <div className={styles.currentWorkspace}>

          <div className={styles.workspaceIcon}>
            <Image src="https://github.com/datsfilipe.png" alt="Filipe Lima" width="30" height="30"/>
          </div>
          Filipe Lima

          <div className={styles.workspaceTag}>
            Hobby
          </div>
        </div>
        
        <div className={styles.selectContainer}>
          <button className={styles.workspaceSelect} />
          <ArrowIcon id={styles.arrowMenuIcon} />
        </div>
      </div>
    </div>
  )
}

export { WorkspacesSelect }