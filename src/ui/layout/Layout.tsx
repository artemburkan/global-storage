import style from './Layout.module.css'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={style.root}>
      {children}
    </div>
  )
}