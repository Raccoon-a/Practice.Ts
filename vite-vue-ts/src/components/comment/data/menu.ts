import {h, reactive} from "vue";
import {MenuOption} from "naive-ui";
import {RouterLink} from "vue-router";

const data = reactive({
    menu: [] as MenuOption[]
})

data.menu = [
        {
          label: () =>
              h(
                  RouterLink,
                  {
                    to: {
                      name: 'home'
                    }
                  },
                  {default: () => 'Home'}
              ),
          key: "home"
        },
    ]
export  default  data