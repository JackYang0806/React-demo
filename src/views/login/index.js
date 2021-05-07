import React,{ useState, useEffect} from 'react'
import { Form,Input,Button,Col,Row} from 'antd'
import { Link } from 'react-router-dom'
import './index.scss'
import logo from "@/assets/images/logo.png"
function Login(){
    const [url,setUrl]=useState('');
    const onFinish=(val)=>{
        console.log(val)
    }
    const onFinishFailed=(err)=>{
        console.log('validate error:',err)
    }
    const getCaptcha=()=>{
        window.$api['common/captcha']().then(res=>{
            setUrl(res.data.image)
        })
    }
    useEffect(()=>{
        getCaptcha();
    },[])
    return (<div className="login-wrapper">
        <div className="login-container">
            <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
            <Form   name="登录系统" onFinishFailed={onFinishFailed} onFinish={onFinish}>
                <Form.Item  name="username" rules={[{required:true,message:"请输入账号！"}]}>
                    <Input size="large" placeholder="请输入手机号/登录名" />
                </Form.Item>
                <Form.Item  name="password" rules={[{required:true,message:"请输入密码！"}]}>
                    <Input.Password size="large" placeholder="请输入密码" />
                </Form.Item>
                <Form.Item name="code" rules={[{required:true,message:"请输入验证码！"}]}>
                    <Row>
                        <Col span={15}>
                            <Input placeholder="请输入验证码" size="large" />
                        </Col>
                        <Col span={8} offset={1}>
                            {url&&<img className="captcha" src={url} onClick={()=>getCaptcha()}/>}
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Button block={true} size="large" type="primary" htmlType="submit">登录</Button>
                </Form.Item>
            </Form>
        </div>
    </div>)
}
export default Login