const menuList = [{
        name: "首页",
        path: "/",
        children: null,
    },
    {
        name: "产品与解决方案",
        path: "/products",
        children: [{
                name: "中小企业应用",
                path: "/products/company",
                icon: "building",
                children: [
                    { path: "/products/company/1", name: "A6+Clound", isHot: true },
                    { path: "/products/company/1", name: "精品协同人事管理", isHot: true },
                    { path: "/products/company/1", name: "合同管理" },
                    { path: "/products/company/1", name: "费用管理" },
                    { path: "/products/company/1", name: "资产管理" },
                    { path: "/products/company/1", name: "项目管理" },
                    { path: "/products/company/1", name: "更多" },
                ]
            },
            {
                name: "大型集团解决方案",
                path: "/products/company",
                icon: "world",
                children: [
                    { path: "/products/company/1", name: "A8+协同平台" },
                    { path: "/products/company/1", name: "三重一大" },
                    { path: "/products/company/1", name: "业财一体化" },
                    { path: "/products/company/1", name: "更多" },
                ]
            },
            {
                name: "行业领域云",
                path: "/products/company",
                icon: "cloud",
                children: [
                    { path: "/products/company/1", name: "建筑云" },
                    { path: "/products/company/1", name: "人力薪税云" },
                ]
            },
            {
                name: "工具组件",
                path: "/products/company",
                icon: "setting",
                children: [
                    { path: "/products/company/1", name: "表单模板" },
                    { path: "/products/company/1", name: "组件" },
                ]
            }
        ],
    },
    {
        name: "客户案例",
        path: "/case",
        children: null,
    }
]
export default menuList