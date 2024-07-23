import cn from "classnames"
import { Layout } from "~/ui"
import style from "./Main.module.css"

export const Main = () => {
  return (
    <Layout>
      <section className={cn(style.root, style["bottom-gap"])}>
        <div className={style.container}>
          <div className={style.description}>
            Продажа, аренда и доставка контейнеров
          </div>
        </div>
      </section>
    </Layout>
  )
}
