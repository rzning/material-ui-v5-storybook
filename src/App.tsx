import { Button } from '@material-ui/core'
import { AcUnit } from '@material-ui/icons'

export default function App() {
  return (
    <div className="app">
      <header>
        <p>Material-UI Storybook</p>
        <Button variant="contained" startIcon={<AcUnit />}>
          Primary
        </Button>
      </header>
    </div>
  )
}
