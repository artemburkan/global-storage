import { Carousel } from "rsuite"
import { Layout, Card } from "~/ui"
import style from "./Storage.module.css"

export const Storage = () => {
  return (
    <Layout>
      <section className={`${style.root} ${style["bottom-gap"]}`}>
        <div className={style.container}>
          <div className={style["address-item"]}>
            <header className={`${style.header} ${style["bottom-gap"]}`}>
              Склад и Аренда
            </header>
            <div>
              Аренда контейнеров под склад <br /> ул. Трудкоммуны, 17, участок 8
            </div>
          </div>
          <Card hasBoxShadow>
            <Carousel
              autoplay
              className="custom-slider"
            >
              <img
                src="/global-storage/containers/storage-00.jpg"
                width="500"
                height="500"
              />
              <img
                src="/global-storage/containers/storage-01.jpg"
                width="500"
                height="500"
              />
              <img
                src="/global-storage/containers/storage-02.jpg"
                width="500"
                height="500"
              />
            </Carousel>
          </Card>
        </div>
      </section>
    </Layout>
  )
}
