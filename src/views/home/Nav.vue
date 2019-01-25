<template>

  <div>
   <com title="hello"  @change="post" ref="hello">test</com>
    <com title="listen" @change="post">pppp</com>
    <com title="aaaa" @change="post" inline-template>
      <div>
        <p>These are compiled as the component's own template.</p>
        <p>Not parent's transclusion content.</p>
      </div>
    </com>
    <com title="bbbb" @change="$event+=1"></com>
    <p v-focus>{{total}}</p>

    <el-button type="primary" @click="changeComponent">chagecomponet</el-button>
     <transition name="fade">
    <keep-alive>
      <component :is="current"></component>
    </keep-alive>
     </transition>

  </div>

</template>

<script>
import com from './com'
import Person from './Person'

var myMinxin = {
  data () {
    return {
      total: 12
    }
  },
  template: '<p>hello</p>',

  created () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello')
    }
  }
}
export default {
  name: 'Nav',
  mixins: [myMinxin],
  components: {com, Person},
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      searchBarFixed: false,
      total: 0,
      current: 'Person'
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#searchBar').offsetTop
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    },
    post: function (argument) {
      this.total += 1
      console.log(argument)
      this.hello()
    },
    changeComponent: function () {
      if (this.current === 'com') {
        this.current = 'Person'
        console.log(this.$refs.hello.text)
      } else {
        this.current = 'com'
      }
    }
  }

}
</script>

<style scoped>
  .nav{
    height: 250px;
  }
  .content{
    height: 1900px;
  }
  .searchBar{
  .isFixed{
    position:fixed;
    background-color:#Fff;
    top:0;
    z-index:999;
  }
  ul {
    width:100%;
    height: 40px;
    line-height: 40px;
    display: flex;
  li {
    list-style: none;
    font-size: 0.8rem;
    text-align: center;
    flex: 1;
  i {
    font-size: 0.9rem;
    padding-left: 5px;
    color: #ccc;
  }
  }
  border-bottom: 1px solid #ddd;
  }
  .fade-enter-active{
    transition: opacity .4s;
    animation: bounce-in .5s;
  }
  .fade-enter{
    opacity: 0;
  }
  }

</style>
