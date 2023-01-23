import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Content from "./Content"
import Carousel from "./Carousel"

const CarouselRecruiter = ({ scrollRef }) => {
    const data = useStaticQuery(graphql`
        query {
            allGoogleSpreadsheetRecruiters {
                edges {
                    node {
                        id
                        name
                        company
                        position
                        imageLink
                    }
                }
            }
        }
    `)

    return (
        <div ref={scrollRef}>
            {data.allGoogleSpreadsheetRecruiters.edges.length > 1 &&
                <>
                    <Content> Recruiters </Content>
                    <Carousel data={data.allGoogleSpreadsheetRecruiters.edges}/>
                </>
            }
        </div>
    )
}

export default CarouselRecruiter;