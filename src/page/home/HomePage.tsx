import { Page } from "~/ui"
import { Main, About, Containers, Storage } from "~/layers"

export const HomePage = () => {
  return (
    <Page>
      <Main />
      <About />
      <Containers />
      <Storage />
    </Page>
  )
}
