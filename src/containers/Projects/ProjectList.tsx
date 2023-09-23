import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { useGetData } from '../../hooks/request'
import background from '../../images/home.png'
import Loader from '../../components/Loader/Loader'
import "./ProjectList.scss"
import LoginWithToken from "../LoginWithToken";


const ProjectList = () => {
  const projects = useGetData('projectlists')
  return (
    <>
      {
        localStorage.getItem("token")?
            projects.length <= 0 ? <Loader /> :
                <div style={{ backgroundImage: `url(${background})`,backgroundSize: "cover" }} className="projects">
                  <h1 className='projects__title' >Projects</h1>
                  <Row>
                    <Col xs={24} md={5}></Col>
                    <Col xs={24} md={14}>
                      <Row gutter={[24, 16]}>
                        {projects.map((item: any, index) => (
                            <Col xs={24} md={12} key={index}>
                              <Link to={`/select-from-or-contract?project_id=${item.id}`} className='project__item'>{item.name}</Link></Col>
                        ))}

                      </Row>
                    </Col>
                    <Col xs={24} md={5}></Col>
                  </Row>
                </div>:
            <LoginWithToken/>
      }
    </>
  )
}

export default ProjectList