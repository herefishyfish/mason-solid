import type { NavigationStack, Routers } from 'solid-navigation'

let _router: NavigationStack<'Default', keyof Routers['Default']> | null = null

export function setRouter(router: NavigationStack<'Default', keyof Routers['Default']>) {
  _router = router
}

export function navigate(routeName: keyof Routers['Default'] | string, options?: any) {
  _router?.navigate(routeName as any, options)
}

export function goBack() {
  _router?.goBack()
}
