import React from 'react'
import { ExampleComponent, Button } from 'fnd-demo-v2'
import 'fnd-demo-v2/dist/index.css'
import 'fnd-demo-v2/dist/output.css'
const App = () => {
  return <div>
    <ExampleComponent text="Create React Library Example 😄" />
    <div style={{textAlign:'center'}}>
      <Button label={"Button"} color={'primary'} size={'larger'} />
    </div>
  </div>
}

export default App
