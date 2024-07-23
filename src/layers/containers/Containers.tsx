import React from "react"
import { Icon } from "@rsuite/icons"
import { Button, Modal, Whisper, Tooltip } from "rsuite"
import { Copy } from "@rsuite/icons"
import copy from "copy-to-clipboard"
import { Layout, Card } from "~/ui"
import { PHONE_NUMBER } from "~/constants"
import style from "./Containers.module.css"

export const Containers = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  return (
    <Layout>
      <section className={`${style.root} ${style["bottom-gap"]}`}>
        <Card hasBoxShadow>
          <header className={`${style.header} ${style["bottom-gap"]}`}>
            Контейнеры
          </header>
          <div className={style.container}>
            <div className={style.item}>
              <Card>
                <div className={style.container}>
                  <div className={`${style.img} ${style.blue}`}>
                    <img
                      style={{ userSelect: "none" }}
                      src="/global-storage/containers/300/main-container-00.png"
                      alt="контейнер"
                    />
                  </div>
                  <div className={style.description}>
                    <div>
                      <header className={style.title}>40 футов HC</header>
                      <div>
                        Высота 2.9м. Есть возможность арендовать половину
                        контейнера.
                      </div>
                    </div>
                    <Button
                      appearance="ghost"
                      size="md"
                      onClick={handleOpen}
                    >
                      <span className={style.btn}>Позвонить</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
            <div className={style.item}>
              <Card>
                <div className={style.container}>
                  <div className={`${style.img} ${style.red}`}>
                    <img
                      style={{ userSelect: "none" }}
                      src="/global-storage/containers/300/main-container-01.png"
                      alt="контейнер"
                    />
                  </div>
                  <div className={style.description}>
                    <div>
                      <header className={style.title}>40 футов HC</header>
                      <div>
                        Высота 2.9м. Есть возможность арендовать половину
                        контейнера.
                      </div>
                    </div>
                    <Button
                      appearance="ghost"
                      size="md"
                      onClick={handleOpen}
                    >
                      <span className={style.btn}>Позвонить</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </section>
      <Modal
        size={"xs"}
        open={open}
        onClose={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Скопируйте номер телефона</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Whisper
            trigger="click"
            placement="bottom"
            controlId={`control-id-bottom`}
            speaker={<Tooltip>Скопировано</Tooltip>}
          >
            <div
              className={style["phone-container"]}
              onClick={() => copy(PHONE_NUMBER)}
            >
              <div className={style.phone}>{PHONE_NUMBER}</div>
              <div className={style.copy}>
                <Icon as={Copy} />
              </div>
            </div>
          </Whisper>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleClose}
            appearance="subtle"
          >
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}
