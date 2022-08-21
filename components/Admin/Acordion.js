import React, { useState } from "react";
import {
    Button,
    Table,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";

function Acordion(props) {
    const [open, setOpen] = useState("1");
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        Accordion Item 1
                        <Button className="mx-2" color="success">
                            Verify
                        </Button>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                    <th>Table heading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                            </tbody>
                        </Table>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">
                        Accordion Item 2
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <strong>
                            This is the second item&#39;s accordion body.
                        </strong>
                        You can modify any of this with custom CSS or overriding
                        our default variables. It&#39;s also worth noting that
                        just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">
                        Accordion Item 3
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        <strong>
                            This is the third item&#39;s accordion body.
                        </strong>
                        You can modify any of this with custom CSS or overriding
                        our default variables. It&#39;s also worth noting that
                        just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Acordion;
