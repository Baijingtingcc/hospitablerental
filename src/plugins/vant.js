import {
  Button,
  Search,
  Icon,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Cell,
  NavBar,
  IndexBar,
  IndexAnchor
} from 'vant'
const elements = [
  Button,
  Search,
  Icon,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Cell,
  NavBar,
  IndexBar,
  IndexAnchor
]
export default function (Vue) {
  elements.forEach((el) => Vue.use(el))
}
