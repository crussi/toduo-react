//Note: this file was named zzz-... because this needs to load last after all
//jsx components
const StartStep = {
    "name": "StartStep",
    "component" : MultiStep,
    "icon" : ""
}

const ActionableStep = {
    "name": "Actionable",
    "component" :  Actionable,
    "icon" : "run"
}
const IsProjectStep = {
    "name": "IsProject",
    "component" : IsProject,
    "icon" : "assignment"
}
const NonActionableStep = {
    "name" : "NonActionable",
    "component" : NonActionable,
    "icon" : "traffic"
}
const ApproveChangeStep = {
    "name" : "ApproveChange",
    "component" : ApproveChange,
    "icon" : "thumb-up"
}
const ProjectPlanStep = {
    "name" : "ProjectPlan",
    "component" : ProjectPlan,
    "icon" : "assignment-o"
}
const NextActionStep = {
    "name" : "NextAction",
    "component" : NextAction,
    "icon" : "playlist-plus"
}
const IsDoableNowStep = {
    "name" : "IsDoableNow",
    "component" : IsDoableNow,
    "icon" : "timer"
}
const DoItNowStep = {
    "name" : "DoItNow",
    "component" : DoItNow,
    "icon" : "check-square"
}
const IsDelegatableStep = {
    "name" : "IsDelegatable",
    "component" : IsDelegatable,
    "icon" : "account-add"
}
const DelegateStep = {
    "name" : "Delegate",
    "component" : Delegate,
    "icon" : "account-box"
}
const IsSchedulableStep = {
    "name" : "IsSchedulable",
    "component" : IsSchedulable,
    "icon" : "time"
}
const ScheduleStep = {
    "name" : "Schedule",
    "component" : Schedule,
    "icon" : "calendar"
}
const RefineActionStep = {
    "name" : "RefineAction",
    "component" : RefineAction,
    "icon" : "rotate-right"
}


nextstep = {
    "MultiStep.Expand" : {
        "currentstep" : StartStep,
        "nextstep" : ActionableStep,
        "parameters" : "",
        "nextsteplevel" : 1,
        "mintotalsteps" : 3,
        "maxtotalsteps" : 8,
        "maxpctdone" : 0.00,
        "minpctdone" : 0.00,
        "avgpctdone" : 0.00
    },
    "Actionable.Yes" : {
        "currentstep" : ActionableStep,
        "nextstep" : IsProjectStep,
        "parameters" : "",
        "nextsteplevel" : 2,
        "mintotalsteps" : 4,
        "maxtotalsteps" : 8,
        "maxpctdone" : 0.50,
        "minpctdone" : 0.25,
        "avgpctdone" : 0.38
    },
    "Actionable.No" : {
        "currentstep" : ActionableStep,
        "nextstep" : NonActionableStep,
        "parameters" : "",
        "nextsteplevel" : 2,
        "mintotalsteps" : 3,
        "maxtotalsteps" : 3,
        "maxpctdone" : 0.67,
        "minpctdone" : 0.67,
        "avgpctdone" : 0.67
    },
    "NonActionable.Trash" : {
        "currentstep" : NonActionableStep,
        "nextstep" : ApproveChangeStep,
        "parameters" : "Task deleted ...",
        "nextsteplevel" : 3,
        "mintotalsteps" : 3,
        "maxtotalsteps" : 3,
        "maxpctdone" : 1.00,
        "minpctdone" : 1.00,
        "avgpctdone" : 1.00
    },
    "NonActionable.Someday" : {
        "currentstep" : NonActionable,
        "nextstep" : ApproveChangeStep,
        "parameters" : "Task moved to the Someday/maybe list  ...",
        "nextsteplevel" : 3,
        "mintotalsteps" : 3,
        "maxtotalsteps" : 3,
        "maxpctdone" : 1.00,
        "minpctdone" : 1.00,
        "avgpctdone" : 1.00
    },
    "NonActionable.Reference" : {
        "currentstep" : NonActionable,
        "nextstep" : ApproveChangeStep,
        "parameters" : "Task moved to the Reference list ...",
        "nextsteplevel" : 3,
        "mintotalsteps" : 3,
        "maxtotalsteps" : 3,
        "maxpctdone" : 1.00,
        "minpctdone" : 1.00,
        "avgpctdone" : 1.00
    },
    "IsProject.Yes" : {
        "currentstep" : IsProjectStep,
        "nextstep" : ProjectPlanStep,
        "parameters" : "",
        "nextsteplevel" : 3,
        "mintotalsteps" : 4,
        "maxtotalsteps" : 4,
        "maxpctdone" : 0.75,
        "minpctdone" : 0.75,
        "avgpctdone" : 0.75
    },
    "IsProject.No" : {
        "currentstep" : IsProjectStep,
        "nextstep" : NextActionStep,
        "parameters" : "",
        "nextsteplevel" : 3,
        "mintotalsteps" : 6,
        "maxtotalsteps" : 8,
        "maxpctdone" : 0.50,
        "minpctdone" : 0.38,
        "avgpctdone" : 0.44
    },
    "ProjectPlan.Next" : {
        "currentstep" : ProjectPlanStep,
        "nextstep" : ApproveChangeStep,
        "parameters" : "Project created ...",
        "nextsteplevel" : 4,
        "mintotalsteps" : 4,
        "maxtotalsteps" : 4,
        "maxpctdone" : 1.00,
        "minpctdone" : 1.00,
        "avgpctdone" : 1.00
    },
    "NextAction.Next" : {
        "currentstep" : NextActionStep,
        "nextstep" : IsDoableNowStep,
        "parameters" : "",
        "nextsteplevel" : 4,
        "mintotalsteps" : 6,
        "maxtotalsteps" : 8,
        "maxpctdone" : 0.67,
        "minpctdone" : 0.50,
        "avgpctdone" : 0.58
    },
    "IsDoableNow.Yes" : {
        "currentstep" : IsDoableNowStep,
        "nextstep" : DoItNowStep,
        "parameters" : "",
        "nextsteplevel" : 5,
        "mintotalsteps" : 6,
        "maxtotalsteps" : 8,
        "maxpctdone" : 0.83,
        "minpctdone" : 0.63,
        "avgpctdone" : 0.73
    },
    "IsDoableNow.No" : {
        "currentstep" : IsDoableNowStep,
        "nextstep" : IsDelegatableStep,
        "parameters" : "",
        "nextsteplevel" : 5,
        "mintotalsteps" : 7,
        "maxtotalsteps" : 8,
        "maxpctdone" : 0.71,
        "minpctdone" : 0.63,
        "avgpctdone" : 0.67
    },
    "DoItNow.Yes" : {
        "currentstep" : DoItNowStep,
        "nextstep" : ApproveChangeStep,
        "parameters" : "Task marked as done ...",
        "nextsteplevel" : 6,
        "mintotalsteps" : 6,
        "maxtotalsteps" : 6,
        "maxpctdone" : 1.00,
        "minpctdone" : 1.00,
        "avgpctdone" : 1.00
    },
    "DoItNow.No" : {
        "currentstep" : DoItNowStep,
        "nextstep" : IsDelegatableStep,
        "parameters" : "",
        "nextsteplevel" : 5,
        "mintotalsteps" : 7,
        "maxtotalsteps" : 8,
        "maxpctdone" : 0.71,
        "minpctdone" : 0.63,
        "avgpctdone" : 0.67
    },
    "IsDelegatable.Yes" : {
        "currentstep" : IsDelegatableStep,
        "nextstep" : DelegateStep,
        "parameters" : "",
        "nextsteplevel" : 6,
        "mintotalsteps" : 7,
        "maxtotalsteps" : 7,
        "maxpctdone" : 0.86,
        "minpctdone" : 0.86,
        "avgpctdone" : 0.86
    },
    "IsDelegatable.No" : {
        "currentstep" : IsDelegatableStep,
        "nextstep" : IsSchedulableStep,
        "parameters" : "",
        "nextsteplevel" : 6,
        "mintotalsteps" : 8,
        "maxtotalsteps" : 8,
        "maxpctdone" : 0.75,
        "minpctdone" : 0.75,
        "avgpctdone" : 0.75
    },
    "Delegate.Next" : {
        "currentstep" : DelegateStep,
        "nextstep" : ApproveChangeStep,
        "parameters" : "Task delegated ...",
        "nextsteplevel" : 7,
        "mintotalsteps" : 7,
        "maxtotalsteps" : 7,
        "maxpctdone" : 1.00,
        "minpctdone" : 1.00,
        "avgpctdone" : 1.00
    },
    "IsSchedulable.Yes" : {
        "currentstep" : IsSchedulableStep,
        "nextstep" : ScheduleStep,
        "parameters" : "",
        "nextsteplevel" : 7,
        "mintotalsteps" : 8,
        "maxtotalsteps" : 8,
        "maxpctdone" : 0.88,
        "minpctdone" : 0.88,
        "avgpctdone" : 0.88
    },
    "IsSchedulable.No" : {
        "currentstep" : IsSchedulableStep,
        "nextstep" : RefineActionStep,
        "parameters" : "",
        "nextsteplevel" : 7,
        "mintotalsteps" : 8,
        "maxtotalsteps" : 8,
        "maxpctdone" : 0.88,
        "minpctdone" : 0.88,
        "avgpctdone" : 0.88
    },
    "Schedule.Next" : {
        "currentstep" : ScheduleStep,
        "nextstep" : ApproveChangeStep,
        "parameters" : "Event has been scheduled ...",
        "nextsteplevel" : 8,
        "mintotalsteps" : 8,
        "maxtotalsteps" : 8,
        "maxpctdone" : 1.00,
        "minpctdone" : 1.00,
        "avgpctdone" : 1.00
    },
    "RefineAction.Next" : {
        "currentstep" : RefineActionStep,
        "nextstep" : ApproveChangeStep,
        "parameters" : "New task created ...",
        "nextsteplevel" : 8,
        "mintotalsteps" : 8,
        "maxtotalsteps" : 8,
        "maxpctdone" : 1.00,
        "minpctdone" : 1.00,
        "avgpctdone" : 1.00
    }


}

