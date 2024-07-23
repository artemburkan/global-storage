import style from './Page.module.css'

interface Props {
  children: React.ReactNode
}

export const Page = ({ children }: Props) => {
  return (
    <div className={style.root}>
      {children}
    </div>
  )
}