<style lang="scss">

    @import 'style/colors.scss';
	$themes: (
		icecream: (
			primary: salmon,
			secondary: aquamarine
		),
		bw: (
			primary: lightslategrey,
			secondary: whitesmoke
		)
	);

	@mixin themify($themes) {
	  @each $theme, $map in $themes {
		.theme-#{$theme} & {
		  $theme-map: () !global;
		  @each $key, $submap in $map {
			$value: map-get(map-get($themes, $theme), '#{$key}');
			$theme-map: map-merge($theme-map, ($key: $value)) !global;
		  }
		  @content;
		  $theme-map: null !global;
		}
	  }
	}

	@function themed($key) {
	  @return map-get($theme-map, $key);
	}

        .theme {
            height: 100%;
            width: 100%;
        }

        .landing-container {


            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .title {
                text-decoration: none;
                font-size: 10vw;
                font-weight: 600;
                padding: 5%;
                @include themify($themes) {

                    .no {
                        color: themed('primary');
                    }
                    .task {
                        color: themed('secondary');
                    }
                }
            }
        }
</style>
<template>
    <div class="theme" :class="colorThemeClass">
        <div class="landing-container">
            <router-link to="/tasklists" class="title">
                <span class="no">No</span><span class="task">Task</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Tasklist from './../components/tasklists/Tasklist';
    import Task from './../components/tasklists/Task';
    import store from './../store';

    export default {
      name: 'landing-page',
      components: { Tasklist, Task },
      props: ['tasklists'],
      data: function() {
          return {
              colorThemeClass: 'theme-' + store.getters.colorTheme,
          };
      },
      getters: {
          colorTheme() {
              return store.getters.colorTheme;
          }
      }
    }
</script>
