/*
This data is in /lib so it'll load first and be available to the components
There are 2 main objects: routes, menudata and routestate
menudata - Multi-level sl_ider menu defines metadata for all menu items
routestate - Supports browser history back/forward.  When a route is revisited because
of the back/forward button, the sl_idermenu state is set so that the correct sl_idermenuitems
are displayed and the correct sl_idermenuitem is selected.  The routestate is not intuitive.
The reason is that it is based off of the design of the sl_idermenu and the sl_idertransition
components.

 */




menudata = [
    {
        _id: "FDDp1ru10UCxl2Xnv2NT2Q",
        name: "Inbox",
        icon: "inbox",
        color: "blue",
        route: "/inbox"
    },
    {
        _id: "I10ifHO0PEGrSxI_nNi-ag",
        name: "Next",
        icon: "check-square",
        color: "green",
        route: "/next",
        children: [
            {
                _id: "bFolGPm9ikShWzx76mq0GQ",
                name: "Today",
                icon: "calendar",
                color: "green",
                route: "/next/today"
            },
            {
                _id: "_dy3uCTWF0qsWqELiinqFg",
                name: "This Week",
                icon: "calendar-note",
                color: "green",
                route: "/next/thisweek"
            },
            {
                _id: "w7mtxGN6Vkycw0pzuc7nHw",
                name: "Soon",
                icon: "calendar-check",
                color: "green",
                route: "/next/soon"
            }
        ]
    },
    {
        _id: "fFrT8jnMA0W0iqLa8iLeNw",
        name: "Focus",
        icon: "star",
        color: "red",
        route: "/focus"
    },
    {
        _id: "qvyAi6BwzUefiROWuco38g",
        name: "Waiting for",
        icon: "account-box",
        color: "orange",
        route: "/waitingfor"
    },
    {
        _id: "ELm2BGNyHkCGsEzL5hp_JQ",
        name: "Scheduled",
        icon: "time",
        color: "cyan",
        route: "/scheduled",
        children: [
            {
                _id: "kvIGBCUWZkuzp86JaHye4A",
                name: "Calendar",
                icon: "calendar",
                color: "cyan",
                route: "/scheduled/calendar"
            },
            {
                _id: "XueTfO9q9EuzgzsMcjI1oA",
                name: "Reminders",
                icon: "notifications",
                color: "cyan",
                route: "/scheduled/reminders"
            }
        ]
    },
    {
        _id: "Jldp4JOaD0Oa3W1eOe17ug",
        name: "Someday",
        icon: "pause",
        color: "purple",
        route: "/someday"
    },
    {
        _id: "UeWFiTObrEGrl88O9woGtA",
        name: "Projects",
        icon: "assignment-o",
        color: "pink",
        route: "/project",
        children: [
            {
                _id: "7EHOtAYARkG0c43qsDH5cQ",
                name: "Project 1",
                icon: "assignment",
                color: "pink",
                route: "/project/1"
            },
            {
                _id: "0dCP51BWpEuPWDLiWVKQOQ",
                name: "Project 2",
                icon: "assignment",
                color: "pink",
                route: "/project/2"
            },
            {
                _id: "C_xUMSgdpEuS4Yt1XlO-XQ",
                name: "Project 3",
                icon: "assignment",
                color: "pink",
                route: "/project/3"
            }
        ]
    },
    {
        _id: "IsYuh58UnkyUYZKU0TcGXw",
        name: "Review",
        icon: "local-cafe",
        color: "brown",
        route: "/review"
    },
    {
        _id: "ZABTfpmKh0KSbeN7QwKd3Q",
        name: "Lists",
        icon: "view-list-alt",
        color: "deep-purple",
        route: "/lists",
        children: [
            {
                _id: "uP4uSZ3m9U_bDloeUpDcYw",
                name: "Checklists",
                icon: "view-list-alt",
                color: "deep-purple",
                route: "/lists/checklists"
            },
            {
                _id: "f4NkhuA_PkGyRi7yZIx0Qg",
                name: "Reference",
                icon: "book",
                color: "deep-purple",
                route: "/lists/reference"
            },
            {
                _id: "3Jrjgc86U0m6afkizxB2SA",
                name: "Done",
                icon: "archive",
                color: "deep-purple",
                route: "/lists/done"
            },
            {
                _id: "pSzvcNe3T0q5fwcB2kDUtQ",
                name: "Trash",
                icon: "delete",
                color: "deep-purple",
                route: "/lists/trash"
            }
        ]
    },
    {
        _id: "TuVm9HPakUeoCI2e7XLXPA",
        name: "Contexts",
        icon: "pin",
        color: "teal",
        route: "/contexts",
        children: [
            {
                _id: "RFhgTTkk0Ey3kg_xSpwD8w",
                name: "Roles",
                icon: "local-offer",
                color: "teal",
                route: "/contexts/roles"
            },
            {
                _id: "QXFQzrUDCUC_kfWP9zSPDg",
                name: "Contexts ",
                icon: "pin",
                color: "teal",
                route: "/contexts/contexts"
            },
            {
                _id: "0w0JGgMyX0e0YWm583VwOQ",
                name: "Flags ",
                icon: "flag",
                color: "teal",
                route: "/contexts/flags"
            },
            {
                _id: "QcRkScJUWkesxZ3Wn-ZT_Q",
                name: "Delegates ",
                icon: "account-box",
                color: "teal",
                route: "/contexts/delegates"
            }
        ]
    },
    {
        _id: "lMsxrLlF2Eq6PHgxX2_jkw",
        name: "Settings",
        icon: "settings",
        color: "indigo",
        route: "/settings",
        children: [
            {
                _id: "H-IuJIo9Vkif4JZRKqUd-Q",
                name: "Profile ",
                icon: "account-circle",
                color: "indigo",
                route: "/settings/profile"
            },
            {
                _id: "XcWlwKAXUUS-R-GHN6Ugfg",
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

routestate = {
    "/" :[[],[]],
    "/inbox":[[],[{_id:"FDDp1ru10UCxl2Xnv2NT2Q",route:"/inbox"}]],
    "/next":[[1],[{_id:"I10ifHO0PEGrSxI_nNi-ag",route:"/next"}]],
    "/next/today":[[1],[{_id:"I10ifHO0PEGrSxI_nNi-ag",route:"/next"},{_id:"bFolGPm9ikShWzx76mq0GQ",route:"/next/today"}]],
    "/next/thisweek":[[1],[{_id:"I10ifHO0PEGrSxI_nNi-ag",route:"/next"},{_id:"_dy3uCTWF0qsWqELiinqFg",route:"/next/thisweek"}]],
    "/next/soon":[[1],[{_id:"I10ifHO0PEGrSxI_nNi-ag",route:"/next"},{_id:"w7mtxGN6Vkycw0pzuc7nHw",route:"/next/soon"}]],
    "/focus":[[],[{_id:"fFrT8jnMA0W0iqLa8iLeNw",route:"/focus"}]],
    "/waitingfor":[[],[{_id:"qvyAi6BwzUefiROWuco38g",route:"/waitingfor"}]],
    "/scheduled":[[4],[{_id:"ELm2BGNyHkCGsEzL5hp_JQ",route:"/scheduled"}]],
    "/scheduled/calendar":[[4],[{_id:"ELm2BGNyHkCGsEzL5hp_JQ",route:"/scheduled"},{_id:"kvIGBCUWZkuzp86JaHye4A",route:"/scheduled/calendar"}]],
    "/scheduled/reminders":[[4],[{_id:"ELm2BGNyHkCGsEzL5hp_JQ",route:"/scheduled"},{_id:"XueTfO9q9EuzgzsMcjI1oA",route:"/scheduled/reminders"}]],
    "/someday":[[],[{_id:"Jldp4JOaD0Oa3W1eOe17ug",route:"/someday"}]],
    "/project":[[6],[{_id:"UeWFiTObrEGrl88O9woGtA",route:"/project"}]],
    "/project/1":[[6],[{_id:"UeWFiTObrEGrl88O9woGtA",route:"/project"},{_id:"7EHOtAYARkG0c43qsDH5cQ",route:"/project/1"}]],
    "/project/2":[[6],[{_id:"UeWFiTObrEGrl88O9woGtA",route:"/project"},{_id:"0dCP51BWpEuPWDLiWVKQOQ",route:"/project/2"}]],
    "/project/3":[[6],[{_id:"UeWFiTObrEGrl88O9woGtA",route:"/project"},{_id:"C_xUMSgdpEuS4Yt1XlO-XQ",route:"/project/3"}]],
    "/review":[[],[{_id:"IsYuh58UnkyUYZKU0TcGXw",route:"/review"}]],
    "/lists":[[8],[{_id:"ZABTfpmKh0KSbeN7QwKd3Q",route:"/lists"}]],
    "/lists/checklists":[[8],[{_id:"ZABTfpmKh0KSbeN7QwKd3Q",route:"/lists"},{_id:"uP4uSZ3m9U_bDloeUpDcYw",route:"/lists/checklists"}]],
    "/lists/reference":[[8],[{_id:"ZABTfpmKh0KSbeN7QwKd3Q",route:"/lists"},{_id:"f4NkhuA_PkGyRi7yZIx0Qg",route:"/lists/reference"}]],
    "/lists/done":[[8],[{_id:"ZABTfpmKh0KSbeN7QwKd3Q",route:"/lists"},{_id:"3Jrjgc86U0m6afkizxB2SA",route:"/lists/done"}]],
    "/lists/trash":[[8],[{_id:"ZABTfpmKh0KSbeN7QwKd3Q",route:"/lists"},{_id:"pSzvcNe3T0q5fwcB2kDUtQ",route:"/lists/trash"}]],
    "/contexts":[[9],[{_id:"TuVm9HPakUeoCI2e7XLXPA",route:"/contexts"}]],
    "/contexts/roles":[[9],[{_id:"TuVm9HPakUeoCI2e7XLXPA",route:"/contexts"},{_id:"RFhgTTkk0Ey3kg_xSpwD8w",route:"/contexts/roles"}]],
    "/contexts/contexts":[[9],[{_id:"TuVm9HPakUeoCI2e7XLXPA",route:"/contexts"},{_id:"QXFQzrUDCUC_kfWP9zSPDg",route:"/contexts/contexts"}]],
    "/contexts/flags":[[9],[{_id:"TuVm9HPakUeoCI2e7XLXPA",route:"/contexts"},{_id:"0w0JGgMyX0e0YWm583VwOQ",route:"/contexts/flags"}]],
    "/contexts/delegates":[[9],[{_id:"TuVm9HPakUeoCI2e7XLXPA",route:"/contexts"},{_id:"QcRkScJUWkesxZ3Wn-ZT_Q",route:"/contexts/delegates"}]],
    "/settings":[[10],[{_id:"lMsxrLlF2Eq6PHgxX2_jkw",route:"/settings"}]],
    "/settings/profile":[[10],[{_id:"lMsxrLlF2Eq6PHgxX2_jkw",route:"/settings"},{_id:"H-IuJIo9Vkif4JZRKqUd-Q",route:"/settings/profile"}]],
    "/settings/general":[[10],[{_id:"lMsxrLlF2Eq6PHgxX2_jkw",route:"/settings"},{_id:"XcWlwKAXUUS-R-GHN6Ugfg",route:"/settings/general"}]]
};


