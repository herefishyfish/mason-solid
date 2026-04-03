import { Route, RouteDefinition, StackRouter, useRouter } from 'solid-navigation'
import { onMount } from 'solid-js'
import { setRouter } from './navigation'
import Home from './components/home'
import Flex from './components/layout/flex'
import Grid from './components/layout/grid'
import Float from './components/layout/float'
import Absolute from './components/layout/absolute'
import RTL from './components/layout/rtl'
import Showcase from './components/visual/showcase'
import Skeuomorphism from './components/styles/skeuomorphism'
import Neumorphism from './components/styles/neumorphism'
import Neon from './components/styles/neon'
import Claymorphism from './components/styles/claymorphism'
import Brutalism from './components/styles/brutalism'
import GradientMesh from './components/visual/gradient-mesh'
import Monochrome from './components/styles/monochrome'
import TypographyScale from './components/visual/typography-scale'
import PseudoStates from './components/visual/pseudo-states'

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
      PseudoStates: RouteDefinition
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
      <Route name="PseudoStates" component={PseudoStates} />
    </StackRouter>
  )
}

export { App }
