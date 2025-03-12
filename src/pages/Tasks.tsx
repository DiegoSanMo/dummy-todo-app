import { Button } from 'react-bootstrap'
import Page from '../layouts/Page'
import { useNavigate } from 'react-router'
import useTask from '../hooks/useTask';

const Tasks = () => {
  const navigate = useNavigate();
  const {tasks} = useTask()

  const handlerClick = () => {
    navigate('/')
  }
  return (
    <Page>
        Task page
        <Button onClick={handlerClick}>Go back</Button>
        {tasks.map((task, index) => <Button key={index}>{task}</Button>)}
    </Page>
  )
}

export default Tasks