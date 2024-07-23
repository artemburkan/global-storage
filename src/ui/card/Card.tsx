import cn from "classnames"
import style from "./Card.module.css"

interface Props {
  icon?: React.ReactNode
  title?: string
  hasBoxShadow?: boolean
  children?: React.ReactNode
}

export const Card = ({
  icon = null,
  title = "",
  hasBoxShadow = false,
  children,
}: Props) => {
  return (
    <div
      className={cn(style.root, {
        [style["box-shadow"]]: hasBoxShadow,
      })}
    >
      {title && (
        <header className={`${style.header} ${style.container}`}>
          {icon && <div className={style.icon}>{icon}</div>}
          <div>{title}</div>
        </header>
      )}
      <div className={style.content}>{children}</div>
    </div>
  )
}
