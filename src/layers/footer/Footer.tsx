import { Layout } from "~/ui"
import style from "./Footer.module.css"

export const Footer = () => {
  return (
    <Layout>
      <div className={style.root}>
        Информация, представленная на сайте, носит информационный характер и не
        является публичной офертой, определяемой положениями ст. 437 ГК РФ.
      </div>
    </Layout>
  )
}
