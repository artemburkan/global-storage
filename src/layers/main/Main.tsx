import cn from "classnames"
import style from "./Main.module.css"

export const Main = () => {
  return (
    <section className={cn(style.root, style["bottom-gap"])}>
      <div className={style.container}>
        <div className={style.description}>
          Продажа, аренда и доставка контейнеров
        </div>
      </div>
    </section>
  )
}
