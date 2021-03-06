// @ts-ignore
import Mock from 'mockjs';
import {SysAppInfo} from '@/entity/domain/SysAppInfo';
import {SysMenuInfo} from '../entity/domain/SysMenuInfo';
export const apps: SysAppInfo[] = [
    new SysAppInfo({appId: 'test', appName: '测试', appIcon: '', appUrl: '//localhost:4201/index.html', appActiveRule: '/test',
        appType: '', appState: '', appDesc: '测试使用。。。。。。',
        sysMenuInfoList: [
            new SysMenuInfo({menuId: 'render', menuName: 'render', menuIcon: '', menuUrl: '/main/render',}),
            new SysMenuInfo({menuId: 'modal', menuName: 'modal模态框', menuIcon: '', menuUrl: '/main/modal',}),
            new SysMenuInfo({menuId: 'button', menuName: 'button按钮', menuIcon: '', menuUrl: '/main/button',}),
            new SysMenuInfo({menuId: 'table', menuName: 'table表格', menuIcon: '', menuUrl: '/main/table',}),
            new SysMenuInfo({menuId: 'menu', menuName: 'menu导航菜单', menuIcon: '', menuUrl: '/main/menu',}),
            new SysMenuInfo({menuId:  'menu', menuName: 'KeepAlive', menuIcon: '', menuUrl: '/main/keep-alive',
                children: [
                    new SysMenuInfo({menuId: 'Test1', menuName: 'test1', menuIcon: '', menuUrl: '/main/keep-alive/test1',}),
                    new SysMenuInfo({menuId: 'Test2', menuName: 'test2', menuIcon: '',menuUrl: '/main/keep-alive/test2',}),
                ]
            }),
        ]}),
    new SysAppInfo({appId: 'organization', appName: '系统管理', appIcon: '',appUrl: '//localhost:4202/index.html', appActiveRule: '/organization',
        appType: '', appState: '', appDesc: '系统管理微应用，包含组织结构管理、角色权限管理、菜单交易管理等',
        sysMenuInfoList: [
            new SysMenuInfo({menuId: 'orgs', menuName: '系统管理', menuIcon: '', menuUrl: '/main',
                children: [
                    /*
                    * 租户维护
                    * 租户应用配置
                    * */
                    new SysMenuInfo({menuId: 'tenants', menuName: '租户管理', menuIcon: '', menuUrl: '/main/tenants',}),
                    /*
                    * 公司/组织部门/人员维护
                    * 人员所属部门/岗位/角色配置
                    * */
                    new SysMenuInfo({menuId: 'members', menuName: '组织结构', menuIcon: '',menuUrl: '/main/members',}),
                    /*
                    * 岗位维护
                    * 岗位下人员，角色配置
                    * */
                    new SysMenuInfo({menuId: 'post', menuName: '岗位管理', menuIcon: '', menuUrl: '/main/post',}),
                    /*
                    *角色维护
                    * 角色下功能权限（菜单/交易/接口），岗位，人员配置
                    * */
                    new SysMenuInfo({menuId: 'roles', menuName: '角色管理', menuIcon: '', menuUrl: '/main/role',}),
                ]}),
            new SysMenuInfo({menuId: 'config', menuName: '系统配置', menuIcon: '', menuUrl: '/main',
                children: [
                    new SysMenuInfo({menuId: 'dict', menuName: '字典管理', menuIcon: '', menuUrl: '/main/dict',}),
                    new SysMenuInfo({menuId: 'treedict', menuName: '树形字典管理', menuIcon: '',menuUrl: '/main/treedict',}),
                    new SysMenuInfo({menuId: 'param', menuName: '系统参数', menuIcon: '', menuUrl: '/main/param',}),
                    new SysMenuInfo({menuId: 'holiday', menuName: '节假日管理', menuIcon: '', menuUrl: '/main/holiday',}),
                ]}),
            new SysMenuInfo({menuId: 'app', menuName: '应用管理', menuIcon: '', menuUrl: '/main/app',}),
            new SysMenuInfo({menuId: 'base', menuName: '基础信息', menuIcon: '', menuUrl: '/main',
                children: [
                    new SysMenuInfo({menuId: 'menu', menuName: '菜单管理', menuIcon: '',  menuUrl: '/main/menu',}),
                    new SysMenuInfo({menuId: 'trade', menuName: '交易管理', menuIcon: '', menuUrl: '/main/trade',}),
                    new SysMenuInfo({menuId: 'interface', menuName: '接口管理', menuIcon: '', menuUrl: '/main/interface',}),
                ]}),
        ]}),
];
const userList = {
    code: 200,
    msg: '操作成功',
    data: apps,
};
export default {
    'get|/selectAppAndMenuList': userList
};
