import React from "react";
import { Button, Col, Card, CardTitle } from "reactstrap";

const Column = ({title, link}) => {
    return (
        <Col sm="5" style={{margin:"1rem"}}>
            <Card body>
            <CardTitle tag="h5">
                {title}
            </CardTitle>
            <a href={link}>
            <Button>
                Notion Link
            </Button>
            </a>
            </Card>
        </Col>
    )
}

export default Column;