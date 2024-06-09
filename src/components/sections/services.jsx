import React from 'react'
import { RiGlobalFill, RiQuillPenLine, RiPantoneFill } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

const servicesList = [
    {
        id: 1,
        icon: <RiGlobalFill size={65} />,
        service_name: "협업 정신",
        service_description: "블로그, 동아리, 다양한 스터디를 참여하며\n 여러 사람들과 지식을 공유하고 생활하는 활동을 선호합니다."
    },
    {
        id: 2,
        icon: <RiQuillPenLine size={65} />,
        service_name: "선한 영향력",
        service_description: "재난 구호와 환경 보전 등 사회적 책임을 다하려 노력하며, 디지털 플랫폼을 통해 사회적 문제를 해결하고자 합니다."
    },
    {
        id: 3,
        icon: <RiPantoneFill size={65} />,
        service_name: "기술적 역량",
        service_description: "iOS뿐만 아니라 AWS, 크롤링 등 다양한 IT분야에서의 기초적인 지 식과 경험을 소유하고 있습니다."
    },

]
const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Services</p>
                            <h2>Quality Services</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6">
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services