import { Button, Card } from 'antd';
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';

const columns = [
    {title: '账号',dataIndex: 'userName',},
    {title: '真实姓名',dataIndex:'realName',},
    {title: '手机号',dataIndex: 'mobile',},
    {title: '邮件',dataIndex: 'email',},
    {title: '用户状态',dataIndex: 'userStateName',},
    {title: '用户类型',dataIndex: 'userTypeName',},
    {title: '角色',dataIndex: 'roleName',},
    {title: '创建时间',dataIndex: 'createTime',valueType: 'dateTime',},
    {title: '更新时间',dataIndex: 'updateTime',valueType: 'dateTime',},
    {title: '备注',dataIndex: 'comment',},
    {title: '操作',dataIndex: 'option',valueType: 'option'}
];

export default () => {
    return (
        <PageHeaderWrapper>
            <Card>
                <ProTable 
                    toolBarRender={(action, { selectedRows }) => [<Button style={{}} type="primary">新建</Button>]}
                    tableAlertRender={({ selectedRowKeys, selectedRows }) => (<div>已选择{' '}<a style={{fontWeight: 600,}}>{selectedRowKeys.length}</a>{' '} 项&nbsp;&nbsp;</div>)}
                    request={params => queryRule(params)}
                    options = { false }
                    columns={columns}
                    rowSelection={{}}
                />
            </Card>
        </PageHeaderWrapper>
    )

};
