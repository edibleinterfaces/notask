**Bugs:**

    Active

    - Trashcan Delete UI CSS
        when a tasklist is toggled in delete mode and then deleted,
        that css is applied to the next tasklist in the dom.
        currently, the workaround is to mask it by toggling trashcanVisible 
        off on delete.

    Fixed

    -  Tasklist view can't scroll on ios inside list view
    fix: 
        add direction: horizontal to VueTouch.config.swipe object. 
        link: https://github.com/vuejs/vue-touch/issues/81

** Improvements **

    - css3 transitions suboptimal
        even on an adequate machine, the css3 transition on the right 
        property is not so great. Originally, the mechanism was translateX, 
        but there were issues with hammer.js causing it to function poorly.

**Features:**

    + UI 
        - fade in and out on tasklist sort handle
        - set min tap time for drag handle engage state 
        - dashboard colors vary for on and offline

