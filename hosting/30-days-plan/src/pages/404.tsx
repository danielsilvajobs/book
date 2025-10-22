import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import BookSection from "../components/BookSection"
import Menu from "../components/Menu"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <>
      <Menu />
      <BookSection />
    </>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Page not found</title>

