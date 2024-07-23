import { Layout } from "~/ui"
import { PHONE_NUMBER } from "~/constants"
import style from "./Header.module.css"
import "./Header.module.css"

export const Header = () => {
  return (
    <div className={`${style.root} right-gap`}>
      <Layout>
        <div className={style.content}>
          <div className={style.brand}>Глобал Склад</div>
          <div className={style.phone}>{PHONE_NUMBER}</div>
        </div>
      </Layout>
    </div>
  )
}
