import Button, { ButtonType, ButtonSize } from './components/Button/Button'
function App () {
  return (
    <div className='App'>
      <Button disabled>Default</Button>
      <Button>Default</Button>
      <Button>Default</Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com' disabled>Link</Button>
      <Button size={ButtonSize.Large}>登录</Button>
    </div>
  )
}

export default App
