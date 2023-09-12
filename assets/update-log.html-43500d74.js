import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as u,o as s,c as h,a as l,b as i,d as e,w as d,e as t}from"./app-404be5a2.js";const _={},c=l("h1",{id:"更新日志",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#更新日志","aria-hidden":"true"},"#"),i(" 更新日志")],-1),p={id:"_1-7-4",tabindex:"-1"},f=l("a",{class:"header-anchor",href:"#_1-7-4","aria-hidden":"true"},"#",-1),b=l("li",null,"设置页面新增了切换 PowerShell 实例的选项",-1),g={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/912",target:"_blank",rel:"noopener noreferrer"},m=l("li",null,"设置页面新增了调整主页卡片是否呈现的选项",-1),S=l("li",null,"我的角色页面新增批量添加到养成计划的功能",-1),k={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/887",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/904",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/907",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/893",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/917",target:"_blank",rel:"noopener noreferrer"},D=l("li",null,"修复了养成计划在未进入养成计划页面前没有提前选中的问题，该问题曾导致至少需要进入一次养成计划页面才能添加养成计划",-1),E=l("li",null,"修复了领取签到奖励触发验证时有即使接口报告成功也无法验证成功的问题",-1),P=l("li",null,[i("优化 "),l("ul",null,[l("li",null,"调整了怪物资料中怪物的展示顺序"),l("li",null,"优化了祈愿统计的加载速度"),l("li",null,"优化了数据库访问的 UI 线程占用"),l("li",null,"优化了养成计划页面中部分视图的滚动体验，现在可能需要更长的时间才能加载视图")])],-1),L=t('<h2 id="_1-7-3" tabindex="-1"><a class="header-anchor" href="#_1-7-3" aria-hidden="true">#</a> 1.7.3</h2><ul><li>修复了 HoYoverse 网页登录失效的问题</li><li>升级了 Windows App SDK 版本，修复了标题栏顶部无法缩放窗口的问题</li><li>调整了 UIGF v2.2 导入失败的提示，现在能根据 Id 更快地定位问题</li><li>修复了用户面板领取签到奖励失败但仍然显示成功的问题</li><li>修复了任务栏中的启动游戏项会同时启动游戏窗口和主窗口的问题</li></ul><h2 id="_1-7-2" tabindex="-1"><a class="header-anchor" href="#_1-7-2" aria-hidden="true">#</a> 1.7.2</h2><ul><li>祈愿记录 <ul><li>修复了全量刷新无法正确生效的问题</li><li>修复了无错误的 UIGF 文件无法正确导入的问题</li><li>修复了胡桃云记录无法正确获取的问题</li><li>调整了胡桃云窗口的 UI，使其显示对应 UID 存档中的抽数</li></ul></li><li>我的角色 <ul><li>调整了界面 UI 使其变得更加紧凑</li></ul></li><li>调整了主页通知的 UI， 使其向右侧边缘对齐</li></ul><h2 id="_1-7-0" tabindex="-1"><a class="header-anchor" href="#_1-7-0" aria-hidden="true">#</a> 1.7.0</h2><ul><li>增加了引导页面，在首次启动胡桃时将引导用户使用胡桃 <ul><li>引导用户选择语言</li><li>引导用户确认条款</li><li>引导用户安装 Segoe Fluent Icons 字体和 WebView2 运行时</li><li>引导用户下载静态资源</li></ul></li><li>胡桃主界面 <ul><li>调整了导航栏的图标样式</li><li>修复了调整窗口大小时，可能导致意外崩溃的问题</li></ul></li><li>用户面板 <ul><li>调整了用户面板的样式</li><li>增加了为当前用户领取签到奖励的按钮</li><li>修复了部分情况下启动时无法正确选中当前用户与角色的问题</li></ul></li><li>主页仪表盘 <ul><li>新增胡桃软件公告</li><li>实时便笺卡片增加了刷新时间提示</li><li>修复了实时便笺卡片有时无法正确加载并导致假死/崩溃的问题</li><li>部分活动公告的开始/结束时间修正</li><li>修复了部分公告在查看详情时无法正确显示某些段落的问题</li></ul></li><li>启动游戏（高级启动器） <ul><li>命令栏新增游戏状态指示文本</li><li>修复了无法转换服务器的问题</li><li>调整了转换服务器的逻辑，允许在下载资源失败后重试</li><li>调整了解锁帧率的逻辑，在解锁失败后会自动结束游戏进程</li><li>移除了多客户端功能</li><li>修复了资源下载中客户端本体文件无名称且无法跳转下载的问题</li></ul></li><li>祈愿记录 <ul><li>调整了总览页面的卡片样式，物品变得更大，同时折叠了多项文本</li><li>修复了在未登录或无胡桃云服务时长时进入祈愿记录页面报错的问题</li><li>修复了总览页面卡片列表视图中物品抽数进度条进度与颜色显示不正确的问题</li><li>修复了胡桃云无时长上传奖励文本错误的问题</li><li>修复了能够导入包含不正确物品的 UIGF 格式数据的问题</li><li>修复了无法正确定位到游戏缓存目录的问题</li><li>优化了当物品数量较多时页面加载缓慢的问题</li></ul></li><li>成就记录 <ul><li>修复了在列表/网格视图选择成就分类后切换到相反视图时选中的项可能不会正确显示的问题</li><li>优化了页面的加载速度</li></ul></li><li>实时便笺 <ul><li>调整了验证当前用户与角色按钮的样式</li><li>调整了通知设置视图的样式</li><li>增加了关闭实时便笺自动刷新的入口（仅非管理员模式下可切换，已在管理员模式下进入过实时便笺页面的用户可能无法正确切换此选项）</li><li>调整了实时便笺的样式</li><li>调整了未解锁洞天与未拥有参量质变仪时的文本提示</li><li>实时便笺卡片增加了刷新时间提示</li></ul></li><li>我的角色 <ul><li>调整了列表视图下左侧角色列表的宽度</li><li>命令栏增加了刷新时间显示切换按钮</li><li>增加了角色的各个刷新方法的刷新时间</li><li>角色详情中圣遗物增加了词条强化次数显示</li></ul></li><li>养成计划 <ul><li>修复了从养成计划页面切换至其他页面后可能会导致选中状态保存异常的问题</li></ul></li><li>角色资料 <ul><li>修复了在列表/网格视图选择角色后切换到相反视图时选中的项可能不会正确显示的问题</li></ul></li><li>武器资料 <ul><li>修复了在列表/网格视图选择武器后切换到相反视图时选中的项可能不会正确显示的问题</li><li>增加了武器养成材料速查章节</li></ul></li><li>怪物资料 <ul><li>修复了在列表/网格视图选择怪物后切换到相反视图时选中的项可能不会正确显示的问题</li></ul></li><li>设置 <ul><li>修复了无法删除游戏缓存目录的问题</li><li>增加了极验验证接口配置功能，通过正确配置此选项以对米游社请求进行无感验证</li></ul></li><li>优化了程序的帧率表现</li><li>优化了多线程调度的内存占用</li><li>优化了物品图标的加载速度</li><li>调整了数据库读写的方式，以优化内存占用与响应速度</li><li>调整了 <code>-100</code> 与 <code>-10001</code> 返回代码的文本提示，以帮助用户更好地理解其含义</li><li>其他的小型更改</li></ul><h2 id="_1-6-6" tabindex="-1"><a class="header-anchor" href="#_1-6-6" aria-hidden="true">#</a> 1.6.6</h2><ul><li>新增 <ul><li>祈愿记录页面胡桃云服务新增服务到期时间与开发者提示</li><li>祈愿记录页面新增统计页签，可以查看来自胡桃云的祈愿数据统计</li></ul></li><li>修复 <ul><li>修复了祈愿记录页面缓存刷新失效的问题</li><li>修复了中文繁体无法正确加载元数据的问题</li></ul></li></ul><h2 id="_1-6-5" tabindex="-1"><a class="header-anchor" href="#_1-6-5" aria-hidden="true">#</a> 1.6.5</h2>',9),U={href:"https://translate.hut.ao/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/747",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/747",target:"_blank",rel:"noopener noreferrer"},B=l("li",null,"完善仪表盘",-1),w=l("li",null,"使用 Metadata v2",-1),F={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/749",target:"_blank",rel:"noopener noreferrer"},Y=l("h2",{id:"_1-6-4",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_1-6-4","aria-hidden":"true"},"#"),i(" 1.6.4")],-1),C={href:"https://uigf.org/zh/standards/UIGF.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/733",target:"_blank",rel:"noopener noreferrer"},T=l("li",null,[i("优化 "),l("ul",null,[l("li",null,"在非管理员模式下运行程序时，对管理员模式有要求的功能会有文字提示"),l("li",null,"HoYoLAB 的支持"),l("li",null,"国际化支持")])],-1),V=t('<h2 id="_1-6-3" tabindex="-1"><a class="header-anchor" href="#_1-6-3" aria-hidden="true">#</a> 1.6.3</h2><ul><li>新增 <ul><li>首页仪表盘，包含胡桃云帐号、游戏启动器、祈愿记录、成就统计和实时便笺</li><li>启用新的信息栏功能将自动隐藏应用内通知</li><li>隐藏国服 TapTap 帐号登录的服务器版本</li></ul></li><li>修复 <ul><li>上传深境螺旋数据后无法获得胡桃云奖励的问题</li><li>HoYoLab 不支持 Facebook 登录的问题</li><li>HoYoLab 签到问题</li><li>获取抽卡记录过程中值为空时会产生的问题</li></ul></li><li>优化 <ul><li><strong>项目重构，软件性能提高 20%</strong></li><li>增加支持 WIKI 功能中的本地化翻译</li><li>增加支持国际服支付渠道切换 <ul><li>包括 HoYoverse 默认，Epic 和 Google Pay</li></ul></li><li>开启帧率解锁后，可以在游戏启动时修改帧率上限并立即生效</li></ul></li></ul><h2 id="_1-6-2" tabindex="-1"><a class="header-anchor" href="#_1-6-2" aria-hidden="true">#</a> 1.6.2</h2><ul><li>全新功能 <ul><li>基于胡桃帐号系统的<strong>祈愿记录云同步</strong><ul><li>当前在爱发电打赏用户和测试用户会获得对应时间的云同步权限，已注册用户在上传深渊记录后会获赠 5 天云同步有效期</li><li>该功能会在接下来的数个 1.6 版本中持续优化</li></ul></li></ul></li><li>修复 <ul><li>渠道服帐号的实时便笺无法获取数据的问题</li><li>HoYoLab 帐号的登录问题</li></ul></li><li>优化 <ul><li>重新设计了静态文件获取的流程</li></ul></li></ul><h2 id="_1-6-0" tabindex="-1"><a class="header-anchor" href="#_1-6-0" aria-hidden="true">#</a> 1.6.0</h2><ul><li>新增 <ul><li>胡桃帐号的注册和登录的基本功能</li><li>HoYoLab 帐号的登录并增加其在以下功能的支持 <ul><li>网页登录和 SToken Cookie 登录</li><li>深境螺旋记录</li><li>每日签到</li><li>我的角色</li><li>实时便笺</li></ul></li></ul></li><li>优化 <ul><li>帧数解锁功能性能</li><li>多客户端功能</li><li>帧数解锁和游戏多开功能现在需要用户在设置中手动解锁高级功能</li><li>设置页面布局</li><li>Windows 10 磁贴图标</li></ul></li></ul><h2 id="_1-5-4" tabindex="-1"><a class="header-anchor" href="#_1-5-4" aria-hidden="true">#</a> 1.5.4</h2><ul><li>新增 <ul><li>游戏启动器 <ul><li>游戏资源下载</li><li>原神游戏进程多开</li><li>允许用户在多显示器情况下选择指定显示器启动游戏</li></ul></li><li>使用了全新的图标（更可爱的胡桃）</li></ul></li><li>修复 <ul><li>游戏客户端转换中卡死并无限写入的问题</li></ul></li><li>优化 <ul><li>默认的语言选择方式</li><li>允许直接复制设备 ID</li><li>设置页面美化</li></ul></li></ul><h2 id="_1-5-1" tabindex="-1"><a class="header-anchor" href="#_1-5-1" aria-hidden="true">#</a> 1.5.1</h2><ul><li>优化 <ul><li>将<code>JumpList</code>菜单更换为<code>JumpTask</code>，即使用户关闭最近文件功能也可以使用快速启动菜单了</li><li>增加优先度高于系统设置的语言设置选项</li><li>增加贡献翻译入口</li><li>增加重置图片资源的设置选项</li></ul></li><li>添加 <ul><li>怪物 WIKI</li><li>韩语翻译</li><li>国际化元数据</li></ul></li></ul><h2 id="_1-4-15" tabindex="-1"><a class="header-anchor" href="#_1-4-15" aria-hidden="true">#</a> 1.4.15</h2>',11),N=l("li",null,[i("新增 "),l("ul",null,[l("li",null,"重置图片资源的入口"),l("li",null,"刷新 Cookie 方法")])],-1),K=l("li",null,"修复了部分情况下程序内清除定时任务计划失败的情况",-1),y={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/486",target:"_blank",rel:"noopener noreferrer"},J=l("li",null,"完善英语和繁体中文翻译",-1),R=l("li",null,"在触发 Windows 长路径限制时增加提示",-1),z=l("li",null,"优化了定时任务的唤醒方式",-1),M=l("h2",{id:"_1-4-14",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_1-4-14","aria-hidden":"true"},"#"),i(" 1.4.14")],-1),j=l("ul",null,[l("li",null,"修复了养成计划无法添加的问题"),l("li",null,"支持英语界面"),l("li",null,"其他的问题修复")],-1),q=l("h2",{id:"_1-4-11",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_1-4-11","aria-hidden":"true"},"#"),i(" 1.4.11")],-1),O=l("ul",null,[l("li",null,"商店初版")],-1);function Q(X,Z){const o=u("Badge"),n=u("ExternalLinkIcon"),a=u("RouterLink");return s(),h("div",null,[c,l("h2",p,[f,i(" 1.7.4 "),e(o,{text:"最新版",type:"tip"})]),l("ul",null,[l("li",null,[i("新增 "),l("ul",null,[b,l("li",null,[i("设置页面新增了创建桌面快捷方式的选项 "),l("a",g,[i("#912"),e(n)])]),m,S])]),l("li",null,[i("修复 "),l("ul",null,[l("li",null,[i("修复了主页中部分公告的活动开始时间不正确的问题 "),l("a",k,[i("#887"),e(n)])]),l("li",null,[i("修复了我的角色页面中点击未使用角色橱窗同步数据的武器时会导致崩溃的问题 "),l("a",x,[i("#904"),e(n)])]),l("li",null,[i("修复了我的角色页面中武器数值显示不正确的问题 "),l("a",I,[i("#907"),e(n)])]),l("li",null,[i("修复了无法从 Bilibili 服务器转换到部分服务器的问题 "),l("a",H,[i("#893"),e(n)])]),l("li",null,[i("修复了祈愿记录页面中当记录存在新手祈愿时会导致崩溃的问题 "),l("a",G,[i("#917"),e(n)])]),D,E])]),P]),L,l("ul",null,[l("li",null,[i("新增 "),l("ul",null,[l("li",null,[i("日语选项；社区用户可以现在可以在 "),l("a",U,[i("translate.hut.ao"),e(n)]),i(" 中贡献日语翻译")])])]),l("li",null,[i("修复 "),l("ul",null,[l("li",null,[i("修复无法添加武器养成计划的问题 "),l("a",v,[i("Issue #745"),e(n)])]),l("li",null,[i("部分用户在特定情况下解锁帧数上限失效的问题 "),l("a",A,[i("Issue #747"),e(n)])])])]),l("li",null,[i("优化 "),l("ul",null,[B,w,l("li",null,[i("优化养成计划中材料统计的排序 "),l("a",F,[i("Issue #749"),e(n)])])])])]),Y,l("ul",null,[l("li",null,[i("新增 "),l("ul",null,[l("li",null,[i("以 "),l("a",C,[i("UIGF v2.3"),e(n)]),i(" 数据格式导出祈愿记录")])])]),l("li",null,[i("修复 "),l("ul",null,[l("li",null,[i("解锁帧数上限失效的问题 "),l("a",W,[i("Issue #733"),e(n)])])])]),T]),V,l("ul",null,[N,l("li",null,[i("修复 "),l("ul",null,[l("li",null,[i("修复了"),e(a,{to:"/advanced/known-issue.html#_2-%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%88%87%E6%8D%A2%E5%AF%BC%E8%87%B431-4302%E6%8A%A5%E9%94%99"},{default:d(()=>[i("#2 服务器切换导致 31-4302 报错")]),_:1})]),K])]),l("li",null,[i("优化 "),l("ul",null,[l("li",null,[i("优化了养成计划界面 "),l("a",y,[i("#486"),e(n)])]),J,R,z])])]),M,j,q,O])}const il=r(_,[["render",Q],["__file","update-log.html.vue"]]);export{il as default};
