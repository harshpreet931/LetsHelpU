import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardFooter, CardLink, CardTitle, NavLink, Row } from "reactstrap";
import Column from "./Column";

const Content = [
    {
        title : "Computer Organization and Architecture",
        link : "https://www.google.com"
    },
    {
        title : "Artificial Intelligence and Machine Learning",
        link : "https://www.google.com"
    },
    {
        title : "Object Oriented Software Engineering",
        link : "https://www.google.com"
    },
    {
        title : "Data Structures and Algorithms",
        link : "https://www.google.com"
    }
];

const Card = () => {
    return (
        <Row style={{justifyContent: "center"}}>
            {Content.map((item, index) => {
                return (
                    <Column title={item.title} link={item.link} key={index} />
                )
            })}
        </Row>
    )
}
export default Card;