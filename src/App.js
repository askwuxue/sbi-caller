import Button, { ButtonType, ButtonSize } from './components/Button/Button'
function App () {
  return (
    <div className='App'>
      <Button disabled className='aaaa'>Default</Button>
      <Button size={ButtonSize.Small} onClick={e => e.preventDefault()}>Default</Button>
      <Button btnType={ButtonType.Primary} autoFocus>Default</Button>
      <Button btnType={ButtonType.Danger}>Default</Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com'>Link</Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com' disabled>Link</Button>
      <Button size={ButtonSize.Large}>登录</Button>
    </div>
  )
}

export default App
