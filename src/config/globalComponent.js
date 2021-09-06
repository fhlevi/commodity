// Components
import BaseWrapper from 'Components/wrapper/BaseWrapper.vue'
import BaseContentFullCardWrapper from 'Components/wrapper/BaseContentFullCardWrapper.vue'

export default {
    install(Vue) {
        Vue.component('base-wrapper', BaseWrapper)
        Vue.component('base-fullcard-wrapper', BaseContentFullCardWrapper)
    }
}