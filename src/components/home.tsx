import { useRoute } from 'solid-navigation'

export default function Home() {
  const route = useRoute()
  const message = 'SolidJS App'

  return (
    <>
      <actionbar title={route.name} />
      <div style={{ padding: '20px' }}>
        <h1>{message}</h1>
        <p>Welcome to your SolidJS app running on NativeScript!</p>

        <div style={{ display: 'grid', gap: '10px' }}>
          <div>
            <h2>Getting Started</h2>
            <p>
              To get started, edit the <code>src/app.tsx</code> and{' '}
              <code>src/components/home.tsx</code> files and save to reload.
            </p>
          </div>
          <div>
            <h2>Documentation</h2>
            <p>
              Check out the{' '}
              <a href="https://nativescript.org/docs" target="_blank">
                NativeScript documentation
              </a>{' '}
              for more details on how to build your app.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '20px' }}>
          <div style={{ backgroundColor: '#8ad4ff', padding: '10px' }}>
            <h3>Column 1</h3>
            <p>This is the first column of the grid.</p>
          </div>
          <div style={{ backgroundColor: '#8ad4ff', padding: '10px' }}>
            <h3>Column 2</h3>
            <p>This is the second column of the grid.</p>
          </div>
        </div>
      </div>
    </>
  )
}
