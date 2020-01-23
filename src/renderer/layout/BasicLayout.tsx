import React from 'react'
import ReactDom from 'react-dom'
import {Layout} from 'antd';
import './BasicLayout.less'

const {Header, Footer, Sider, Content} = Layout;

interface State {
    isMove: Boolean
}

class BasicLayout extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isMove: false
        }
    }

    mouseDown = () => {
        const myComp = this.refs.myInput;
        const myComp1 = ReactDom.findDOMNode(myComp);
        console.log(myComp);
        console.log(myComp1);
        console.log(this.state.isMove);
        this.setState({
            isMove: true
        });
        console.log(this.state.isMove);
        console.log('mouseDown')
    };
    mouseUp = () => {
        const myComp = this.refs.myInput;
        const myComp1 = ReactDom.findDOMNode(myComp);
        console.log(myComp);
        console.log(myComp1);
        console.log(this.state.isMove);
        this.setState({
            isMove: false
        });
        console.log('mouseUp')
    };

    render() {
        return (
            <div>
                <Layout className={'basic-layout'}>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header
                            onMouseDown={this.mouseDown}
                            onMouseUp={this.mouseUp}
                            ref='myInput'
                            className={["basic-layout-header", this.state.isMove ? "can-move" : null].join(' ')}>
                            头部</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default BasicLayout
