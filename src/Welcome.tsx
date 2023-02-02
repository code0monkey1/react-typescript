interface IProps{
  name: string
}
const Welcome = ({name}:IProps) => {
  return (
    <div>{`Welcome ${name}`}</div>
  )
}

export default Welcome