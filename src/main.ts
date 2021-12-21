import { TooltipModel } from 'chart.js'
import { ref } from 'vue'

const foo = ref<TooltipModel<"line">>({} as TooltipModel<"line">);

foo.value = {} as TooltipModel<"line">;