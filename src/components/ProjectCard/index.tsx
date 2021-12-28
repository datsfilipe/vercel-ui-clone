import { SiNextdotjs } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { FiExternalLink } from 'react-icons/fi'

import { Project } from '../../types'

import styles from './styles.module.scss'

interface CardProps {
  project: Project;
}

function Card ({ project }: CardProps) {
  return (
    <a href="#" className={styles.container}>
      <div className={styles.cardHeader}>
        <div className={styles.hoverRedirectIcon}>
          <FiExternalLink size="16" />
        </div>

        <SiNextdotjs size="34" className={styles.cardProjectIcon} />

        <div className={styles.projectInfo}>
          <strong className={styles.cardProjectTitle}>{project.name}</strong>
          <p className={styles.cardDomainAddress}>{project.deployment_url}</p>
        </div>
      </div>

      <button className={styles.cardButtonEnableAnalytics}>
        <IoAnalyticsOutline size="18" />
      </button>

      <div className={styles.cardProjectLastCommit}>{project.last_commit_name}</div>
      
      <div className={styles.cardLastModificationsAt}>
        {project.updated_at.when}
        { project.updated_at.from_other_services && project.updated_at.service ? <FaGithub size="17" /> : ''}
      </div>
    </a>
  )
}

export { Card }
