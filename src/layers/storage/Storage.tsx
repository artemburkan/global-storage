import { Carousel } from "rsuite"
import { Layout, Card } from "~/ui"
import style from "./Storage.module.css"

export const Storage = () => {
  return (
    <Layout>
      <section className={`${style.root} ${style["bottom-gap"]}`}>
        <div className={style.container}>
          <div className={style["address-item"]}>
            <Card hasBoxShadow>
              <header className={`${style.header} ${style["bottom-gap"]}`}>
                Склад и Аренда
              </header>
              <div>
                Аренда контейнеров под склад <br /> ул. Трудкоммуны, 17, участок
                8
              </div>
            </Card>
          </div>
          <Card hasBoxShadow>
            <Carousel
              autoplay
              className={style.slider}
              shape="bar"
            >
              <img
                height="250"
                src="/global-storage/containers/storage-00.jpg"
                className={style.img}
              />
              <img
                height="250"
                src="/global-storage/containers/storage-01.jpg"
                className={style.img}
              />
              <img
                height="250"
                src="/global-storage/containers/storage-02.jpg"
                className={style.img}
              />
            </Carousel>
          </Card>
        </div>
      </section>
    </Layout>
  )
}
