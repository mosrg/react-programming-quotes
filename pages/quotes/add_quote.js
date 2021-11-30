import {Form, Input, Button, Modal} from 'antd';
import {useRouter} from 'next/router';

export default function CreateQuote() {
    const router = useRouter();

    async function postQuote(formValues) {
        await fetch("https://programming-quotes-api.herokuapp.com/Quotes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues),
        })
        .then(response => response.json())
        .then(() => {
                Modal.success({
                    content: "The quote was successfully added.",
                    onOk() {
                        router.push('/quotes')

                    }
                })
            }
        )
        .catch((error) => {
            Modal.error({
                title: "Error",
                content:"The request could not be completed."
            })
        });
    }

    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 8
        }
    };

    const validateMessages = {
        required: '${label} is required'
    };

    return (
        <Form {...layout} onFinish={postQuote} validateMessages={validateMessages}>
            <Form.Item
                name="author"
                label="Author"
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="en"
                label="Quote"
                rules={[
                    {
                        required: true
                    }
                ]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                <Button type="primary" htmlType="submit">
                    Add quote
                </Button>
            </Form.Item>
        </Form>
    )
}