import { Icon } from "@rsuite/icons"
import { Peoples, DocPass, Coupon, Time, Tools } from "@rsuite/icons"

import { Layout, Card } from "~/ui"
import style from "./About.module.css"

export const About = () => {
  return (
    <section className={style.root}>
      <Layout>
        <>
          <header className={`${style.header} ${style["bottom-gap"]}`}>
            Почему Мы?
          </header>
          <div className={style.content}>
            <div className={style.container}>
              <div className={style.item}>
                <Card
                  icon={<Icon as={Time} />}
                  title="Многолетний опыт"
                  hasBoxShadow
                >
                  Более 10 лет на рынке с репутацией партнёра, которому можно
                  доверять
                </Card>
              </div>
              <div className={style.item}>
                <Card
                  icon={<Icon as={DocPass} />}
                  title="Фулфилмент"
                  hasBoxShadow
                >
                  Помогаем комплексом операций от момента офомрления товара
                  нашим арендатором и до момента погрузки в контейнер под
                  хранение
                </Card>
              </div>
              <div className={style.item}>
                <Card
                  icon={<Icon as={Peoples} />}
                  title="Качественный сервис"
                  hasBoxShadow
                >
                  Удовлетворяем 24/7 спрос на складские услуги по минимальной
                  цене на высоком уровне
                </Card>
              </div>
            </div>
            <div className={style.container}>
              <div className={style.item}>
                <Card
                  icon={<Icon as={Tools} />}
                  title="Свой автопарк"
                  hasBoxShadow
                >
                  Автологистика не только по Москве и Московской области, но и
                  по всей России
                </Card>
              </div>
              <div className={style.item}>
                <Card
                  icon={<Icon as={Coupon} />}
                  title="Любой вид оплаты"
                  hasBoxShadow
                >
                  Для физических лиц доступна оплата наличными и переводом на
                  карту. Для юридических лиц переводом на расчётся счет с НДС и
                  без него.
                </Card>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </section>
  )
}
