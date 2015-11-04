/*
This data is in /lib so it'll load first and be available to the components
There are 3 main objects: routes, menudata and routestate
routes - Contains all possible routes for the app
menudata - Multi-level slider menu defines metadata for all menu items
routestate - Supports browser history back/forward.  When a route is revisited because
of the back/forward button, the slidermenu state is set so that the correct slidermenuitems
are displayed and the correct slidermenuitem is selected.  The routestate is not intuitive.
The reason is that it is based off of the design of the slidermenu and the slidertransition
components.

 */

routes = {
    root : "/",
    inbox : "/inbox",
    next : "/next",
    next_today : "/next/today",
    next_thisweek : "/next/thisweek",
    next_soon : "/next/soon",
    focus : "/focus",
    waitingfor : "/waitingfor",
    scheduled : "/scheduled",
    scheduled_calendar : "/scheduled/calendar",
    scheduled_reminders : "/scheduled/reminders",
    someday : "/someday",
    projects : "/project",
    project_1 : "/project/1",
    project_2 : "/project/2",
    project_3 : "/project/3",
    review : "/review",
    lists : "/lists",
    lists_checklists : "/lists/checklists",
    lists_reference : "/lists/reference",
    lists_done : "/lists/done",
    lists_trash : "/lists/trash",
    contexts : "/contexts",
    contexts_roles : "/contexts/roles",
    contexts_contexts : "/contexts/contexts",
    contexts_flags : "/contexts/flags",
    contexts_delegates : "/contexts/delegates",
    settings : "/settings",
    settings_profile : "/settings/profile",
    settings_general : "/settings/general"
}

/*
These are the menu items.  They are made const to promote reuse and consolidation
of code
*/
const inbox = {
    id: "FDDp1ru10UCxl2Xnv2NT2Q",
    name: "Inbox",
    icon: "inbox",
    color: "blue",
    route: routes.inbox
};
const today = {
    id: "bFolGPm9ikShWzx76mq0GQ",
    name: "Today",
    icon: "calendar",
    color: "green",
    route: routes.next_today
};
const thisweek = {
    id: "_dy3uCTWF0qsWqELiinqFg",
    name: "This Week",
    icon: "calendar-note",
    color: "green",
    route: routes.next_thisweek
};
const soon = {
    id: "w7mtxGN6Vkycw0pzuc7nHw",
    name: "Soon",
    icon: "calendar-check",
    color: "green",
    route: routes.next_soon
};
const next = {
    id: "I10ifHO0PEGrSxI_nNi-ag",
    name: "Next",
    icon: "check-square",
    color: "green",
    route: routes.next,
    children: [today,thisweek,soon]
};
const focus = {
    id: "fFrT8jnMA0W0iqLa8iLeNw",
    name: "Focus",
    icon: "star",
    color: "red",
    route: routes.focus
};
const waitingfor = {
    id: "qvyAi6BwzUefiROWuco38g",
    name: "Waiting for",
    icon: "account-box",
    color: "orange",
    route: routes.waitingfor
};
const calendar = {
    id: "kvIGBCUWZkuzp86JaHye4A",
    name: "Calendar",
    icon: "calendar",
    color: "cyan",
    route: routes.scheduled_calendar
};
const reminders = {
    id: "XueTfO9q9EuzgzsMcjI1oA",
    name: "Reminders",
    icon: "notifications",
    color: "cyan",
    route: routes.scheduled_reminders
};
const scheduled = {
    id: "ELm2BGNyHkCGsEzL5hp_JQ",
    name: "Scheduled",
    icon: "time",
    color: "cyan",
    route: routes.scheduled,
    children: [calendar,reminders]
};
const someday = {
    id: "Jldp4JOaD0Oa3W1eOe17ug",
    name: "Someday",
    icon: "pause",
    color: "purple",
    route: routes.someday
};
const project1 = {
    id: "7EHOtAYARkG0c43qsDH5cQ",
    name: "Project 1",
    icon: "assignment",
    color: "pink",
    route: routes.projects_1
};
const project2 = {
    id: "0dCP51BWpEuPWDLiWVKQOQ",
    name: "Project 2",
    icon: "assignment",
    color: "pink",
    route: routes.projects_2
};
const project3 = {
    id: "C_xUMSgdpEuS4Yt1XlO-XQ",
    name: "Project 3",
    icon: "assignment",
    color: "pink",
    route: routes.projects_3
};
const projects = {
    id: "UeWFiTObrEGrl88O9woGtA",
    name: "Projects",
    icon: "assignment-o",
    color: "pink",
    route: routes.projects,
    children: [project1,project2,project3]
};
const review = {
    id: "IsYuh58UnkyUYZKU0TcGXw",
    name: "Review",
    icon: "local-cafe",
    color: "brown",
    route: routes.review
};
const checklists = {
    id: "uP4uSZ3m9U_bDloeUpDcYw",
    name: "Checklists",
    icon: "view-list-alt",
    color: "deep-purple",
    route: routes.lists_checklists
};
const reference = {
    id: "f4NkhuA_PkGyRi7yZIx0Qg",
    name: "Reference",
    icon: "book",
    color: "deep-purple",
    route: routes.lists_reference
};
const done = {
    id: "3Jrjgc86U0m6afkizxB2SA",
    name: "Done",
    icon: "archive",
    color: "deep-purple",
    route: routes.lists_done
};
const trash = {
    id: "pSzvcNe3T0q5fwcB2kDUtQ",
    name: "Trash",
    icon: "delete",
    color: "deep-purple",
    route: routes.lists_trash
};
const lists = {
    id: "ZABTfpmKh0KSbeN7QwKd3Q",
    name: "Lists",
    icon: "view-list-alt",
    color: "deep-purple",
    route: routes.lists,
    children: [checklists,reference,done,trash]
};
const roles = {
    id: "RFhgTTkk0Ey3kg_xSpwD8w",
    name: "Roles",
    icon: "local-offer",
    color: "teal",
    route: routes.contexts_roles
};
const contexts = {
    id: "QXFQzrUDCUC_kfWP9zSPDg",
    name: "Contexts ",
    icon: "pin",
    color: "teal",
    route: routes.contexts_contexts
};
const flags = {
    id: "0w0JGgMyX0e0YWm583VwOQ",
    name: "Flags ",
    icon: "flag",
    color: "teal",
    route: routes.contexts_flags
};
const delegates = {
    id: "QcRkScJUWkesxZ3Wn-ZT_Q",
    name: "Delegates ",
    icon: "account-box",
    color: "teal",
    route: routes.contexts_delegates
};
const contexttypes = {
    id: "TuVm9HPakUeoCI2e7XLXPA",
    name: "Contexts",
    icon: "pin",
    color: "teal",
    route: routes.contexts,
    children: [roles,contexts,flags,delegates]
};
const profile = {
    id: "H-IuJIo9Vkif4JZRKqUd-Q",
    name: "Profile ",
    icon: "account-circle",
    color: "indigo",
    route: routes.settings_profile
};
const general = {
    id: "XcWlwKAXUUS-R-GHN6Ugfg",
    name: "General ",
    icon: "settings",
    color: "indigo",
    route: routes.settings_general
};
const settings = {
    id: "lMsxrLlF2Eq6PHgxX2_jkw",
    name: "Settings",
    icon: "settings",
    color: "indigo",
    route: routes.settings,
    children: [profile,general]
}

/*
menudata is used to populate the slidermenu
 */
//menudata = [
//    inbox,
//    next,
//    focus,
//    waitingfor,
//    scheduled,
//    someday,
//    projects,
//    review,
//    lists,
//    contexttypes,
//    settings
//];

menudata = [
    {
        id: "FDDp1ru10UCxl2Xnv2NT2Q",
        name: "Inbox",
        icon: "inbox",
        color: "blue",
        route: "/inbox"
    },
    {
        id: "I10ifHO0PEGrSxI_nNi-ag",
        name: "Next",
        icon: "check-square",
        color: "green",
        route: "/next",
        children: [
            {
                id: "bFolGPm9ikShWzx76mq0GQ",
                name: "Today",
                icon: "calendar",
                color: "green",
                route: "/next/today"
            },
            {
                id: "_dy3uCTWF0qsWqELiinqFg",
                name: "This Week",
                icon: "calendar-note",
                color: "green",
                route: "/next/thisweek"
            },
            {
                id: "w7mtxGN6Vkycw0pzuc7nHw",
                name: "Soon",
                icon: "calendar-check",
                color: "green",
                route: "/next/soon"
            }
        ]
    },
    {
        id: "fFrT8jnMA0W0iqLa8iLeNw",
        name: "Focus",
        icon: "star",
        color: "red",
        route: "/focus"
    },
    {
        id: "qvyAi6BwzUefiROWuco38g",
        name: "Waiting for",
        icon: "account-box",
        color: "orange",
        route: "/waitingfor"
    },
    {
        id: "ELm2BGNyHkCGsEzL5hp_JQ",
        name: "Scheduled",
        icon: "time",
        color: "cyan",
        route: "/scheduled",
        children: [
            {
                id: "kvIGBCUWZkuzp86JaHye4A",
                name: "Calendar",
                icon: "calendar",
                color: "cyan",
                route: "/scheduled/calendar"
            },
            {
                id: "XueTfO9q9EuzgzsMcjI1oA",
                name: "Reminders",
                icon: "notifications",
                color: "cyan",
                route: "/scheduled/reminders"
            }
        ]
    },
    {
        id: "Jldp4JOaD0Oa3W1eOe17ug",
        name: "Someday",
        icon: "pause",
        color: "purple",
        route: "/someday"
    },
    {
        id: "UeWFiTObrEGrl88O9woGtA",
        name: "Projects",
        icon: "assignment-o",
        color: "pink",
        route: "/project",
        children: [
            {
                id: "7EHOtAYARkG0c43qsDH5cQ",
                name: "Project 1",
                icon: "assignment",
                color: "pink",
                route: "/project/1"
            },
            {
                id: "0dCP51BWpEuPWDLiWVKQOQ",
                name: "Project 2",
                icon: "assignment",
                color: "pink",
                route: "/project/2"
            },
            {
                id: "C_xUMSgdpEuS4Yt1XlO-XQ",
                name: "Project 3",
                icon: "assignment",
                color: "pink",
                route: "/project/3"
            }
        ]
    },
    {
        id: "IsYuh58UnkyUYZKU0TcGXw",
        name: "Review",
        icon: "local-cafe",
        color: "brown",
        route: "/review"
    },
    {
        id: "ZABTfpmKh0KSbeN7QwKd3Q",
        name: "Lists",
        icon: "view-list-alt",
        color: "deep-purple",
        route: "/lists",
        children: [
            {
                id: "uP4uSZ3m9U_bDloeUpDcYw",
                name: "Checklists",
                icon: "view-list-alt",
                color: "deep-purple",
                route: "/lists/checklists"
            },
            {
                id: "f4NkhuA_PkGyRi7yZIx0Qg",
                name: "Reference",
                icon: "book",
                color: "deep-purple",
                route: routes.lists_reference
            },
            {
                id: "3Jrjgc86U0m6afkizxB2SA",
                name: "Done",
                icon: "archive",
                color: "deep-purple",
                route: "/lists/done"
            },
            {
                id: "pSzvcNe3T0q5fwcB2kDUtQ",
                name: "Trash",
                icon: "delete",
                color: "deep-purple",
                route: "/lists/trash"
            }
        ]
    },
    {
        id: "TuVm9HPakUeoCI2e7XLXPA",
        name: "Contexts",
        icon: "pin",
        color: "teal",
        route: "/contexts",
        children: [
            {
                id: "RFhgTTkk0Ey3kg_xSpwD8w",
                name: "Roles",
                icon: "local-offer",
                color: "teal",
                route: "/contexts/roles"
            },
            {
                id: "QXFQzrUDCUC_kfWP9zSPDg",
                name: "Contexts ",
                icon: "pin",
                color: "teal",
                route: "/contexts/contexts"
            },
            {
                id: "0w0JGgMyX0e0YWm583VwOQ",
                name: "Flags ",
                icon: "flag",
                color: "teal",
                route: "/contexts/flags"
            },
            {
                id: "QcRkScJUWkesxZ3Wn-ZT_Q",
                name: "Delegates ",
                icon: "account-box",
                color: "teal",
                route: "/contexts/delegates"
            }
        ]
    },
    {
        id: "lMsxrLlF2Eq6PHgxX2_jkw",
        name: "Settings",
        icon: "settings",
        color: "indigo",
        route: "/settings",
        children: [
            {
                id: "H-IuJIo9Vkif4JZRKqUd-Q",
                name: "Profile ",
                icon: "account-circle",
                color: "indigo",
                route: "/settings/profile"
            },
            {
                id: "XcWlwKAXUUS-R-GHN6Ugfg",
                name: "General ",
                icon: "settings",
                color: "indigo",
                route: "/settings/general"
            }
        ]
    }

];


/*
routestate is used to support browser history back/forward.  When a
route is revisited the state for the route is retrieved from this hashtable.
Note: key - route
      value - pair of arrays:
      first array - path (and depth) of the selected parent node. If an empty array
      then the menu item has no children, otherwise, it's the array index of the parent
      node.
      second array - selected items
 */
//routestate = {
//    [routes.root] :[[],[]],
//    [routes.inbox]:[[],[inbox]],
//    [routes.next]:[[1],[next]],
//    [routes.next_today]:[[1],[next,today]],
//    [routes.next_thisweek]:[[1],[next,thisweek]],
//    [routes.next_soon]:[[1],[next,soon]],
//    [routes.focus]:[[],[focus]],
//    [routes.waitingfor]:[[],[waitingfor]],
//    [routes.scheduled]:[[4],[scheduled]],
//    [routes.scheduled_calendar]:[[4],[scheduled,calendar]],
//    [routes.scheduled_reminders]:[[4],[scheduled,reminders]],
//    [routes.someday]:[[],[someday]],
//    [routes.projects]:[[6],[projects]],
//    [routes.projects_project_1]:[[6],[projects,project1]],
//    [routes.projects_project_2]:[[6],[projects,project2]],
//    [routes.projects_project_3]:[[6],[projects,project3]],
//    [routes.review]:[[],[review]],
//    [routes.lists]:[[8],[lists]],
//    [routes.lists_checklists]:[[8],[lists,checklists]],
//    [routes.lists_reference]:[[8],[lists,reference]],
//    [routes.lists_done]:[[8],[lists,done]],
//    [routes.lists_trash]:[[8],[lists,trash]],
//    [routes.contexts]:[[9],[contexttypes]],
//    [routes.contexts_roles]:[[9],[contexttypes,roles]],
//    [routes.contexts_contexts]:[[9],[contexttypes,contexts]],
//    [routes.contexts_flags]:[[9],[contexttypes,flags]],
//    [routes.contexts_delegates]:[[9],[contexttypes,delegates]],
//    [routes.settings]:[[10],[settings]],
//    [routes.settings_profile]:[[10],[settings,profile]],
//    [routes.settings_general]:[[10],[settings,general]]
//};

routestate = {
    "/" :[[],[]],
    "/inbox":[[],[{id:"FDDp1ru10UCxl2Xnv2NT2Q",route:"/inbox"}]],
    "/next":[[1],[{id:"I10ifHO0PEGrSxI_nNi-ag",route:"/next"}]],
    "/next/today":[[1],[{id:"I10ifHO0PEGrSxI_nNi-ag",route:"/next"},{id:"bFolGPm9ikShWzx76mq0GQ",route:"/next/today"}]],
    "/next/thisweek":[[1],[{id:"I10ifHO0PEGrSxI_nNi-ag",route:"/next"},{id:"_dy3uCTWF0qsWqELiinqFg",route:"/next/thisweek"}]],
    "/next/soon":[[1],[{id:"I10ifHO0PEGrSxI_nNi-ag",route:"/next"},{id:"w7mtxGN6Vkycw0pzuc7nHw",route:"/next/soon"}]],
    "/focus":[[],[{id:"fFrT8jnMA0W0iqLa8iLeNw",route:"/focus"}]],
    "/waitingfor":[[],[{id:"qvyAi6BwzUefiROWuco38g",route:"/waitingfor"}]],
    "/scheduled":[[4],[{id:"ELm2BGNyHkCGsEzL5hp_JQ",route:"/scheduled"}]],
    "/scheduled/calendar":[[4],[{id:"ELm2BGNyHkCGsEzL5hp_JQ",route:"/scheduled"},{id:"kvIGBCUWZkuzp86JaHye4A",route:"/scheduled/calendar"}]],
    "/scheduled/reminders":[[4],[{id:"ELm2BGNyHkCGsEzL5hp_JQ",route:"/scheduled"},{id:"XueTfO9q9EuzgzsMcjI1oA",route:"/scheduled/reminders"}]],
    "/someday":[[],[{id:"Jldp4JOaD0Oa3W1eOe17ug",route:"/someday"}]],
    "/project":[[6],[{id:"UeWFiTObrEGrl88O9woGtA",route:"/project"}]],
    "/project/1":[[6],[{id:"UeWFiTObrEGrl88O9woGtA",route:"/project"},{id:"7EHOtAYARkG0c43qsDH5cQ",route:"/project/1"}]],
    "/project/2":[[6],[{id:"UeWFiTObrEGrl88O9woGtA",route:"/project"},{id:"0dCP51BWpEuPWDLiWVKQOQ",route:"/project/2"}]],
    "/project/3":[[6],[{id:"UeWFiTObrEGrl88O9woGtA",route:"/project"},{id:"C_xUMSgdpEuS4Yt1XlO-XQ",route:"/project/3"}]],
    "/review":[[],[{id:"IsYuh58UnkyUYZKU0TcGXw",route:"/review"}]],
    "/lists":[[8],[{id:"ZABTfpmKh0KSbeN7QwKd3Q",route:"/lists"}]],
    "/lists/checklists":[[8],[{id:"ZABTfpmKh0KSbeN7QwKd3Q",route:"/lists"},{id:"uP4uSZ3m9U_bDloeUpDcYw",route:"/lists/checklists"}]],
    "/lists/reference":[[8],[{id:"ZABTfpmKh0KSbeN7QwKd3Q",route:"/lists"},{id:"f4NkhuA_PkGyRi7yZIx0Qg",route:"/lists/reference"}]],
    "/lists/done":[[8],[{id:"ZABTfpmKh0KSbeN7QwKd3Q",route:"/lists"},{id:"3Jrjgc86U0m6afkizxB2SA",route:"/lists/done"}]],
    "/lists/trash":[[8],[{id:"ZABTfpmKh0KSbeN7QwKd3Q",route:"/lists"},{id:"pSzvcNe3T0q5fwcB2kDUtQ",route:"/lists/trash"}]],
    "/contexts":[[9],[{id:"TuVm9HPakUeoCI2e7XLXPA",route:"/contexts"}]],
    "/contexts/roles":[[9],[{id:"TuVm9HPakUeoCI2e7XLXPA",route:"/contexts"},{id:"RFhgTTkk0Ey3kg_xSpwD8w",route:"/contexts/roles"}]],
    "/contexts/contexts":[[9],[{id:"TuVm9HPakUeoCI2e7XLXPA",route:"/contexts"},{id:"QXFQzrUDCUC_kfWP9zSPDg",route:"/contexts/contexts"}]],
    "/contexts/flags":[[9],[{id:"TuVm9HPakUeoCI2e7XLXPA",route:"/contexts"},{id:"0w0JGgMyX0e0YWm583VwOQ",route:"/contexts/flags"}]],
    "/contexts/delegates":[[9],[{id:"TuVm9HPakUeoCI2e7XLXPA",route:"/contexts"},{id:"QcRkScJUWkesxZ3Wn-ZT_Q",route:"/contexts/delegates"}]],
    "/settings":[[10],[{id:"lMsxrLlF2Eq6PHgxX2_jkw",route:"/settings"}]],
    "/settings/profile":[[10],[{id:"lMsxrLlF2Eq6PHgxX2_jkw",route:"/settings"},{id:"H-IuJIo9Vkif4JZRKqUd-Q",route:"/settings/profile"}]],
    "/settings/general":[[10],[{id:"lMsxrLlF2Eq6PHgxX2_jkw",route:"/settings"},{id:"XcWlwKAXUUS-R-GHN6Ugfg",route:"/settings/general"}]]
};


