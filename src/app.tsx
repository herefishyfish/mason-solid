import { Route, RouteDefinition, StackRouter, useRouter } from 'solid-navigation'
import { onMount } from 'solid-js'
import { setRouter } from './navigation'
import Home from './components/home'
import Flex from './components/flex'
import Grid from './components/grid'
import Float from './components/float'
import Absolute from './components/absolute'
import RTL from './components/rtl'
import Showcase from './components/showcase'
import Skeuomorphism from './components/skeuomorphism'
import Neumorphism from './components/neumorphism'
import Neon from './components/neon'
import Claymorphism from './components/claymorphism'
import Brutalism from './components/brutalism'
import GradientMesh from './components/gradient-mesh'
import Monochrome from './components/monochrome'
import TypographyScale from './components/typography-scale'

declare module 'solid-navigation' {
  export interface Routers {
    Default: {
      Home: RouteDefinition
      Flex: RouteDefinition
      Grid: RouteDefinition
      Float: RouteDefinition
      Absolute: RouteDefinition
      RTL: RouteDefinition
      Showcase: RouteDefinition
      Skeuomorphism: RouteDefinition
      Neumorphism: RouteDefinition
      Neon: RouteDefinition
      Claymorphism: RouteDefinition
      Brutalism: RouteDefinition
      GradientMesh: RouteDefinition
      Monochrome: RouteDefinition
      TypographyScale: RouteDefinition
    }
  }
}

function RouterCapture() {
  const router = useRouter()
  onMount(() => setRouter(router))
  return null
}

const App = () => {
  return (
    <StackRouter initialRouteName="Home">
      <RouterCapture />
      <Route name="Home" component={Home} />
      <Route name="Flex" component={Flex} />
      <Route name="Grid" component={Grid} />
      <Route name="Float" component={Float} />
      <Route name="Absolute" component={Absolute} />
      <Route name="RTL" component={RTL} />
      <Route name="Showcase" component={Showcase} />
      <Route name="Skeuomorphism" component={Skeuomorphism} />
      <Route name="Neumorphism" component={Neumorphism} />
      <Route name="Neon" component={Neon} />
      <Route name="Claymorphism" component={Claymorphism} />
      <Route name="Brutalism" component={Brutalism} />
      <Route name="GradientMesh" component={GradientMesh} />
      <Route name="Monochrome" component={Monochrome} />
      <Route name="TypographyScale" component={TypographyScale} />
    </StackRouter>
  )
}

export { App }
