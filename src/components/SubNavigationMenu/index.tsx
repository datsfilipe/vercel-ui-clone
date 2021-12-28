import { useEffect, useState } from 'react'

import { NavItemHighlight } from '../NavItemHighlight'

import styles from './styles.module.scss'

export function SubNavigationMenu () {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const [navItemHighlightPropsValues, setNavItemHighlightsPropsValues] = useState<{
    width: number;
    translateX: number;
  } | null>(null)

  // handle mouse events
  function handleHoverNavItem (index: number) {
    switch (index) {
      case 0:
        setNavItemHighlightsPropsValues({
          width: 83.5,
          translateX: 0
        })
        break;
      case 1:
        setNavItemHighlightsPropsValues({
          width: 101,
          translateX: 83.5
        })
        break;
      case 2:
        setNavItemHighlightsPropsValues({
          width: 70.8,
          translateX: 184.5
        })
        break;
      case 3:
        setNavItemHighlightsPropsValues({
          width: 78.4,
          translateX: 255.3
        })
        break;
      case 4:
        setNavItemHighlightsPropsValues({
          width: 61.7,
          translateX: 333.7
        })
        break;
      case 5:
        setNavItemHighlightsPropsValues({
          width: 75.3,
          translateX: 395.4
        })
        break;
      default:
        setNavItemHighlightsPropsValues(null)
    }
  }
  
  function handleLeaveNavItem () {
    setNavItemHighlightsPropsValues(null)
  }

  // handle scroll
  function handleScroll () {
    if (window.scrollY > 80) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
  }, [isScrolling])

  return (
    <div className={styles.container}>

      { isScrolling ? (
        <svg className={styles.vercelTriangleLogo} height="18" viewBox="0 0 75 65" fill="var(--color-8)"><title>Vercel Logo</title><path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg>
      ) : '' }

      <nav onMouseLeave={handleLeaveNavItem} className={`${styles.subNavigationMenu} ${
        isScrolling ? styles.scrollingContent : ''
      }`}>

        { navItemHighlightPropsValues != null ? (
          <NavItemHighlight
            width={navItemHighlightPropsValues.width}
            translateX={navItemHighlightPropsValues.translateX}
          />
        ) : '' }
        
        <a onMouseOver={() => handleHoverNavItem(0)} href="#" className={styles.selected}>
          Overview
        </a>
        <a onMouseOver={() => handleHoverNavItem(1)} href="#" >
          Integrations
        </a>
        <a onMouseOver={() => handleHoverNavItem(2)} href="#">
          Activity
        </a>
        <a onMouseOver={() => handleHoverNavItem(3)} href="#">
          Domains
        </a>
        <a onMouseOver={() => handleHoverNavItem(4)} href="#">
          Usage
        </a>
        <a onMouseOver={() => handleHoverNavItem(5)} href="#">
          Settings
        </a>
      </nav>
    </div>
  )
}