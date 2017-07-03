**Bugs:**

    Active

    - When deleteMode is toggled, and the tasklist is deleted, the next item 
    has its deleteMode toggled.  bug in the library?

    - Overflow scroll bar needs work on all pages
    - Trashcan Delete UI CSS
        when a tasklist is toggled in delete mode and then deleted,
        that css is applied to the next tasklist in the dom.
        currently, the workaround is to mask it by toggling trashcanVisible 
        off on delete.

    - Drag on desktop shows the trashcan outside the browser. reasearch.

    Fixed

    - Tasklist header included in sortable dom elements when task header are sorted.
    fix:
        move tasklist header out of the draggable container for the task header list.

    -  Tasklist view can't scroll on ios inside list view
    fix: 
        add direction: horizontal to VueTouch.config.swipe object. 
        link: https://github.com/vuejs/vue-touch/issues/81

** Improvements **

    - css3 transitions suboptimal
        even on an adequate machine, the css3 transition on the right 
        property is not so great. Originally, the mechanism was translateX, 
        but there were issues with hammer.js causing it to function poorly.
    - scroll to bottom when adding a new task

**Features:**

    + UI 
        - fade in and out on tasklist sort handle
        - set min tap time for drag handle engage state 
        - dashboard colors vary for on and offline
        - add vertical ellipses on right side of tasklist header to indicate swipe
        - distance from top directive

    + Task Details view
        - mark complete
        - mark as syncable
        - Let Task Details 
        - schedule reminders
        - move task to another list
