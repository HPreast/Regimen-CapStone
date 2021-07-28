import React from "react";
import { Card, CardBody } from "reactstrap";

export const WorkoutCard = ({ workout }) => {
    return (
        <>
            <CardBody>
                <Card>
                    {workout.name}
                </Card>
            </CardBody>
        </>
    )
}