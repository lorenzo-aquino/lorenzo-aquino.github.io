import React from "react"
import styled from "@emotion/styled"
import timelineData from "../data/timeline.json"

const TimelineBody = styled.div`
    width: 100%;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        top: 0px;
        left: calc(33% + 15px);
        bottom: 0px;
        width: 4px;
        background: #fff;
    }
    &:after {
        content: "";
        display: table;
        clear: both;
    }
`

const TitleAndinstitution = styled.p`
    margin: 0;
    font-size: 100%;
`

const Duration = styled.h3`
    margin: 0;
    font-size: 120%;
`

const Entry = styled.div`
    clear: both;
    text-align: left;
    position: relative;
`

const Title = styled.div`
    margin-bottom: 0.5em;
    float: left;
    width: 33%;
    ${'' /* padding-right: 15px; */}
    text-align: right;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border: 3px solid #4e92ff;
        background-color: #fff;
        border-radius: 100%;
        top: 15%;
        right: -23px;
        z-index: 99;
    }
`

const Body = styled.div`
    margin: 0 0 3em;
    float: right;
    width: 66%;
    padding-left: 30px;
    ul {
        padding-left: 0;
        list-style-type: none;
        li:before {
            content: "–";
            margin-right: 0.5em;
        }
    }
`

const MainDuty = styled.div`
    line-height: 1.4em;
    margin-top: 0;
    font-weight: bold;
`

function Role(props) {
    return (
        <Entry>
            <Title>
                <Duration>{props.role.duration}</Duration>
                <TitleAndinstitution>
                    <b>{props.role.jobTitle}</b>, {props.role.institution}
                </TitleAndinstitution>
            </Title>
            <Body>
                <MainDuty>{props.role.mainDuty}</MainDuty>
                <ul>
                    {props.role.descriptions.map(description => (
                        <li key={description}>{description}</li>
                    ))}
                </ul>
            </Body>
        </Entry>
    )
}

export default function Timeline() {
    const timelineBody = timelineData.map(role => {
        return <Role key={role.institution} role={role}></Role>
    })
    return <TimelineBody>{timelineBody}</TimelineBody>
}
