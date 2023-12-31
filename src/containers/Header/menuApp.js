export const adminMenu = [
    { //hệ thống
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud',link: '/system/user-manage',
            },
            {
                name: 'menu.admin.crud-redux',link: '/system/user-redux',
            },

            {
                name: 'menu.admin.manage-doctor',link: '/system/manage-doctor',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
            // {
            //     name: 'menu.admin.manage-admin',link: '/system/user-admin',
            // },
            {


                        name: 'menu.doctor.manage-schedule',link: '/doctor/manage-schedule',
                    }

            
        ]
    },
    { //phòng khám
        name: 'menu.admin.clinic',
        menus: [
            {
                name: 'menu.admin.manage-clinic',link: '/system/manage-clinic',
            },
            
        ]
    },
    { //Chuyên khoa
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage-specialty',link: '/system/manage-specialty',
            },
            
        ]
    },
    { //Bài đăng
        name: 'menu.admin.handbook',
        menus: [
            {
                name: 'menu.admin.manage-handbook',link: '/system/manage-handbook',
            },
            
        ]
    },
];


export const doctorMenu = [

    { //hệ thống
        name: 'menu.doctor.manage-user',
        menus: [
            {
                name: 'menu.doctor.manage-schedule',link: '/doctor/manage-schedule',
            },    
        ]
    },
];