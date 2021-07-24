import React, { useState, useEffect } from 'react';
import {
    Card,
    CardImg,

    CardText,
    CardBody,
    // CardTitle,
    // CardSubtitle,
    Button,
    Row,
    Col,
} from 'reactstrap';


const Cards = () => {
    const [image, setImage] = useState([])

    const [disable, setDisable] = useState(false)
    const [ocrText, setOcrText] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/image/fetch-base64s', {
            method: "get"
        }).then(res => res.json()).then((res) => {
            console.log(res)
            const { payload } = res;
            var base64ToStrings = []
            // payload.map(resp=>{
            //     let base64 = Buffer.from(resp, "base64").toString();
            //     base64ToStrings.push(base64);
            // })

            setImage(payload)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const doOCR = (img) => {
        // setDisable(true);
        fetch('http://localhost:5000/api/image/ocr', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: img
            })
        }).then((res) => res.json()).then((res) => {
            console.log(res)
            console.log(res.finalText)
            setOcrText([...ocrText, res.finalText])
        }).catch((err) => { console.log(err) })
    }

    return (
        <div>
            <Row>
                <Col xs="12" md="4">
                    {
                        image.map((img, key) =>
                            <Card>
                                {image !== '' ?
                                    <CardImg top style={{ height: "40%", width: "95%", padding: 10, margin: 5, marginRight: 7 }}
                                        src={`data:image/jpeg;base64,${img}`} /> : null}
                                <CardBody>
                                    <CardText>
                                        {ocrText[key]}
                                    </CardText>
                                    <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around" }}>
                                        <Button disabled={disable} onClick={() => doOCR(img)}>OCR</Button>
                                    </div>
                                </CardBody>
                            </Card>

                        )
                    }
                </Col>
            </Row>
        </div>
    );


}

export default Cards;


